# FishAngler-HUB.github.io

「タックルナビゲーター（釣りタックルナビ）」の公開用サイトです。

- 公開URL: https://fishangler-hub.github.io/
- `main` ブランチのルート直下がそのまま GitHub Pages で公開されます。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | アプリ本体（自己完結の単一HTML、画像はbase64埋め込み）。サイトの入口はこのファイル |
| `釣りタックルナビ.html` | 旧URL互換のための `index.html` へのリダイレクト（中身は空）|
| `privacy.html` | プライバシーポリシー |
| `ads.txt` | Google AdSense 用 |

**注意**: AdSense のポリシー上、中身のない「転送だけの画面」に広告コードを置くとポリシー違反になります。
そのため本体は必ず `index.html` に置き、`釣りタックルナビ.html` 側には AdSense コードを入れないでください。

## 開発について

アプリ本体の編集は、開発用リポジトリ
[`fishing-tackle-navi`](https://github.com/FishAngler-HUB/fishing-tackle-navi)
の `釣りタックルナビ.html` で行い、完成したら中身をこのリポジトリの **`index.html`** に反映します。
