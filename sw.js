// Stopedia service worker — caches the app shell so Stopedia opens offline.
// Saved routes and the TomTom key live in localStorage, not in this cache.
const CACHE = "stopedia-v0.36";
const SHELL = ["./", "./index.html", "./legal.html", "./manifest.webmanifest", "./logo-badge.png", "./logo-flat.png", "./home-map.webp"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  // TomTom API calls: always network (never cache).
  if (e.request.url.includes("api.tomtom.com")) return;
  const isPage = e.request.mode === "navigate" || e.request.url.endsWith(".html") || e.request.url.endsWith("/");
  if (isPage) {
    // Pages: network first, so a new published version shows up right away; cache is the offline fallback.
    e.respondWith(
      fetch(e.request)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return res; })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  // Static files (icons, manifest): cache first.
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
