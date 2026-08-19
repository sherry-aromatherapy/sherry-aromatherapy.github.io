# 雪莉的芳療觀點 — 網站部署說明

## 上傳到 GitHub

1. 到 GitHub 新增一個 repository（例如叫 `blog`），記得勾選 Public。
2. 把這整個資料夾（包含 `_posts`、`_pages`、`_layouts`、`_includes`、`assets`、
   `_config.yml`、`index.html`、`archive.md`、`404.html`、`search.json`）
   全部上傳到 repo 最上層，不要放進子資料夾。
3. Settings → Pages → Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
4. 等 1-2 分鐘，Settings → Pages 頁面上方會出現網址，點進去就能看到網站。

## 加上你的 favicon

把你的 `favicon.png` 直接放到 repo 最上層（跟 `index.html` 同一層）即可，
不用改任何設定，網站已經設定好會自動讀取。

## 如果之後要換成自己的網域

`_config.yml` 裡的 `url` 和 `baseurl` 目前留空，如果你之後綁了網域，
把 `url` 改成你的網域（例如 `https://www.sherryaromatherapy.com`）即可，
`baseurl` 保持空白。

如果你**沒有**自訂網域、只用 GitHub 給的網址
（例如 `https://sherry-aromatherapy.github.io/blog`），
`baseurl` 要改成 `/blog`（repo 的名字，前面加斜線），
不然網站裡的連結、圖片、CSS 都會抓錯路徑。

## 之後怎麼寫新文章

在 `_posts` 資料夾裡新增一個檔案，檔名格式固定要是：

```
YYYY-MM-DD-文章標題.md
```

檔案開頭要有這樣的區塊（前後三個減號）：

```
---
title: "文章標題"
date: 2026-08-14 10:00:00
categories: ["分類名稱"]
tags: ["標籤一", "標籤二"]
layout: post
---

這裡開始寫文章內容，用 Markdown 語法。
```

存檔上傳到 GitHub 的 `_posts` 資料夾，網站會自動套用樣式產生新頁面，
不用再手動排版。圖片建議放進 `assets/images/` 底下，
再用 `![說明文字](/assets/images/檔名.jpg)` 的方式插入。

## 搜尋功能

搜尋是抓 `search.json`（网站自動產生，不用手動維護）比對文章標題、
內文、分類、標籤，全部在瀏覽器端執行，不需要伺服器、也不需要網域。

## 目前已知待補項目

- `一個片刻接著一個片刻` 這篇文章裡有一個連到 osho.tw 的外部連結，
  是原始文章就有的引用連結，維持原樣。
- 若之後要加留言、聯絡表單等動態功能，需要另外串接第三方服務，
  這套純靜態架構本身不支援。
