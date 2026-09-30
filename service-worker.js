/* =====================================================
   Service Worker — offline support साठी
   ===================================================== */

const CACHE_NAME = 'daru-sodli-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Install — सर्व फाइल्स cache करा
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ASSETS).catch(function (err) {
                console.warn('Cache addAll failed:', err);
            });
        })
    );
    self.skipWaiting();
});

// Activate — जुने cache साफ करा
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (k) { return k !== CACHE_NAME; })
                    .map(function (k) { return caches.delete(k); })
            );
        })
    );
    self.clients.claim();
});

// Fetch — cache-first, नंतर network
self.addEventListener('fetch', function (event) {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then(function (cached) {
            if (cached) return cached;
            return fetch(event.request).then(function (response) {
                // Successful response cache करा
                if (response && response.status === 200 && response.type === 'basic') {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, copy);
                    });
                }
                return response;
            }).catch(function () {
                // Offline असल्यास index.html दाखवा
                return caches.match('./index.html');
            });
        })
    );
});
