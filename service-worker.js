/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "20048867782345e272589f31eef5ef6c"
  },
  {
    "url": "assets/css/0.styles.8e2ba5e6.css",
    "revision": "454aa02c020aa1a1d766dcc122ca6e35"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.64e93583.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "assets/img/loading.9111579b.svg",
    "revision": "9111579b51f5dedc91eec1a9b4228a9f"
  },
  {
    "url": "assets/js/1.f4ca9c84.js",
    "revision": "b81a26be65edef472491131b25d0f938"
  },
  {
    "url": "assets/js/10.a8153129.js",
    "revision": "a1a288d4250a8c6f30a2d939ea1daec0"
  },
  {
    "url": "assets/js/11.f801fbf4.js",
    "revision": "c7a64078742e3d526425dd61d772b57e"
  },
  {
    "url": "assets/js/12.f3c0c4fd.js",
    "revision": "0ee6f642e7033fdbe937e6e87867ac80"
  },
  {
    "url": "assets/js/13.9c3adc42.js",
    "revision": "77c509a38b6c87577a159a605eda87ea"
  },
  {
    "url": "assets/js/14.c6d0f2a0.js",
    "revision": "febbe5db6d08206f0ec7331e9f4e5438"
  },
  {
    "url": "assets/js/15.1899debb.js",
    "revision": "0bfcb5cced6ee2044983cb3b97d71f92"
  },
  {
    "url": "assets/js/16.73161d49.js",
    "revision": "1a0ed5554f4eb9c4a3770dac3d58594a"
  },
  {
    "url": "assets/js/17.babb752a.js",
    "revision": "e111fb4e66485f0c4b4d69c057efb487"
  },
  {
    "url": "assets/js/18.89584d05.js",
    "revision": "1ecadc96551e65385bc3de3f220b8146"
  },
  {
    "url": "assets/js/19.6cd0284e.js",
    "revision": "3656ef22637406b99d98618e7e54a911"
  },
  {
    "url": "assets/js/2.5093e84a.js",
    "revision": "476bf5cb3a4ae3553730f8daed6643d1"
  },
  {
    "url": "assets/js/20.f4c84ba0.js",
    "revision": "b09192cd70f3a573594065b0f9ef53ed"
  },
  {
    "url": "assets/js/21.395886bc.js",
    "revision": "6624a2754948409e21d7b66bad91fcf2"
  },
  {
    "url": "assets/js/22.d5353069.js",
    "revision": "63dff59184d7c089f7447573ea7774a8"
  },
  {
    "url": "assets/js/23.6b9aecbd.js",
    "revision": "656da8ca82dd09f83af9b23fa8542d17"
  },
  {
    "url": "assets/js/24.b76af81b.js",
    "revision": "50951011ae32a9af099365e6bf0bc6a7"
  },
  {
    "url": "assets/js/25.98f4b8e0.js",
    "revision": "2dddf460eea9e0dd700085a685a92c66"
  },
  {
    "url": "assets/js/26.bff2b1d9.js",
    "revision": "c60f82ab40ea57820617a5ef7d6666ca"
  },
  {
    "url": "assets/js/27.e89944c2.js",
    "revision": "5dc690c5e89e9d358e88792d0a852a68"
  },
  {
    "url": "assets/js/28.5b52c632.js",
    "revision": "fece4afb90ff1353608a587a1bd515ea"
  },
  {
    "url": "assets/js/29.4a1f60e6.js",
    "revision": "62cfffb1a1fdf836dbba66660ac33ce6"
  },
  {
    "url": "assets/js/30.b02bd84e.js",
    "revision": "cc8cef6949416d8b673e1827e31c92c5"
  },
  {
    "url": "assets/js/31.8e0f7874.js",
    "revision": "fc3a6e378605863bed4595ef4bb51a96"
  },
  {
    "url": "assets/js/32.8fcc4155.js",
    "revision": "939d5699b5c903935d860aef62bbdfc8"
  },
  {
    "url": "assets/js/33.344e5590.js",
    "revision": "2d5308e6bf3c5bc8c0c9e092325a4eef"
  },
  {
    "url": "assets/js/34.bf16912d.js",
    "revision": "ef1ae0dc8740d0c30d5ae343dedc9584"
  },
  {
    "url": "assets/js/35.93b3c20d.js",
    "revision": "1f481598cc795f44c80893fdcd3fa451"
  },
  {
    "url": "assets/js/36.884aff8f.js",
    "revision": "d007b1fb715015daba2efd369c7c7281"
  },
  {
    "url": "assets/js/37.6933bd3f.js",
    "revision": "a0a1faa66c0397a6e62160b856971fc2"
  },
  {
    "url": "assets/js/38.a6f00b8a.js",
    "revision": "3190f3af41b0e85c0739be40db830a47"
  },
  {
    "url": "assets/js/39.3c8516e4.js",
    "revision": "c75aef4a8a0672c587feabc07ead19bd"
  },
  {
    "url": "assets/js/40.0a17f661.js",
    "revision": "1d9c0c08cb2cb338c6329f7835899ff5"
  },
  {
    "url": "assets/js/41.0f251d1c.js",
    "revision": "dd4f3a2b3ecd98969d57072cce744223"
  },
  {
    "url": "assets/js/42.1ab071e9.js",
    "revision": "731af00f392e20ef1e6581116e66b2ca"
  },
  {
    "url": "assets/js/43.e93e02e7.js",
    "revision": "0d9401f33066a5c7b78ddc8c74311882"
  },
  {
    "url": "assets/js/44.4fb5f111.js",
    "revision": "03d39b748b30c1b80affb8571330e4d3"
  },
  {
    "url": "assets/js/45.ebc848d1.js",
    "revision": "ba048ed208a678e7c15bb8df960629b5"
  },
  {
    "url": "assets/js/46.6be0382a.js",
    "revision": "3895913db5479dc2f436c062cd2e6bf8"
  },
  {
    "url": "assets/js/47.0c4069db.js",
    "revision": "e1f84449e44afe793d74f92f17fc2427"
  },
  {
    "url": "assets/js/48.09d5878d.js",
    "revision": "c0a1b52bf163c589415e9ce5c919e682"
  },
  {
    "url": "assets/js/49.c5894e7b.js",
    "revision": "df973475b7b19aeaacc6cd981aaf54e0"
  },
  {
    "url": "assets/js/5.ca09e472.js",
    "revision": "e43ae43bc1c0646e1627d53f80f61c54"
  },
  {
    "url": "assets/js/50.9e322381.js",
    "revision": "4d3a1d3a1a230da953c73ceef7c1c5e1"
  },
  {
    "url": "assets/js/51.9e040e3c.js",
    "revision": "9fc8a717302f3c12cdab6f38d6728871"
  },
  {
    "url": "assets/js/52.82b3a769.js",
    "revision": "3361134f564a872bd490c3c0a2c1d9ae"
  },
  {
    "url": "assets/js/53.7904a016.js",
    "revision": "26547e0936050adf23e81a3b5d8ae7ab"
  },
  {
    "url": "assets/js/54.3476d8b2.js",
    "revision": "3750b96d67647bdb9e3a7d12710a5ac4"
  },
  {
    "url": "assets/js/55.858e3096.js",
    "revision": "4d327137d1ddaeb8fe2b81edc7274d20"
  },
  {
    "url": "assets/js/56.8b863509.js",
    "revision": "adb5764700437bd580fba7f6be1c9780"
  },
  {
    "url": "assets/js/57.4674fea1.js",
    "revision": "09dab992e11a6e176b05c4cf4ada79c1"
  },
  {
    "url": "assets/js/58.abfdbec3.js",
    "revision": "43da67120b0897c57b8a23145cf9d2b0"
  },
  {
    "url": "assets/js/59.f928432e.js",
    "revision": "528707fb79d26254b824d7995fa739f8"
  },
  {
    "url": "assets/js/6.aa4749f7.js",
    "revision": "2f401ec0e516dd5514f63ec242a0e01a"
  },
  {
    "url": "assets/js/60.6a786ab0.js",
    "revision": "dcf0df1dc6673e9b46f19929a562dd32"
  },
  {
    "url": "assets/js/7.aaf29e50.js",
    "revision": "8656579eac190ea7d15f0afcde18a7fb"
  },
  {
    "url": "assets/js/8.c8966a3e.js",
    "revision": "319411269279ef19475985961a04ccb2"
  },
  {
    "url": "assets/js/9.c4dae0c7.js",
    "revision": "920935403287ce3de3e0c5f2fe18f673"
  },
  {
    "url": "assets/js/app.605f0dba.js",
    "revision": "052b4816ec2d890e0db07aeccec1828a"
  },
  {
    "url": "assets/js/vendors~flowchart.65f84ae1.js",
    "revision": "2faf26e443365a449ba077dcd83d668a"
  },
  {
    "url": "categories/读书/index.html",
    "revision": "f1e64e5db9ebdfe971530cba3e788b73"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "4312b39420fa2bf02bc0fe911aeafedc"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "e6aa74368e23fb97a428134c6d419348"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "c249522bd128192267f5acfde86a5e25"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "fbfd101e14ed8b56b3511374ee6a0194"
  },
  {
    "url": "categories/index.html",
    "revision": "7d90e1f8b0b4f91a852deba552658901"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e4f97a8e278e3c3bd356937e5018890c"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/backend/反向代理.png",
    "revision": "d002928bf7668d033063a52199c35b00"
  },
  {
    "url": "img/backend/正向代理.png",
    "revision": "d66f4928eea2ffb336ffdde1cc568181"
  },
  {
    "url": "img/backend/nginx.png",
    "revision": "b2c13aac12fabbb4ba5384054c16150f"
  },
  {
    "url": "index.html",
    "revision": "a3f9a540abc6915a780c94316d433afb"
  },
  {
    "url": "other/收藏.html",
    "revision": "ce078791d5cf74ba6af75b2da867b85b"
  },
  {
    "url": "other/friends.html",
    "revision": "d119a6578c74ca9d37fc040af78ad827"
  },
  {
    "url": "other/project.html",
    "revision": "e97f2199df1c00538a07ec2ad824ac2c"
  },
  {
    "url": "shuoshuo/index.html",
    "revision": "201f506f4842f21f22637d8a70a65cf6"
  },
  {
    "url": "tag/index.html",
    "revision": "ca2853085ff63a9ca0c5cc669e7c6872"
  },
  {
    "url": "tags/操作系统/index.html",
    "revision": "745146ce617e2159879867b086d6ddcf"
  },
  {
    "url": "tags/查漏补缺/index.html",
    "revision": "571adc6e8ecd71a424ab5026d8b26723"
  },
  {
    "url": "tags/读书笔记/index.html",
    "revision": "59a6ee23c40f66535894f4728943d286"
  },
  {
    "url": "tags/读书心得/index.html",
    "revision": "ca9404850884bad4915ba71ee2492e40"
  },
  {
    "url": "tags/技巧/index.html",
    "revision": "34004aa1edc628c77f5e39fd6bb2f277"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "856aa765c00fd477958f21f796023a07"
  },
  {
    "url": "tags/数据结构/index.html",
    "revision": "ace0dfc9d4d15df0167b8f003e294f31"
  },
  {
    "url": "tags/数据结构和算法/index.html",
    "revision": "f9a949b3447135a1e85ecba0626d41e6"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "5f99f6920814f02614945f52477e7390"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "9d1159208c7131ac9700d152ad4b7f73"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "180d3153ea2361f85d649dcd39482849"
  },
  {
    "url": "timeline/index.html",
    "revision": "038a6066e39099a6968284a4f6690977"
  },
  {
    "url": "views/数据结构/并查集.html",
    "revision": "2f4e51d8a849549208b14157275a4d15"
  },
  {
    "url": "views/数据结构/动态规划.html",
    "revision": "0cce7925ddd4566241caab6d9dc01146"
  },
  {
    "url": "views/数据结构/滑动窗口.html",
    "revision": "3f3ad939edac3c51645f2d282a11490f"
  },
  {
    "url": "views/数据结构/快速排序.html",
    "revision": "cb4ac5b976d50ce5bf0e7651877e12a6"
  },
  {
    "url": "views/数据结构/排序.html",
    "revision": "ae8676ab3925b921864e6cb0d3377af3"
  },
  {
    "url": "views/数据结构/前缀树.html",
    "revision": "04e6d12394de6c94caf7223409d90c1c"
  },
  {
    "url": "views/数据结构/数据结构.html",
    "revision": "69229aa7d9165e23d8b4bc88996905d3"
  },
  {
    "url": "views/数据结构/总结.html",
    "revision": "57b04f57c117938eba72b4a03f97f868"
  },
  {
    "url": "views/backend/超星考试系统.html",
    "revision": "3dd39994c42ef25cac7b580b7b31bfbe"
  },
  {
    "url": "views/backend/面向对象.html",
    "revision": "8dfb268d45a43f547241deed7a35d9aa"
  },
  {
    "url": "views/backend/bootDeploy.html",
    "revision": "343c9ea474084cdced9010d8ae41d113"
  },
  {
    "url": "views/backend/gitlab.html",
    "revision": "f505ad2c5d9253c8f926d4ea776df36b"
  },
  {
    "url": "views/backend/httpclient.html",
    "revision": "8a278b9bec5a219401e86f1712bfe7bf"
  },
  {
    "url": "views/backend/Java核心技术卷.html",
    "revision": "922ec07ddcda16fd62d0f9097ef519e0"
  },
  {
    "url": "views/backend/linux.html",
    "revision": "22f5189d6f1c4a0a28992149f7a2ddf2"
  },
  {
    "url": "views/backend/maven扫盲.html",
    "revision": "1240b919f0f4ff3354100c6850adb21c"
  },
  {
    "url": "views/backend/ngnix和gateway搭配使用.html",
    "revision": "14a66bf6472022c2279d90e3d5b727e1"
  },
  {
    "url": "views/backend/redis.html",
    "revision": "8476208bb226914f46b95965b2ace578"
  },
  {
    "url": "views/backend/springboot.html",
    "revision": "2d482cdcd4072c26bcd64f06e9f347dd"
  },
  {
    "url": "views/book/被讨厌的勇气.html",
    "revision": "a056931c406be33a4d133a6bc6506b9f"
  },
  {
    "url": "views/book/富爸爸穷爸爸.html",
    "revision": "1e66aea3f8049f0a021f577c74c82fb0"
  },
  {
    "url": "views/book/阅读计划.html",
    "revision": "78533fb9cbe16603ae14efa797410fd9"
  },
  {
    "url": "views/bug/error.html",
    "revision": "2b62008c58d0ac2cd2ccb6219330281e"
  },
  {
    "url": "views/essay/10.1.html",
    "revision": "580cb2424971822bff40fc60c6a2cb44"
  },
  {
    "url": "views/essay/10月总结.html",
    "revision": "41bc5af0e175728a9bc0a675521d1a90"
  },
  {
    "url": "views/essay/2021年度总结.html",
    "revision": "3bc86f78fa2d78083c93c3e72668060c"
  },
  {
    "url": "views/essay/归档2020.html",
    "revision": "a238b565d462beaa61295feb27c379d8"
  },
  {
    "url": "views/essay/和学长沟通交流.html",
    "revision": "f0f7c62fb4045787bc740dc7a74b3aec"
  },
  {
    "url": "views/essay/迷茫.html",
    "revision": "172c2a66b6474042979af77f1111a022"
  },
  {
    "url": "views/essay/你好世界.html",
    "revision": "17822f4b0c79ef4eb7e5c390bfe5cbc9"
  },
  {
    "url": "views/essay/图床.html",
    "revision": "d48700bae76eb025af470de1f2fbfda7"
  },
  {
    "url": "views/index.html",
    "revision": "b9eae9c533220c8743d026dae4c76df2"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "6c12180adcfcd70deaa1acab4d971dc3"
  },
  {
    "url": "vuepress/kangna.png",
    "revision": "0ebddcce8865589578dc46236847b0cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
