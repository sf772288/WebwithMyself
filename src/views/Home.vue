<script setup></script>

<template>
  <div class="container">
    <div class="ppap">
      <div class="text">
        <h2>自我介紹</h2>
        <p>
          哈囉，我是何宇程，畢業於弘光科技大學資訊工程系。在學習的過程中，我對網頁開發產生了濃厚的興趣，並希望能成為一名前端軟體工程師。我熱愛探索新技術，並期待在這個快速變化的領域中不斷成長與學習。
        </p>
        <h2>技能概述</h2>
        <p>
          我熟悉 HTML、CSS、RWD 和 JavaScript，同時也學習了 Vue
          框架，並利用這個框架製作了這個網站。透過不斷的實踐和學習，我努力提升自己的前端開發技能，以便能夠創建更加互動和高效的用戶體驗。
        </p>
        <h2>工作經歷</h2>
        <p>在綠捷能智控股份有限公司擔任過FAE工程師，主要工作內容有:</p>
        <ol>
          <li>使用 LabelImg 標註數據集，以提升機器學習模型的準確度。</li>
          <li>
            系統在運行過程中，產生的影像可能包含正確、錯誤或不確定的結果，進行分類並存入對應資料夾，並使用
            Excel 統計分類結果，以便後續分析與模型優化。
          </li>
          <li>
            確認攝影機運行狀態，檢查是否發生故障或電量不足。如發生故障，需通知客戶進行維修；如電量不足，則請求更換電池，以確保系統正常運作。
          </li>
        </ol>
      </div>
      <aside><img src="../assets/me.jpg" alt="" /></aside>
    </div>
    <footer class="foo">©製作人:何宇程 Email:sf772288@gmail.com 連絡電話:0902130673</footer>
  </div>
</template>

<style scoped lang="scss">
$breakpoint-md: 768px;
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.ppap {
  display: flex;
  height: 100vh;
  flex: 1;
}
li {
  text-align: left;
}
.text {
  flex: 1;
  padding: 30px;
  padding-left: 70px;
  padding-right: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 450px;
  height: auto;
  max-width: 100%;
}
.foo {
  background-color: pink; /* 背景顏色 */
  font-weight: bold;
  color: black;
  text-align: center; /* 文字居中 */
  padding: 15px; /* 上下內邊距 */
  width: 100%; /* 寬度佔滿 */
  word-spacing: 30px;
}
@media (max-width: $breakpoint-md) {
  .ppap {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .text {
    width: 90%;
  }
  aside {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* 增加間距 */
  }
  .foo {
    padding: 5px; /* 小螢幕時減少上下內邊距 */
    font-size: 10px; /* 調整字型大小 */
    white-space: nowrap;
  }
}
@media (max-width: 1366px) {
  .ppap {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .text {
    width: 80%;
    text-align: left;
  }

  aside {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
