# watataku-portfolio-postTwitter/typescript

> watataku-portfolio-postTwitter を Typescript で書いたもの。

 ※本番環境 → [https://github.com/watataku8911/watataku-portfolio-postTwiiter](https://github.com/watataku8911/watataku-portfolio-postTwiiter)

- [Qiita解説記事](https://qiita.com/watataku8911/items/a1a0fcaceb3271ff7eb0)

## typescriptで書くための準備

```
$ npm install --save typescript
$ npm install --save @types/node

# tsconfig.jsonを生成してくれる
$ npx tsc --init

# ts-nodeはjsのトランスパイルなしにtsコードを実行してくれる
$ npm install --save ts-node
```

## 必要パッケージ

```
$ npm install express
$ npm install -D @types/express

$ npm install twitter
$ npm install -D @types/twitter
```
