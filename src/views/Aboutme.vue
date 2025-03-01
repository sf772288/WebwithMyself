<script setup></script>

<template>
  <div>
    <h1 class="text-h1">現在</h1>
    <h3 class="text-h3">
      嗨，我是宇程，畢業於弘光科技大學資訊工程系。從小我就對軟體充滿興趣，一直想成為一名軟體工程師。然而，在學習的過程中，我曾一度不確定自己適合哪個領域，直到在大學時接觸到網頁開發，才發現自己對前端技術特別感興趣。
      透過 HTML、CSS 和 JavaScript，我開始嘗試製作各種網頁，並從中體會到開發的樂趣。
    </h3>
    <h1 class="text-h1">未來</h1>
    <h3 class="text-h3">
      雖然目前我的專長在前端，但我未來會深入學習後端技術，不論是否與工作需求相關，我都希望成為一名全端工程師，具備更完整的開發能力。
      這個網站對我來說，只是一個起點。我會持續學習更多程式相關的知識，不斷提升自己，讓未來的自己擁有更多可能性。
    </h3>
    <h1 class="text-h1">佳句</h1>
    <h3 class="text-h3">
      成功屬於永不放棄的人，只要堅持一段時間，你就會成功。這是我很喜歡的一句話，自從我發現我喜歡寫程式後，我就決定我要不斷的努力，即使有再多的挫折，都打不倒我，因為我相信我的成功一定會到來。
    </h3>
  </div>
</template>

<style lang="scss">
$breakpoint-md: 768px;
.text-h1 {
  text-align: center;
  align-items: center;
}

.text-h3 {
  padding: 10px;
  padding-left: 70px;
  padding-right: 70px;
  text-align: center;
  align-items: center;
  overflow-y: auto;
}
@media (max-width: $breakpoint-md) {
  .text-h1 {
    font-size: 28px;
    margin-top: 30px;
  }

  .text-h3 {
    font-size: 16px;
    padding: 0 15px;
    line-height: 1.5;
  }
}
</style>
