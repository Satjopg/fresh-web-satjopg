# Web Satjopg by Fresh

[![Made with Fresh](https://fresh.deno.dev/fresh-badge.svg)](https://fresh.deno.dev)

## 概要

自分のウェブサイトをDeno製のWebフレームワークであるFreshで作成したもの
Freshの検証も込めて作成

## 利用技術

* [Deno](https://deno.land/) 1.26.0
* [Fresh](https://fresh.deno.dev/) 1.1.2

## ディレクトリ

汎用的に作られていない
ロジックがないのでテスト

```shell
.
├── components // 描画するコンポーネント
├── deno.json // Denoの設定ファイル
├── dev.ts // 開発時のエントリポイント
├── fresh.gen.ts // 自動生成されるマニュフェストファイル(ルーティングとislandの情報を含む)
├── hooks // reactのhooksを配置するフォルダ (自作 islandsで足りる可能性あり)
├── import_map.json // 依存管理 (FreshのImport Maps)
├── islands // Islandsコンポーネントを配置するフォルダ
├── main.ts // 本番時のエントリポイント (自動生成される)
├── routes // ルーティングコンポーネントを配置するためのフォルダ
├── static // 静的ファイルを配置するたのフォルダ
└── twind.config.ts // twindの設定ファイル (自動生成される)
```

## コマンド

開発時

```shell
deno task start
```

lint

```shell
deno lint
```

format

```shell
deno fmt
```

デプロイ(まだ)

```shell
deno deploy
```
