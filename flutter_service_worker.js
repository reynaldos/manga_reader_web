'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "750e46abb3bfe56046ee9e2abba939e8",
"splash/style.css": "b8de6f14d56ecffdbfa1fa36fcbe4f17",
"index.html": "3ffc62f55c39fe4d3467af60835ea796",
"/": "3ffc62f55c39fe4d3467af60835ea796",
"main.dart.js": "b93d029d2b446bc226bc942e29776776",
"favicon.png": "8a341bec71e0311c20632e57f6b185f1",
"icons/Icon-192.png": "8b6e9b6c6a981ca6d0c8a1a42e731884",
"icons/Icon-512.png": "1f461bdccb6298b4025cd07da4de3dc3",
"manifest.json": "f65672c08d58292f827dbdd86c71b0b1",
".git/config": "7b164f02e80b302d67f1abe0f2a1c084",
".git/objects/59/581df38e3725de7beca1bddbcdd519a1a1e7a0": "95f3e12ead32c7baf9a7266bba7a65a5",
".git/objects/66/b6244474deea67793e5144504921b69b1b576b": "206a33e505a1da1d2c9beb2789550278",
".git/objects/50/71c76317664bcadf7560363aa205e8eec5f743": "b902667528e89f2765445d605711be57",
".git/objects/50/36241ce0b4c21b7c5b0c0a9cc9511fd8f047b7": "c9b99cd70f443170d4a783f8d815cbc3",
".git/objects/57/4fe19753495fe89c6a248ac57198b4a92ee078": "7f2c804c42abc5d89ed288bfca982bb1",
".git/objects/6f/92eac9e750ea2d3bcaacb2f2716209576d204d": "d5c77b7f9dea16eaaa55f471fabfb75c",
".git/objects/32/cb3f6f25f1578f6726a06e1bc7870135f358e6": "84107fdf8ac6e1ff23ee9ad805e11028",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/84a271167f02a8d56e7a3dec156c65a1184afb": "3490c1d145fc64daac9be8464ef14b10",
".git/objects/51/dc9deb89db2a5998132f0e9a3ddda374b67399": "ea0d19943ad183ad2ea97976131de1b9",
".git/objects/3d/92f71682e77f95a9476d2764ccdd79d1a99b59": "63173af270998bfc87873b1de141ed66",
".git/objects/58/a1a73d8e677bf81735bfb6be758f4055fbad1b": "40a5cbe275379a41c57f5ee9a51ce016",
".git/objects/58/b7ee1c10ecd91b057abb5c538290345186095e": "4c638fa2f3be1244078188de8571c512",
".git/objects/0b/8ffb60d6dbcab4d3ad4cd12c9065141406760d": "8954630d9a93837059997dd8da11baf6",
".git/objects/93/05de421366704fb3646380c5fb755325c8169b": "6018a0f0a9f3cc800b18e7ee2498addd",
".git/objects/60/57a1dbc85c3966de3fb131910fd927533a432a": "654fc57fcd1610791837494704d98bb5",
".git/objects/60/f636f2c081f4b496fe54887f061dab56b32c7c": "ea0a7996070a9ffe388c497782d951c5",
".git/objects/34/d1c887ab207d44f01450cea1b906bd5c0b36c8": "ea52f44aa9f8b9e8afb3ed2605526af1",
".git/objects/34/71264ab4037a80b465f37d8b4f1f9ee9f02c2f": "a45f1132b61e145dece97d1363430a84",
".git/objects/5a/c0d7b788167c43e476dd04d650d26379b2bca2": "71b90a380f7815fb92e59767ad185d24",
".git/objects/5f/7bdde430e1dd5fbdaa41317ec51e34dc1b8770": "893c18e975b1674321ecbe5dace1ea88",
".git/objects/5f/5ad1eaf0ea358e1dc03f540fa489943a9e9adf": "23bf405885352639034488b5d3483578",
".git/objects/5f/5c350e66f96d183e689d9c6c26fbdac916cdc4": "616ea6f7f56147a9288f6fcfc1626291",
".git/objects/05/a6c81d3113fcad73e38d571c9503b12c4f6543": "9f9a05f6748d5e6b0a0e41442cedd6f2",
".git/objects/9d/8ba6b28b40177f81f6e2af172c1a9ae631a511": "1c07993bd635879a812d1941a1e1bd53",
".git/objects/b5/daadd3379a15ca0564eec9490305c5b280f12a": "1ad4d5b210ef14b4f6c90276f72347f5",
".git/objects/bb/e8d127155944edd3e1ac190b44bd2f9abb3ab7": "0eb1809c1b8072a04cfeb8caa7abeec6",
".git/objects/bb/ee1b436f6e1119c3cf4d9c9c5669f2c41eed22": "c5fe0cd94a37082de23b6018cec98000",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/be/b3e3ad05d34acfb84b63c120adbe42ad1a25b0": "6b106239572660e3977e7047a967b06a",
".git/objects/d1/ef5f01279dfcfbb97c3832be64ea00a1ec45e3": "1d97d31e17cd5a4a50f77738167f73a6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/eb785ab3380834aa6fdee427961a0e0115cde6": "ca5f198d5271ca35459dbb55e2356c71",
".git/objects/c7/08dd78c19e526cfc0c9b2218072726811ef7c4": "bed67dcd5aaef91cddcfe5fe8488cf5e",
".git/objects/f2/ac38da6ba2135f33b2117b5907643902a6e574": "9f0c79b9abb5464ac67c1f38bc19e730",
".git/objects/e3/ecafa671a8fd32559745ac4c50b77fe9e51743": "3a69f8cc809872bf6113ae814578ed2f",
".git/objects/cf/c16e013d72ba4e29f21731e96c7ac6070c26ec": "fabce24cebb7f9387665b939371e3b65",
".git/objects/cf/2af4a8f686ae151bd70628cc533f8d5a2d8360": "1657755fe4d773be4d016f5372550956",
".git/objects/ca/36eb1149c70eb59878fe1a764648a62a1174c4": "a0f5246f2bb93dc162901bbeafdfef48",
".git/objects/e4/32db8c12a746e27eb440bde33cca8f6fd77356": "9fa8ff0d474ddf0ab52e33db9abc1e84",
".git/objects/ed/a649733a3850d0f0991f9e1d93ccb3216bed5f": "da2f00d05f68328bde7401c3339e859d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/4396dd3970155e2077bed3238e8977e0c0597a": "e56ab1b99288a57813c8c9a2feb3bad9",
".git/objects/27/32d0b830a501770382026d16673beab7a67b71": "67c8c924d7e6625610426d430eb41005",
".git/objects/27/43b49f1efbc5dd9888f5d2cfbb8298ba5c5d91": "489eced337c21f831e0579c83e92a124",
".git/objects/7c/4d76fa21511be5e6b5d59313c9adc072ba2ede": "8fb876df55f1f74e902c8288b64953c7",
".git/objects/16/e925ece6d689a03a70f7f67c9ead7128690ef0": "6a70c08c286c73b33bfd5751fbe7cb8f",
".git/objects/45/d563c55bd9b8a269843a0eb9ff378e6eceb3ed": "fb0ba35df9f8626b67b94f8b8fc869e1",
".git/objects/87/21e85ad53f292f125ffe5b61129bcafc0d7d76": "2b526dec650db10e633ce48f099d7a8b",
".git/objects/80/1db0f7721ac84bc253529611f33fed8b6eb5a7": "6d7db21d4d0439f02b917a8f0f852c22",
".git/objects/80/879e57a52c6bba2ab742f1addc7f47dc99dfdb": "478b743ba46df68ae381afc420b4ea64",
".git/objects/28/caafe54eb2c0980bd3d9ae7c3447cfec9a4d44": "cf25522261d2b9e691ecf477e9cdf716",
".git/objects/8f/2bbf04ab3700f64a778d09c4b203772f1c68f6": "f7247cbd993b36c98996a0ee87f370f3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/115ce94b44c6ea2a70031c2e3c7bc2a7e4db4e": "6d48fe48c39c77ada224fa50a19dd6e7",
".git/objects/8a/529ea81e309c43f6b4537a27c0507838c63e30": "b1f7e3dee374f45ec4695889a8774e0b",
".git/objects/4c/52444a01b280c81215b9b936fb1bdbd348eae7": "daf0c2d0fe346dec562cda6403cca89c",
".git/objects/4c/6572aca1ceda0d0820e28bdb35f6491fd0a7b0": "09afdc7e8d24f8803c97c59da9a6cb7e",
".git/objects/26/5da397fc1cd840e12f2dcd281a869f7c8a2e15": "c187295021006d79b489ec0adc9ebc5c",
".git/objects/26/bfb961788a3fc0b9fa3d6e810c2479b916db68": "7650faabb0300ef73af60de71920ad16",
".git/objects/86/3f44eb22b65a8206140a0a740a167cb39030d8": "fe20285c66a3e77ed7399152bd8174a1",
".git/objects/72/99fe8f0d337d11597652c1b801ef689ec9dd3a": "179cbda62d6ead4367d9eecaf61376ad",
".git/objects/72/ee114e3c3047b062eddd812b77f4739abd39c6": "4f9bd5ff4f41e3395d2201ddda5757bf",
".git/objects/44/a5bcb61aa2ccb5d459129b97afd934e4f11261": "897b9ee14ce4a488c3ce504461f74d86",
".git/objects/2f/6cf066f49bedb4c4acee27dd8d98243d7fd532": "bb6cbf2450b71c67a3110d4b231fb5a0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/ca419f4d333c7458e5e2e721b61fe8d9af856e": "9d33a28674ee08811065db53ff923c0a",
".git/objects/5d/78d0da5dece22a4a2e5a89a06e443ce2aad5a1": "3279dcc1b1666862c1f57ab1ec8c3ee6",
".git/objects/91/d44a47503170970f813a791bd63d7875037c9c": "a281f53f6e47423408a644311c1a8b95",
".git/objects/3a/a66cc7a6f86fca785b15c7348af62e1a780bf3": "3abb9884b9110ee44a0d1c631a3085a9",
".git/objects/98/183113da0c89bfe21ef84523afc016a96665d7": "e1ac424c65886a6025aadceedcc7187d",
".git/objects/53/af6ee1a7f10511713654a21ae714f3ce649547": "d9b2f934c06fe004f55a669fc106d425",
".git/objects/5e/06edd322be4296a710b9e8e2f930fa938b1c92": "961fe4543614bd075d827af8820c60af",
".git/objects/08/fcfdf6618f823c175fb8b149aaf4a0f92a0213": "97c377a4d1f4eb68242c5d46dc7a96bc",
".git/objects/6d/b1c0a33e9b86cbe7e7d7f035629476ca2a4dd9": "c06004bef022ba760b485a4922849162",
".git/objects/01/89f98f8f91d73d60ea334967725026e4bd19f8": "26808339e9de0377922e47d913b8e4f5",
".git/objects/06/9516e32e966b2d88dac2ffddfa5665a7359218": "35d3514d1831f4f2e78b901d88e2596a",
".git/objects/6c/568fd6fb2a0057f698172cd917fb9ebc07bcf8": "d8a5e7d2045c380676cbf26bc762d921",
".git/objects/39/78ac89a5245ac18b7b78827a3de0bb18d6e5c7": "6d105aa8ff4a0da0b8d471f846e15ba8",
".git/objects/99/4e9b2333d9eecf1343ce56144601a6484356e9": "f72bf8f03f80f54acf66af443969bb23",
".git/objects/0f/75d4cd09956b0dfdd0cdbea57ed956a4bd6126": "b44ce49035cbf31c72e32130e034409b",
".git/objects/90/7070fb4aa0244af7d984658de68460d4d4648f": "cc2c4efe6ff5010f5d6f95706d85c0c2",
".git/objects/dc/5db28e125429d3c3b604fc1ca63a91b53d5aad": "8669a0ee19c6d824bfdb6acd3b57c242",
".git/objects/dc/f5c1c92eba1c614dca8f05d696f8160113967e": "6c5b656b61177d6da02e02fa1171b412",
".git/objects/b6/a2877f772e18bb0170ffd9457b7a44a54d33ef": "908a30576bf440d49ac11dfae32ce5bc",
".git/objects/a9/26a4c5bd620049c91875d4e2c326cdc5b34dc6": "ef57d2d01f94e25305482a3d1297b8a3",
".git/objects/a9/a0e04be032c7f1b8b46bef4e49257b0b6ad35e": "31f980ec1cfad9e35064c25bffb26117",
".git/objects/d2/c484eba0d6af14136d1511caefd0b1cc90ca71": "c96fddfccfe92be8f1a804daf4c54557",
".git/objects/aa/1b69c9c644c74be379a0d03464e096396133c7": "3ee8525688875224c3ca0fa539729a1b",
".git/objects/af/9fcd90ecb9ec9c69f29052fc07e275438ac137": "d469dd488cc2b8d7904b21785f46202f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/80d487de9c306233c36f7b31e0cf62367be7f5": "36ae71525fb57e57edfa61ed53b916d3",
".git/objects/b0/c78ab8e6cdce62dfb505d695bc1dad56591bed": "03da242f07c2e9960010d2055e808e00",
".git/objects/b9/c6342d7f5d3da3b2f0f6d13075ece58b0234c7": "a69182cecd25f9daa67b842d53772c93",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/058b0965b1daca6b7d5ddc84a7b1d9c8ca3b16": "c59c3d200c714125e98b5accd62635a8",
".git/objects/e1/45bfd25cb9a7b250ce43b9a51af921087b536a": "17207a3d265e1efb8051b12c88b28013",
".git/objects/e6/5bbe9c399f772a73da6aaaf51358247eb0187a": "f055f1b21481efd835bc003e55c1e089",
".git/objects/e6/a181cef9af2b7042d9ee7814ca24e1d7f5dd21": "e03595d109b7db9d7b22cddaa8eab4bf",
".git/objects/f9/877ce7af303f15a83d0934da462c22bb417450": "9d6b8facd813934479537e7a16dc28cd",
".git/objects/f0/5f28b56af53c7ca50a5aa5c1582dcdda6c4c40": "c2d3dc075318917b01dee9e25214598b",
".git/objects/e8/51823a89810abef6745e4a694a27e292f14d2f": "293ec5a68480fb5aa092493ebab890f5",
".git/objects/e8/fc0da75c9eb5b82fe98332982e8f7b2dd8b250": "2465ed6578943e66f81337af6e2519a3",
".git/objects/c5/2f6facfef1a9dfc14fa3738897eae4b62346b4": "fe44144b9527f46bbaf8a6b3337f86c5",
".git/objects/c5/b62a098cfb13e9e7ff5e213cc7f14c44877998": "189d7bad6bda4ef20159c4b8f06cfa7f",
".git/objects/c5/1b1a61e14d361c7f263caf1e9866317f6c40ec": "ff91ecd9ff81eb3c08df6aea6a6f77cf",
".git/objects/c2/6c43282ab1b5fa70a468ad0e671cd5493730bc": "4200b61823e115eac5223a1a103764f2",
".git/objects/f6/a51e0130cebf5734a6bdb3a084ac1cff3a127b": "577a05ac6a2728846d728aef7b06865c",
".git/objects/e9/c42a3bdeb50aebaaceac723c12f809b3f6c7cb": "9dc2f1f5e99534567261cd52c2930cc8",
".git/objects/f1/25f4d27d78ff098e530cc8721137fc758b76ef": "9630e9ee9646510c1beae6545bd06a63",
".git/objects/e7/3ad2eb7a0d42b21daaae13cace21f0962cfa21": "8f94de970f30fafd8388b615c593ba2e",
".git/objects/e7/abccc41f031c843876108decf98d41a50e2ebf": "99293298db0fd65410ab795874643dcf",
".git/objects/cb/ccdb5fcb2f45dd950de09f32222cd4e51e1b10": "8eb580b95dfa05f2f75bb1f4d6e86c12",
".git/objects/e0/9c3f21ee3b5be2d407a0684b812a6dc334b3df": "af0eff1cbc92a9103a0d015f946e0dfb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/7a9adc48b27ab8f580e93bf458da4d60735fa9": "6f4a55a55ad34effdf4d3680286f90ef",
".git/objects/83/e0d00fe50c8bfe28e7064829801bc631ad8da7": "af995d617f9c20330462d9f5751b678b",
".git/objects/48/067e0cb77d354c7de6d3d7371a1321e20d6e92": "059945aa7bb93449e4cdc797d04916e6",
".git/objects/70/5fa6152cdb0528a31fc2b119d61122544fd316": "5f90bbfb53c5da85979c3f0486f0de73",
".git/objects/23/66b9c46e3d8b621713cfb34f6822e5ebe6ad76": "0b5471f789ce769ab341524663272358",
".git/objects/4f/c828a1d370185e6af266391b52e6e1d73c0beb": "eca516383e22d6e1d50e67eecf5246d8",
".git/objects/85/b5c8ff2c9d863cc60bae08d905b46bd4b4b018": "dff16e86f1e3249481efefd440415ea4",
".git/objects/1c/d8db16fb1a621fe8cf63c6fef03bbe9d21ffc9": "44e9723112d414586e03e23fd131bb92",
".git/objects/1c/94020a9d7d8f98802391c38fb0a5951a890171": "5a070bc105a419bcc29bacb48e9d589b",
".git/objects/49/86091824985f4acbf77758bce87e32292801d1": "3af4781e4bbc484a48b9327525bed574",
".git/objects/2e/780b2805a201585eb8e70f9b8b38b15b5f528e": "d7f033a645b672ec1927932ff3bb2457",
".git/objects/2e/875a908e47f9ffd6f85f5959787587734dce11": "a6500bfba55800a2be661454fed3fae1",
".git/objects/2e/dc0271563f696e933bdddcbd0fa8c4ef5ffc32": "bfc7dbc90986b919f97d69e38cf5cc69",
".git/objects/2b/9d2e0efd37ebb4f8a3f371cf6cdd23f160f411": "4d534e21e77d1ff0ae4baa38a94141f9",
".git/objects/2b/1c6cf072194949ca889fdfcba4c5417cc9fdbd": "98bd60d755d04d8ad5e29c2375ff5d5e",
".git/objects/2b/6bbaccc330bd10a9b4cab6560188b2598194c7": "a4741f77ed9f875c99f6511f6c9cdb1a",
".git/objects/14/d1d01eadd37fa20c0a904a923c35e8ebd15a7d": "d7264201333f97af52debe4b0de7e110",
".git/objects/14/18c046a267d10144fd9c5cc5d21e130fb86e2f": "863a3ef4287ecae0262baec737786e59",
".git/objects/22/a965a8155d2d0f564890193f59d35ad10395a8": "e55c32746f310eeef7411b271515065e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "3e96acedaab9e2f6f31a6a60c1732818",
".git/logs/refs/heads/main": "e45360c15c841a11c6f68d7cf1d1fba1",
".git/logs/refs/remotes/origin/main": "dff9a3c1b181234e99f92c1941c802af",
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
".git/refs/heads/main": "e27f4904ec9f0839a9521a9a270fd11d",
".git/refs/remotes/origin/main": "e27f4904ec9f0839a9521a9a270fd11d",
".git/index": "d10b91f93090cdcc9ff35364c12364cc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "2fb00d36ff2d4b915d00df0658364221",
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
