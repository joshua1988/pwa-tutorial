// 캐싱 스토리지에 저장될 파일 이름
var CACHE_NAME = 'pwa-offline-v1';
// 캐싱할 웹 자원(이미지, css 등)의 목록
var filesToCache = [
  '/',
  '/css/app,css'
];

// 서비스 워커 설치 (웹 자원 캐싱)
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME) // pwa 파일
      .then(function(cache) {
        // pwa 파일에 다 집어 넣어라
        return cache.addAll(filesToCache);
      })
      .catch(function(error) {
        return console.log(error);
      })
  );
});
