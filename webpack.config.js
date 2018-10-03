var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: {
    main: path.resolve(__dirname, 'js/app.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundles.js',
    publicPath: '/dist/'
  },

  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'pwa-offline-v5',
      filename: 'service-worker.js',
      staticFileGlobs: [
        'index.html',
        'css/*.css',
        'images/**.*',
      ],
      mergeStaticsConfig: true, // 웹팩 빌드 결과 파일들을 서비스 워커 캐싱 목록에 추가
    }),
  ],
}