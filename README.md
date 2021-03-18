# get-jira-issues
JiraのAPI(V3)を利用して各チームの現在オープンしているスプリントのイシューを取得する  

[JIRA_API_V3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)

## Install

```
$ node -v
// expected version > 14.x
```

nodeのversionが14以下の場合動作しないため、  nodeのバージョンをあげてください。

バージョン管理の仕方などは各々の環境に合わせてしていただければと思います。

```bash
$ yarn install
```

## Usage

1. 利用前にAPIKeyを登録する

`APIKey`を発行し、`.env.sample`をコピーした`.env`ファイルにメールアドレスとAPIKeyを設定する。
APIKeyの発行 => https://id.atlassian.com/manage-profile/security

2. (必要であれば)最新のカスタムフィールドを取得

カスタムフィールドに関しては都度取得はしていない。  
そのため新規に作成した場合は最新のカスタムフィールドを取得する必要がある。

```bash
$ node getCustomFileds.js
```

3. 現在のスプリントの課題を取得

今開いているスプリントの課題を取得する。  
想定されているのはブルーとイエローのみ、他に必要な場合は追加する必要がある。  
処理が完了するとcsvディレクトリに`チーム名.csv`が吐き出される。

```bash
// チームブルー
$ node getIsuuesAndFormat.js Blue
// チームイエロー
$ node getIsuuesAndFormat.js Yellow
```
