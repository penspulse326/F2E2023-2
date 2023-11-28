# F2E2023 Mission 2 - 總統即時開票全台地圖

此為團題組作品，合作成員：
- UI 設計：江江
- 前端工程：Shin

設計稿：[連結](https://www.figma.com/file/B1XXMBN3OoDIuCFlujAt1w/The-F2E-%7C-%E7%B8%BD%E7%B5%B1%E9%96%8B%E7%A5%A8%E7%B6%B2%E7%AB%99?type=design&node-id=381%3A54894&mode=design&t=8ZWsGpsvLxg9NtYu-1)  
展示網頁：[連結](https://penspulse326.github.io/F2E2023-2/)

註：目前還在測試版本，網頁隨時可能因部署而暫時無法查看

<br>

## 技術整合

設計：
- Figma
- Bing Image Creator

前端：
- Tailwind
- React
- React-Router
- React-Select
- Recharts

<br>

## 檔案結構

```
src
├── assets //圖片資源
├── components //通用元件
│   └── Dashboard //開票頁面元件
├── constants //各類數據 JSON 檔
├── contexts //react context
├── pages //頁面元件
└── utils //通用函式
```

## 功能
開票結果圖表皆取自[中選會公開資料](https://db.cec.gov.tw/ElecTable/Election?type=President)
如有任何不合法之引用，請立即來信通知。

### 下拉式選單篩選

可以選取縣市、鄉鎮市區兩個層級：  
<img width="599" alt="截圖 2023-11-28 上午11 34 44" src="https://github.com/penspulse326/F2E2023-2/assets/22139550/bb9c5cf2-0cc5-487c-a444-5532e4fe1df8">
<br>
<br>
<br>
<br>
選取後右側會產生對應的投票率與歷史資料（僅到縣市層級）：  
<img width="380" alt="截圖 2023-11-28 上午11 35 07" src="https://github.com/penspulse326/F2E2023-2/assets/22139550/595e22fa-a40e-4c0b-a6c0-fac701a937a0">
<br>

### 互動地圖
游標移至地圖時有對應標籤提示地名，點擊後也會產生篩選效果產生圖表：  
<img width="296" alt="截圖 2023-11-28 上午11 40 54" src="https://github.com/penspulse326/F2E2023-2/assets/22139550/ff118346-23a4-4659-a48a-64f15e3544bd">

----
如有功能異常歡迎聯絡告知，感激不盡！
