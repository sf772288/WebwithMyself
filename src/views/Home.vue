<script setup></script>

<template>
  <div class="container">
    <div class="ppap">
      <div class="text">
        <div class="section">
          <h2>自我介紹</h2>
          <p>
            哈囉，我是何宇程，畢業於弘光科技大學資訊工程系。在學習的過程中，我對網頁開發產生了濃厚的興趣，<br />並希望能成為一名前端軟體工程師。
            我熱愛探索新技術，並期待在這個快速變化的領域中不斷成長與學習。
          </p>
        </div>
        <div class="section">
          <h2>技能概述</h2>
          <p>
            我熟悉 HTML、CSS、RWD 和 JavaScript，同時也學習了 Vue
            框架，並利用Vue框架製作了這個網站。<br />透過不斷的實踐和學習，我努力提升自己的前端開發技能，以便能夠創建更加互動和高效的用戶體驗。
          </p>
          <div class="imgs">
            <img src="/src/assets/HTML.png" alt="" />
            <img src="/src/assets/CSS.png" alt="" />
            <img src="/src/assets/JS.png" alt="" />
            <img src="/src/assets/vuejs.png" alt="" />
          </div>
        </div>
        <div class="section">
          <h2>工作經歷</h2>
          <p>在綠捷能智控股份有限公司擔任過FAE工程師，主要工作內容有:</p>
          <ul>
            <li>1.使用 LabelImg 標註數據集，以提升機器學習模型的準確度。</li>
            <li>
              2.系統在運行過程中，產生的影像可能包含正確、錯誤或不確定的結果，進行分類並存入對應資料夾，
              <br />並使用 Excel 統計分類結果，以便後續分析與模型優化。
            </li>
            <li>
              3.確認攝影機運行狀態，檢查是否發生故障或電量不足。如發生故障，需通知客戶進行維修；如電量不足，<br />則請求更換電池，以確保系統正常運作。
            </li>
          </ul>
        </div>
      </div>
      <aside><img src="../assets/me.jpg" alt="" /></aside>
    </div>
    <footer class="foo">©製作人:何宇程 Email:sf772288@gmail.com 連絡電話:0902130673</footer>
  </div>
</template>

<style scoped lang="scss">
$breakpoint-md: 768px;

*,
*::before,
*::after {
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 讓 container 至少和視窗一樣高 */
}

.ppap {
  display: flex;
  flex-direction: column; /* 讓內容垂直排列 */
  align-items: center; /* 水平置中 */
  flex-grow: 1; /* 讓這個區塊占據剩餘空間 */
}
li {
  list-style-type: none;
  text-align: center;
}
.section {
  border: 2px solid #000; /* 邊框樣式 */
  padding: 0 15px 0 15px; /* 內邊距 */
  margin-bottom: 20px; /* 每個區塊間的間距 */
  border-radius: 8px; /* 邊框圓角 */
  width: 80%; /* 調整每個區塊的寬度 */
}
.text {
  /* 讓文字區域佔用剩餘空間 */
  display: flex;
  position: relative;
  top: -10px; /* 負值表示向上移動 */
  padding: 30px;
  text-align: center;
  flex-direction: column;
  align-items: center; /* 使文字區域內的內容垂直置中 */
  justify-content: center; /* 使內容水平置中 */
}
.imgs {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.imgs img {
  max-width: 72px; /* 最大寬度 */
  height: auto;
  margin: 30px; /* 增加圖片間距 */
  object-fit: contain; /* 確保圖片不會失真 */
}
aside {
  order: 1; /* 圖片在文字下方 */
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

img {
  width: 100%; /* 確保圖片不超過父容器寬度 */
  max-width: 390px; /* 最大寬度限制 */
  height: auto;
  object-fit: contain; /* 確保圖片比例不變 */
}
.foo {
  background-color: pink; /* 背景顏色 */
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 15px;
  width: 100%;
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
    text-align: center;
    align-items: center; /* 使文字區域內的內容垂直置中 */
    justify-content: center; /* 使內容水平置中 */
  }
  .imgs {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .imgs img {
    max-width: 30px; /* 最大寬度 */
    height: auto;
    margin: 15px; /* 增加圖片間距 */
    object-fit: contain; /* 確保圖片不會失真 */
  }
  .section {
    border: 2px solid #000; /* 邊框樣式 */
    padding: 0px 5px 0 5px; /* 內邊距 */
    margin-bottom: 15px; /* 每個區塊間的間距 */
    border-radius: 8px; /* 邊框圓角 */
    width: 110%; /* 調整每個區塊的寬度 */
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
    text-align: center;
  }

  aside {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .section {
    border: 2px solid #000; /* 邊框樣式 */
    padding: 0px 5px 0 5px; /* 內邊距 */
    margin-bottom: 15px; /* 每個區塊間的間距 */
    border-radius: 8px; /* 邊框圓角 */
    width: 100%; /* 調整每個區塊的寬度 */
  }
}
</style>
