importScripts("/precache-manifest.4e43506343726441dd6fe346c828a19b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.setConfig({
    debug: true,
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    new RegExp(
        'https://firebasestorage.googleapis.com/v0/b/pba-planner.appspot.com/o'),  // Firebase storage에 저장된 사진들의 정보가 담긴 url
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'camera-images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 20,          // 캐시에 저정할 최대 사진 수 
                    maxAgeSeconds: 365 * 24 * 60 *60,
                }),
            ],
        })
);
