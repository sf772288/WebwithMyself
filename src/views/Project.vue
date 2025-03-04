<script setup></script>

<template>
  <div>
    <h1 class="project-title">專案介紹</h1>
    <div class="line-section">
      <nav class="sub-nav">
        <router-link to="/project/project-1">樹梅派製作</router-link>
        <router-link to="/project/project-2">待辦事項清單</router-link>
        <p>上列可點擊!!</p>
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
.line-section {
  border: 2px solid #000; /* 邊框樣式 */
  padding: 10px 0 0 10px; /* 內邊距 */
  margin: 15px auto; /* 水平居中，並設置上下間距 */
  border-radius: 8px; /* 邊框圓角 */
  width: 25%; /* 調整每個區塊的寬度 */
}
$breakpoint-md: 768px;
@media (max-width: $breakpoint-md) {
  p {
    font-size: 18px;
  }
  .line-section {
    border: 2px solid #000; /* 邊框樣式 */
    padding: 10px 0 0 10px; /* 內邊距 */
    margin: 15px auto; /* 水平居中，並設置上下間距 */
    border-radius: 8px; /* 邊框圓角 */
    width: 85%; /* 調整每個區塊的寬度 */
  }
}
</style>
