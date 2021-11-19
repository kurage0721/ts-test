const path = require('path');//2 npmの初期モジュール

module.exports ={
  entry: {
    bundle: './src/index.ts'//1 起点となるtsファイル
  },
  output: {
    path: path.join(__dirname, 'dist'),//3 webpackでバンドルしたファイルをどこに出力するか
    filename: '[name].js'//4 バンドル後のファイル名 [name]はentryで記述した名前（この設定ならbundle）
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),//devserverが参照するディレクトリ
    },
    open: true//ローカルのwebサーバーを立ち上げた際にブラウザを自動で立ち上げる
  },
  module: {//モジュールのルールを書く
    rules: [
      {
        loader: 'ts-loader',//ts-loaderの設定
        test: /\.ts$/
      }
    ]
  }

}