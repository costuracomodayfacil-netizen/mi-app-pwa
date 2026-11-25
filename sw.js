self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mi-app-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './cosita.css'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
