EMOJI_SHIRITORI
=====

Spreadsheetと組み合わせて絵文字でしりとりするプログラム

## Description


## Usage

- `spreadsheet`以下のodsファイルを元にSpreadsheetを作成
  - (スクリプトエディタを連携してIDをメモ -> clasp設定に利用)
- [clasp](https://github.com/google/clasp)のセットアップ参考
- GAS deploy
  - `yarn deploy`

## OTHER

- `emoji_ja2shortname_hira.json`は[emoji-jaのfork版を使用](https://github.com/TakeshiOnishi/emoji-ja/tree/short_name_yomi)
- `emoji_ja2shortname_hira.json`生成時
  - ♀と♀️で文字が変換されていたので直接変換済
  - `ひと`が`にん`に翻訳されてるので直接変換済
