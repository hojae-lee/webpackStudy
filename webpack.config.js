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