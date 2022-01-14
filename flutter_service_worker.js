'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "750e46abb3bfe56046ee9e2abba939e8",
"splash/style.css": "b8de6f14d56ecffdbfa1fa36fcbe4f17",
"index.html": "f9122b99f26f67076007a9ccde9e2f48",
"/": "f9122b99f26f67076007a9ccde9e2f48",
"main.dart.js": "412ee54d25cf9b4fd14e792c9d11d848",
"favicon.png": "b1dab54154bd0762938cfc5f0a846666",
"icons/Icon-192.png": "399ad5a7cf4b2afdadce6fa6d5ca533f",
"icons/Icon-512.png": "5a2e0265fe5252606f97fbb040dc8e1e",
"manifest.json": "a42e2680ebe916dfa29b0766f5cd9db8",
".git/ORIG_HEAD": "24797d3d79f5b5c9aaf0322e7efefc2d",
".git/config": "40717727241204ce18a63a62ea548b71",
".git/objects/50/f772b0cbc1f794010d1399f668b756b3e620e7": "6bfeb758edfbf88d297cf8caad65f07c",
".git/objects/03/1b4fa2ca79d71577ec75fc035f81950d6de261": "5b5ea8da4f82ebf95dfa9785dc7edf95",
".git/objects/04/c7bd15d62600f4be4fddbcc0c44b821aaf88a7": "e120d6335e89d205342128ed65b73d97",
".git/objects/35/c788f5287358146386db5a587e8175853a9b0a": "96cf25caac1493c46d5b9ef9cfacd404",
".git/objects/0b/8ffb60d6dbcab4d3ad4cd12c9065141406760d": "8954630d9a93837059997dd8da11baf6",
".git/objects/93/44328874ab6fb8a7238cff40b1909e2292f520": "055523d39c8ae9c9c732daa8f34716ea",
".git/objects/93/05de421366704fb3646380c5fb755325c8169b": "6018a0f0a9f3cc800b18e7ee2498addd",
".git/objects/5a/661dc9c1374410b1f07b03049cb546555f1b91": "dc372050da540bd730abd79838653de1",
".git/objects/05/3107684d2ebbbaaab43c67162428c8c5ecfa15": "ca992a7a0f5fe313d44f9a6243e9d5ef",
".git/objects/a4/8185cee9dd9037454b782eb99f49537d55b83b": "f66e826b2a99651999aea69b21b70641",
".git/objects/a3/9aa6f13eb91b42b3a96dc20aaf79d754d291f9": "7344a0ad1c379bfacb69eb10bde4929b",
".git/objects/b5/f35dbcd5efc840950c99301fb56b277a04e13d": "1171a9f5b60cb2725495ff57b1981340",
".git/objects/d7/fd735ca0d591c7731dfdcc0deaf37a1e3d8361": "91f1aa2027ed3d4a750c9be9908bc32e",
".git/objects/d0/d401f8fed13fac7a17da09dbd302babad4ec46": "cc6e9faea5a9cd16577b8ca19f73aa29",
".git/objects/b3/7a72550dd4f2e23fe053ce2b1f0207cb2c9677": "bab4864f205cfddf395952a3d5c4e91c",
".git/objects/b3/22446b3462ed45051de4174d43a17c5857dc29": "4d3571df93a25b689f510c6e344b852d",
".git/objects/c9/a1aa485c9f4453cb37b813a521f4eaf8876346": "ec8ca54f6911bdbac0ce82b65bb65103",
".git/objects/ca/c34f9e31a11f5e6ff354ca262d41c3a3a834e2": "da739d694213ecb398e50ab117e2476b",
".git/objects/e4/4eabf9774674e96a95fac8c2d2dbe939d40106": "4ecb78dc3648df86a4e1503d49889e44",
".git/objects/fb/18df91bc64ffb563ab3b7f8b0de315e084e6fb": "c0178cb1970a27064fe5f92ec4a1a0c2",
".git/objects/ec/b333363b3b340ca0e7d3a1fa888ba8aa38bd3f": "626d53530b21e26eb649052f4bcbb0b8",
".git/objects/20/68a2a4e2a8910ce231a3e20ade0211cdf87f65": "e3df53269f71583cb9017aa1a1600ca0",
".git/objects/pack/pack-e23d9466717faf747d0772994816ebe239e77a4b.idx": "e68d4fa04f4163cbd2b3e2f627818583",
".git/objects/pack/pack-e23d9466717faf747d0772994816ebe239e77a4b.pack": "e0ada0304ee3e2af6b63bf958a3a0dcd",
".git/objects/29/cdce26191ed027d95c75deaa45c13500f6bc09": "12617eec0247251cc8d0537526a44ca5",
".git/objects/80/879e57a52c6bba2ab742f1addc7f47dc99dfdb": "478b743ba46df68ae381afc420b4ea64",
".git/objects/2f/b046d94cd0fbebd6ecf07e6bae484b0c29f185": "a88d83c670e0bd23e5042750aab28f5d",
".git/objects/36/e4045568690f6cb20f33a4fea2937d5d3933ed": "61fe7804d79c4ab784bb85bed82ea228",
".git/objects/36/5e3034d2146c736bba16f8130c75d63072e4b6": "8ad1da73a0118cd2a1c449bff27fa6a1",
".git/objects/a0/022b38542d1264c06e8a8c3a60987bf0a10db5": "68e65bb4fe30bb892f8c8874c32a36e1",
".git/objects/aa/b2747c4e46bdb71c97826348d1f7aaaa300364": "5d9e7f876597ce553fce262a91eaad99",
".git/objects/ff/843ecaca38d4c63b24e1e0e185d623058bc443": "aa683ce318c2460157e4dd0c8cef46e2",
".git/objects/ff/c542d2c412dbd30bd0bccf457b26f2dd73824e": "23ba544a0bb9271d4e4cf75723dba5c2",
".git/objects/c5/83d5352ed8415d7a39a319378b0664f7c15dd1": "d6205ee99ff22afd226ab59de9d5dee4",
".git/objects/f6/f07e5d0974a5d6f439425d21ef78b1a8538ec2": "bbfe8d5bc22227c08c7830baf04784fe",
".git/objects/f8/f767a140322af0e4a4b8111c4c7eaba36a3f87": "613b2b7adf9247f7d286a42574db1703",
".git/objects/77/6d320e7c54c03ad3aee4a6613cd84f4962910a": "304de5ae261e1d8136cac84aa339166b",
".git/objects/4a/5af4c2078cb1298784a98d9b20b4988b1fa030": "826d467a3768bb988a234bfff6201742",
".git/objects/2e/875a908e47f9ffd6f85f5959787587734dce11": "a6500bfba55800a2be661454fed3fae1",
".git/objects/2b/9d2e0efd37ebb4f8a3f371cf6cdd23f160f411": "4d534e21e77d1ff0ae4baa38a94141f9",
".git/objects/2b/1c6cf072194949ca889fdfcba4c5417cc9fdbd": "98bd60d755d04d8ad5e29c2375ff5d5e",
".git/objects/14/18c046a267d10144fd9c5cc5d21e130fb86e2f": "863a3ef4287ecae0262baec737786e59",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0a3ac5c56a11a385ade09594629da681",
".git/logs/refs/heads/main": "ed610f5b767e19b382edae970d0e58d9",
".git/logs/refs/remotes/origin/main": "3c5f8ae0a3b24d2c8ca0bf6f18e34ace",
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
".git/refs/heads/main": "24797d3d79f5b5c9aaf0322e7efefc2d",
".git/refs/remotes/origin/main": "5e593e33965de05140e9f5b71738f904",
".git/index": "2e99d1a735ef6d6d2166e46eafb3f51d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "5aaa386a7010c9811f7aa41832b870c8",
".git/FETCH_HEAD": "719c35af22a0f401318dcb9ffede198d",
"assets/AssetManifest.json": "36049b40a83d46afc1388136f92f15f4",
"assets/NOTICES": "361e27899fcc0ccdbadf40e770f16eea",
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
