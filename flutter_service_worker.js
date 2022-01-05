'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "750e46abb3bfe56046ee9e2abba939e8",
"splash/style.css": "b8de6f14d56ecffdbfa1fa36fcbe4f17",
"index.html": "04bb21e3e5951a1feb6bea33fdf35dc7",
"/": "04bb21e3e5951a1feb6bea33fdf35dc7",
"main.dart.js": "0b255673a88a8aa528ea3e284f09e0ae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eb3c8a5a71a14be2ec842688a90318e0",
".git/config": "7b164f02e80b302d67f1abe0f2a1c084",
".git/objects/50/71c76317664bcadf7560363aa205e8eec5f743": "b902667528e89f2765445d605711be57",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/0b/8ffb60d6dbcab4d3ad4cd12c9065141406760d": "8954630d9a93837059997dd8da11baf6",
".git/objects/34/d1c887ab207d44f01450cea1b906bd5c0b36c8": "ea52f44aa9f8b9e8afb3ed2605526af1",
".git/objects/5a/c0d7b788167c43e476dd04d650d26379b2bca2": "71b90a380f7815fb92e59767ad185d24",
".git/objects/5f/5ad1eaf0ea358e1dc03f540fa489943a9e9adf": "23bf405885352639034488b5d3483578",
".git/objects/05/a6c81d3113fcad73e38d571c9503b12c4f6543": "9f9a05f6748d5e6b0a0e41442cedd6f2",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/be/b3e3ad05d34acfb84b63c120adbe42ad1a25b0": "6b106239572660e3977e7047a967b06a",
".git/objects/d1/ef5f01279dfcfbb97c3832be64ea00a1ec45e3": "1d97d31e17cd5a4a50f77738167f73a6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/87/21e85ad53f292f125ffe5b61129bcafc0d7d76": "2b526dec650db10e633ce48f099d7a8b",
".git/objects/28/caafe54eb2c0980bd3d9ae7c3447cfec9a4d44": "cf25522261d2b9e691ecf477e9cdf716",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/6572aca1ceda0d0820e28bdb35f6491fd0a7b0": "09afdc7e8d24f8803c97c59da9a6cb7e",
".git/objects/72/ee114e3c3047b062eddd812b77f4739abd39c6": "4f9bd5ff4f41e3395d2201ddda5757bf",
".git/objects/2f/6cf066f49bedb4c4acee27dd8d98243d7fd532": "bb6cbf2450b71c67a3110d4b231fb5a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/ca419f4d333c7458e5e2e721b61fe8d9af856e": "9d33a28674ee08811065db53ff923c0a",
".git/objects/6d/b1c0a33e9b86cbe7e7d7f035629476ca2a4dd9": "c06004bef022ba760b485a4922849162",
".git/objects/39/78ac89a5245ac18b7b78827a3de0bb18d6e5c7": "6d105aa8ff4a0da0b8d471f846e15ba8",
".git/objects/b6/a2877f772e18bb0170ffd9457b7a44a54d33ef": "908a30576bf440d49ac11dfae32ce5bc",
".git/objects/a9/26a4c5bd620049c91875d4e2c326cdc5b34dc6": "ef57d2d01f94e25305482a3d1297b8a3",
".git/objects/a9/a0e04be032c7f1b8b46bef4e49257b0b6ad35e": "31f980ec1cfad9e35064c25bffb26117",
".git/objects/d2/c484eba0d6af14136d1511caefd0b1cc90ca71": "c96fddfccfe92be8f1a804daf4c54557",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/c78ab8e6cdce62dfb505d695bc1dad56591bed": "03da242f07c2e9960010d2055e808e00",
".git/objects/b9/c6342d7f5d3da3b2f0f6d13075ece58b0234c7": "a69182cecd25f9daa67b842d53772c93",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/a181cef9af2b7042d9ee7814ca24e1d7f5dd21": "e03595d109b7db9d7b22cddaa8eab4bf",
".git/objects/f9/877ce7af303f15a83d0934da462c22bb417450": "9d6b8facd813934479537e7a16dc28cd",
".git/objects/f0/5f28b56af53c7ca50a5aa5c1582dcdda6c4c40": "c2d3dc075318917b01dee9e25214598b",
".git/objects/c5/2f6facfef1a9dfc14fa3738897eae4b62346b4": "fe44144b9527f46bbaf8a6b3337f86c5",
".git/objects/e9/c42a3bdeb50aebaaceac723c12f809b3f6c7cb": "9dc2f1f5e99534567261cd52c2930cc8",
".git/objects/e7/abccc41f031c843876108decf98d41a50e2ebf": "99293298db0fd65410ab795874643dcf",
".git/objects/cb/ccdb5fcb2f45dd950de09f32222cd4e51e1b10": "8eb580b95dfa05f2f75bb1f4d6e86c12",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/e0d00fe50c8bfe28e7064829801bc631ad8da7": "af995d617f9c20330462d9f5751b678b",
".git/objects/70/5fa6152cdb0528a31fc2b119d61122544fd316": "5f90bbfb53c5da85979c3f0486f0de73",
".git/objects/1c/94020a9d7d8f98802391c38fb0a5951a890171": "5a070bc105a419bcc29bacb48e9d589b",
".git/objects/49/86091824985f4acbf77758bce87e32292801d1": "3af4781e4bbc484a48b9327525bed574",
".git/objects/2e/780b2805a201585eb8e70f9b8b38b15b5f528e": "d7f033a645b672ec1927932ff3bb2457",
".git/objects/2b/1c6cf072194949ca889fdfcba4c5417cc9fdbd": "98bd60d755d04d8ad5e29c2375ff5d5e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "f62e4af84f04eda7cfcdaf9ab54df971",
".git/logs/refs/heads/main": "aa5629233dc36df0672b4603bfea8400",
".git/logs/refs/remotes/origin/main": "8c42a99dd2b17dfee60e860c3de557f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "42cef4469d8507e539a6938e0442d267",
".git/refs/remotes/origin/main": "42cef4469d8507e539a6938e0442d267",
".git/index": "280907a5942caf9212a2f2e441038f6d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "f2284b1978beaa735c4fe866601f8093",
"assets/AssetManifest.json": "36049b40a83d46afc1388136f92f15f4",
"assets/NOTICES": "ab7c3dc412336af719f26d69ff4b7e07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/mp.png": "f702703d835785a86f599ed7b02cde53",
"assets/assets/mangaPanels.jpg": "f503ea1f4b57f53a17ce776f45106aa1",
"assets/assets/genres/mature.jpg": "b070902838e85079833113fec976e267",
"assets/assets/genres/fantasy.jpg": "656d3beb71b51c99d83412a6ff007648",
"assets/assets/genres/action.jpg": "bfad5da0dd454998a0e576002b837b01",
"assets/assets/genres/mystery.jpg": "8e5acb7ded8a8b43b140b6bbb6db50a8",
"assets/assets/genres/comedy.jpg": "ee007c35d0c4e017e93af21baf3ecdca",
"assets/assets/genres/sports.jpg": "53bb6037157df2f572bd97814e2d3a45",
"assets/assets/genres/adventure.jpg": "2a3030a130992e77ec6bfd761d246846",
"assets/assets/genres/romance.jpg": "aa24dc3558f13682b853e87b03e87cf3",
"assets/assets/genres/drama.jpg": "96bed8e68e4156b341d7f90020aa3aa6",
"assets/assets/genres/sci_fi.jpg": "3a78da1ed11ce7a5320f180f92e22280",
"assets/assets/genres/horror.jpg": "0d40de2249c9acb29da7752d9ccd84e4",
"assets/assets/genres/psychological.jpg": "1fad6100921245d672d2bef3bb0c5fe7",
"assets/assets/error.jpeg": "dd382bb1c40bc6aff31abc2642d276d6",
"assets/assets/avatar.jpg": "6b6c3b42b62cea8390b51a199907cb8a",
"assets/assets/manga.jpg": "15a8c8b7b1953d053c8c05380638ad6e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
