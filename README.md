# webpackStudy

* npm init
* npm install --save-dev webpack wepack-cli
* package.json에 npm 스크립트 추가 하기
* bable-loader 오류 발생시 npm install -D babel-loader @babel/core @babel/preset-env webpack 설치해줍니다.

```js
{
  "scripts": {
    "bundle": "webpack --mode=development", // 개발용 모드
    "production": "webpack --mode=production" // 배포용 모드
  }
}
```

1. npm, yarn build //기본 build

2. npm, yarn run bundle // 압축, 소스맵 제공

3. npm, yarn run production // 압축, 난독화

Webpack 이란
의존관계에 있는 모듈들을 하나의 자바스크립트 파일로 번들링하는 모듈 번들러이다.
다수의 자바스크립트 파일을 하나의 파일로 번들링하므로 html 파일에서 script 태그로
다수의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다.
Webpack 이 자바스크립트 파일을 번들링하기 전에 Babel을 로드하여 ES6+ 코드를 ES5 코드로
트랜스파일링하는 작업을 실행다로고 설정할 것이다.

```js
const path = require('path');

//Webpack을 실행하면 트랜스파일링 및 번들링을 실행합니다. 트랜스파일링은 Babel이 실행하고 번들링은 Webpack이 실행한다.

module.exports = {
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development',
  // entry file 번들링 하고 싶은 파일들을 선언해 주면 된다.
  // entry: ['@babel/polyfill', './src/js/index.js'],
  entry: {
    bundle: './src/js/index.js'
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  // output: {
  //   path: path.resolve(__dirname, 'dist/js'),
  //   filename: 'bundle.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map'
};
```
