importScripts('/cachePolyfill.js');


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/bootstrap.min.css',
                '/jquery.min.js',
                '/leaf.png',
                '/main.css',
                '/main.js',
                '/manifest.json',
                '/sw.js',
                '/workbox-sw.js',
                'icons/icon-128x128.png',
                'icons/icon-144x144.png',
                'icons/icon-152x152.png',
                'icons/icon-192x192.png',
                'icons/icon-384x384.png',
                'icons/icon-48x48.png',
                'icons/icon-512x512.png',
                'icons/icon-72x72.png',
                'icons/icon-96x96.png',
                'favicon.ico'
            ]);
        })
    );
});


self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
   });







