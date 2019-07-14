template-pug
====

## 事前に用意するもの
- node.js (version 8.11.1以上)

## 環境構築

開発に使うnpmパッケージをインストール
```
npm install
npm audit fix
```

## ファイル構成

- `package.json`
  - 依存するnpmパッケージに関する設定ファイル
- `webpack.config.js` / `webpack.config.base.js`
  - webpackに関する設定ファイル
- `public`
  - Webに公開されるファイル (`yarn build` 実行までは空の状態です)
- `src/scss`, `src/js`, `src/pug`
  - 開発用の各種ソースコード

## コマンド

- `yarn start`
  - タスクランナーの実行コマンド。srcディレクトリ内のファイルを監視します。
- `yarn build`
  - publicディレクトリに公開用のファイルをビルドします。

## 使用言語

- HTML: [pug](https://pugjs.org/api/getting-started.html)
- CSS: [Sass(scss)](http://sass-lang.com/)
- JavaScript: [ES2015(ECMAScript 6)](https://babeljs.io/docs/learn-es2015/)

## 対応ブラウザ

- 各種モダンブラウザ最新バージョン・IE11以上
  - 対応ブラウザを変更する場合、`package.json`の`browserlist`を修正する。
