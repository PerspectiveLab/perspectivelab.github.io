'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"assets/AssetManifest.bin": "5b76a14a3ea566c2d2dc90058b2117dd",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "d7c8a2bc54a7c9ff4fdcec89814ac252",
"assets/assets/images/map.png": "848538ac34bbe69bd53acf19cc4da2ca",
"assets/assets/images/men2.png": "dbab2a29505c51f19e04343461c916cd",
"assets/assets/images/app_logo.png": "3568f82ce07ef169b2c9e6cc7e1d1312",
"assets/assets/images/chat/video_icon.svg": "5024639cb0ef977676cb502ef7a959a4",
"assets/assets/images/chat/phone_icon.svg": "ebd9232161cabcc42cb77d860842d6ec",
"assets/assets/images/chat/double_icon.svg": "acace8de3890e8b061d7cca29ddbd224",
"assets/assets/images/chat/add_image.svg": "ecca65bc20f98ee15b4f7ce2f61ac265",
"assets/assets/images/like/photo_2.png": "265230a1ba067ca2161a675f5e64a45f",
"assets/assets/images/like/star_icon.png": "e75fb92d243d61124fd194a311968f2c",
"assets/assets/images/like/gril_6_without.png": "f37ae49a308187feac4e1ce1ace49662",
"assets/assets/images/like/success.gif": "97692838a7d3b07d7eb3441f0a8a3434",
"assets/assets/images/like/blur_bg.png": "acf9822d9f3a0d3aac60087ca1ed3b34",
"assets/assets/images/like/gril_4_without.png": "efc5e0e682c8fe12971ac2a0a439fea2",
"assets/assets/images/like/photo_4.png": "40ae45aefd15054c427834748f9f1eb0",
"assets/assets/images/like/banner.png": "46d134c321f029823c98441c87c368c4",
"assets/assets/images/like/gril_5_without.png": "814db476927e909155d5e206e69365a1",
"assets/assets/images/like/photo_3.png": "0fd14097284db7257f5ec157ff090cea",
"assets/assets/images/like/gril_2_without.png": "43e4bd1a9060e881af1b95e62e087ed8",
"assets/assets/images/like/gril_3_without.png": "e7f38b36ea4bd90e2b4021b294fb7861",
"assets/assets/images/like/photo_1.png": "b6f17ce89ad474fd73c6829991c95d8f",
"assets/assets/images/like/menu.svg": "62473a5a827428a9fa0deab44f20d53d",
"assets/assets/images/like/gril_7_without.png": "6a398a216396608e2266cd8e7aef22ab",
"assets/assets/images/login/phone_svg.svg": "1cd7f9acbaf7cf356bdbda04af5e9782",
"assets/assets/images/login/facebook_svg.svg": "65ca9c3b287fb8915184eef52acc8562",
"assets/assets/images/login/india.png": "b7ff0f47bd26c4f92a3d16a004115751",
"assets/assets/images/login/facebook_png.png": "60d6f0f9e0897ff449c71125f1f483a6",
"assets/assets/images/login/google_svg.svg": "1349b2392969f7e6f72d38dbab748a22",
"assets/assets/images/login/check_icon.svg": "6da8eba09ea61e5ecc340e0ae6b48cd4",
"assets/assets/images/login/calander.svg": "d0911f90e4d95534941fc3409f4f731c",
"assets/assets/images/login/interests/camera.svg": "1b8edf77d9805977273606409b22e3ee",
"assets/assets/images/login/interests/art.svg": "b9d0637e98881411c19ef7b9a9cfa674",
"assets/assets/images/login/interests/micro_phone.svg": "9915be246617f37c3545da21b1b4d06d",
"assets/assets/images/login/interests/music.svg": "4590d2e659492493ff8475989f4f332d",
"assets/assets/images/login/interests/traveling.svg": "0888709e28214523a123ab2f4e3f232d",
"assets/assets/images/login/interests/tennis.svg": "33847465ea36903aee1932f5cdae9c74",
"assets/assets/images/login/interests/drink.svg": "0a2a00a88c1660ce7de370a2499ac8cb",
"assets/assets/images/login/interests/extreme.svg": "0cefd84c2d079e21867677b1d86c7440",
"assets/assets/images/login/interests/run.svg": "2c4466ae2d7a2e9035d9adbae846d6c7",
"assets/assets/images/login/interests/cooking.svg": "84538b723b5b5313a63267dace2fd36e",
"assets/assets/images/login/interests/yoga.svg": "3a154d2508536e9021186627f3a1a6f2",
"assets/assets/images/login/interests/swimming.svg": "674ec701c3eb24dd104de224cdd3fa44",
"assets/assets/images/login/interests/video_game.svg": "27a34afcf0c560ac666ccbcdd5ccde10",
"assets/assets/images/login/interests/bag.svg": "b1bcbf066a1a585cf5fa799aa4cc9e52",
"assets/assets/images/men1.png": "f1a58d074b75708dbbed3ac9d7ee12aa",
"assets/assets/images/profile/pet.svg": "645112f203863cc9ebb4cec129a5c529",
"assets/assets/images/profile/logout.svg": "cba99cfb4be499c6e5ea201ac3f1bbab",
"assets/assets/images/profile/boost.svg": "93f2ff6955d760a89320453e9996ba0d",
"assets/assets/images/profile/moon.svg": "debe3731b729d6efd27f892f8a48ec0b",
"assets/assets/images/profile/edit_bg.png": "63e3d66b456a57efd7ee791b7f62924e",
"assets/assets/images/home/cancel.svg": "92f6c983d14ac77e7f035d665a10b1d4",
"assets/assets/images/home/match.png": "7e75358fcd904da78d55c0614fc67a46",
"assets/assets/images/home/light.svg": "19998d4eeefb27863f3036b8ee808e5c",
"assets/assets/images/home/dance.svg": "bc52ace72a3dda2227ab8d1743f41655",
"assets/assets/images/home/gril1_without_shado.png": "bce879ce9a6b4daa32cfca30578b7f07",
"assets/assets/images/home/restart.svg": "65e1993bacce3ad724ef42f730d96ddd",
"assets/assets/images/home/star.svg": "49261675c54901bf661eb6bb904a1776",
"assets/assets/images/home/bottombar/card.svg": "00b7498accd144fcd8715ea4db508b41",
"assets/assets/images/home/bottombar/card1.svg": "dc9daf7c013f4ca224d89a57efe5436e",
"assets/assets/images/home/bottombar/message.svg": "ec9cc5201cdf216d477f55982c63b733",
"assets/assets/images/home/bottombar/message1.svg": "b8047a17b194274307c826c5ec26a849",
"assets/assets/images/home/bottombar/like2.svg": "72f85383008c0cdc8b3827cc8b343b27",
"assets/assets/images/home/bottombar/people.svg": "43d502be0fbcb2097b30be9e2d9e6795",
"assets/assets/images/home/bottombar/people1.svg": "07842e5accb63e270da5f19e03b7155c",
"assets/assets/images/home/bottombar/like.svg": "448c9bd41df5bc962361e3241ca4905d",
"assets/assets/images/home/doubleClick.png": "26a238ad62d62a3021ec6b43a0074b09",
"assets/assets/images/home/gril1.png": "8bdb4984bcd41b654bed396ac5052753",
"assets/assets/images/home/heart.svg": "2ad2b795581178ccd0beee7e4e5bbf91",
"assets/assets/images/home/modeling.svg": "832b0f7ece4c35f675f01283fd059873",
"assets/assets/images/home/gril2.png": "13d25f27c3dc12a1e127dff001df81cc",
"assets/assets/images/splash_bg.png": "46e8ed6618ecd4204791a96256724773",
"assets/assets/images/onBoarding/onBoarding_2.png": "d5b935ff82d6f5606c8d137cfb605fa4",
"assets/assets/images/onBoarding/onBoarding_1.png": "436d7fa7348c0d5de110150196567866",
"assets/assets/images/onBoarding/onBoarding_3.png": "f97a56f19fae4004e351666503628cfd",
"assets/assets/font/SourceSansPro-Semibold.ttf": "ce8a7a5d8c76d57e5a384baa25fe6342",
"assets/assets/font/SourceSansPro-Bold.ttf": "760cda86de964d7e344fe4c2cce1c357",
"assets/assets/font/SourceSansPro-Regular.ttf": "982386e2d4b16d8a061d83647e35c39c",
"assets/assets/font/Arizonia-Regular.ttf": "0724b20c7eb6a517d50aee5dbdeb5a16",
"assets/NOTICES": "1b4c761519ef6e44de94227ed81b79c2",
"assets/FontManifest.json": "e877e9ab18d6062fb226ef1b6a671ad4",
"assets/fonts/MaterialIcons-Regular.otf": "91f0941f70865f83a781bfc26089b4ec",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin.json": "a809e35d01d47d1932b932ad03397be4",
"index.html": "53a7136ce5ab55f6626f2feae1aa3beb",
"/": "53a7136ce5ab55f6626f2feae1aa3beb",
"main.dart.js": "d9ceb7b0138fee7569e1f1ecb41a5dd9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0549fe508398158200a483a7be10bffb",
"version.json": "3a40c455a79c898fc2ae1fdedafd3f8f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
