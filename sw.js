// Stopedia service worker — caches the app shell so Stopedia opens offline.
// Saved routes and the HERE key live in localStorage, not in this cache.
const CACHE = "stopedia-v1";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  // App shell: cache first. HERE API calls: always network (never cache).
  if (e.request.url.includes("hereapi.com")) return;
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
