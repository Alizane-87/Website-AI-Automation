type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 5000;

export type RateLimitResult = { allowed: boolean; retryAfterSeconds: number };

/**
 * Fixed-window limiter held in process memory. Adequate for a single-region
 * marketing deployment; move to a shared store if the site is scaled out.
 */
export function checkRateLimit(key: string, now = Date.now()): RateLimitResult {
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (buckets.size >= MAX_TRACKED_KEYS) {
      for (const [existingKey, existingBucket] of buckets) {
        if (existingBucket.resetAt <= now) buckets.delete(existingKey);
      }
      if (buckets.size >= MAX_TRACKED_KEYS) buckets.clear();
    }
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  bucket.count += 1;
  if (bucket.count > MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/** Best-effort client identity for rate limiting. */
export function clientKeyFromHeaders(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
  return `lead:${ip}`;
}

const chatBuckets = new Map<string, Bucket>();
const CHAT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_CHAT_PER_MINUTE = 8; // Max 8 messages per minute per IP

export function checkChatRateLimit(key: string, now = Date.now()): RateLimitResult {
  const bucket = chatBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    if (chatBuckets.size >= MAX_TRACKED_KEYS) {
      for (const [existingKey, existingBucket] of chatBuckets) {
        if (existingBucket.resetAt <= now) chatBuckets.delete(existingKey);
      }
      if (chatBuckets.size >= MAX_TRACKED_KEYS) chatBuckets.clear();
    }
    chatBuckets.set(key, { count: 1, resetAt: now + CHAT_WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  bucket.count += 1;
  if (bucket.count > MAX_CHAT_PER_MINUTE) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

export function chatClientKeyFromHeaders(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
  return `chat:${ip}`;
}
