const CACHE_NAME = "lostschedule-static-v1";

const STATIC_ASSETS = ["/favicon.png"];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // HTML → 네트워크 우선 (핵심)
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).catch(() => caches.match("/index.html")));
    return;
  }

  // JS → 네트워크 우선
  if (req.url.endsWith(".js")) {
    event.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // 나머지 정적 파일 → 캐시 우선
  event.respondWith(caches.match(req).then((res) => res || fetch(req)));
});
