<script setup></script>

<template>
  <div>
    <h1 class="project-title">專案介紹</h1>
    <div class="line-section">
      <nav class="sub-nav">
        <router-link to="/project/project-1">樹梅派製作</router-link>
        <router-link to="/project/project-2">待辦事項清單</router-link>
        <router-link to="/project/project-3">貪吃蛇遊戲</router-link>
        <router-link to="/project/project-4">彈跳球遊戲</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.project-title {
  align-items: center;
  text-align: center;
}
.sub-nav {
  align-items: center;
  text-align: center;
}
p {
  font-size: 18px;
}
.sub-nav a {
  padding: 8px 1px; /* 適當的內邊距 */
  text-align: center;
  background-color: lightblue;
  border: 2px solid #000;
  border-radius: 5px;
  min-width: 100px; /* 最小寬度，避免太窄 */
  white-space: nowrap; /* 禁止換行 */
  overflow: hidden;
}

.line-section {
  border: 2px solid #000; /* 邊框樣式 */
  padding: 20px 0 20px 0; /* 內邊距 */
  margin: 15px auto; /* 水平居中，並設置上下間距 */
  border-radius: 8px; /* 邊框圓角 */
  width: 50%; /* 調整每個區塊的寬度 */
  background-color: lightblue;
}
$breakpoint-md: 1024px;
@media (max-width: $breakpoint-md) {
  .sub-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(120px, 1fr)); /* 讓每個按鈕至少 120px */
    gap: 10px;
    width: 100%;
    max-width: 90%; /* 避免內容太靠左 */
    margin: 0 auto; /* 水平置中 */
    justify-content: center; /* 讓內容置中 */
  }

  .sub-nav a {
    display: inline-block; /* 讓區塊寬度根據內容變化 */
    border: 2px solid #000; /* 邊框 */
    padding: 10px; /* 內邊距 */
    border-radius: 8px; /* 圓角 */
    max-width: 100%; /* 避免超出畫面 */
  }
  .line-section {
    border: 2px solid #000; /* 邊框樣式 */
    margin: 15px auto; /* 水平居中，並設置上下間距 */
    border-radius: 8px; /* 邊框圓角 */
    width: 80%; /* 調整每個區塊的寬度 */
    padding: 15px 35px 20px 5px;
  }
}
</style>
