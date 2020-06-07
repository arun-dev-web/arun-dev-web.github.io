'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "627c1d6eb107cc7822bfbe6d5d5b68af",
"assets/LICENSE": "8e877eff43c93dd8ff3206296e2289dd",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Abel.ttf": "afc1550a0b170efd8f270a8316c85da7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/image.png": "a71bc5e8dbe705c7262491931a66fd1b",
"assets/AssetManifest.json": "1f43ed33896beeb392074d7cf284ee30",
"assets/FontManifest.json": "6b3c8f5b0d3abc6460447447c7def305",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "108912b68a1e9bea837ad086981d258f",
"/": "108912b68a1e9bea837ad086981d258f",
"main.dart.js": "441e3ac8fe5dd8f32b15ea209d2977a5"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
