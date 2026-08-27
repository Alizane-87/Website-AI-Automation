import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  try {
    let normalizedUrl = targetUrl.trim();
    if (!normalizedUrl.startsWith("http://") && !normalizedUrl.startsWith("https://")) {
      normalizedUrl = "https://" + normalizedUrl;
    }

    const parsed = new URL(normalizedUrl);
    const origin = parsed.origin;

    const response = await fetch(normalizedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
      },
      redirect: "follow",
    });

    if (!response.ok) {
      return new NextResponse(`Failed to fetch target site: ${response.statusText}`, {
        status: response.status,
      });
    }

    let html = await response.text();

    // 1. Strip CSP and X-Frame-Options meta tags
    html = html.replace(/<meta[^>]*http-equiv=["']?Content-Security-Policy["']?[^>]*>/gi, "");
    html = html.replace(/<meta[^>]*http-equiv=["']?X-Frame-Options["']?[^>]*>/gi, "");

    // 2. Strip frame-busting scripts
    html = html.replace(/top\.location\s*=/gi, "window._dummyLoc =");
    html = html.replace(/window\.top\s*!==\s*window\.self/gi, "false");
    html = html.replace(/top\s*!==\s*self/gi, "false");
    html = html.replace(/parent\.location/gi, "window.location");

    // 3. Inject base tag so all relative assets (CSS, images, fonts, JS) load from original host
    const baseTag = `<base href="${origin}/">`;
    if (html.includes("<head>")) {
      html = html.replace("<head>", `<head>${baseTag}`);
    } else if (html.includes("<HEAD>")) {
      html = html.replace("<HEAD>", `<HEAD>${baseTag}`);
    } else {
      html = baseTag + html;
    }

    // 4. Inject a lightweight script to keep link clicks navigating within our proxy
    const helperScript = `
      <script>
        document.addEventListener('click', function(e) {
          var a = e.target.closest('a');
          if (a && a.href && a.href.startsWith('${origin}')) {
            // Keep on original host or open safely
            a.target = '_self';
          }
        }, true);
      </script>
    `;
    html = html.replace("</body>", `${helperScript}</body>`);

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        // Remove framing restrictions
        "X-Frame-Options": "ALLOWALL",
      },
    });
  } catch (err: any) {
    return new NextResponse(`Proxy error: ${err?.message || "Unknown error"}`, { status: 500 });
  }
}
