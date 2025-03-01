<template>
  <div class="contianer">
    <h2 class="title-1">專案 1(實習期間製作的樹梅派)</h2>
    <p class="content">在Raspberry Pi上製作mediapipe臉部網格&cvzone手部枝節偵測</p>
    <p class="content">使用工具:</p>
    <ul>
      <li class="tools">Thonny編輯器</li>
      <li class="tools">opencv-python</li>
      <li class="tools">mediapipe</li>
      <li class="tools">cvzone</li>
      <li class="tools">php</li>
      <li class="tools">phpMyAdmin</li>
    </ul>
  </div>
  <div class="img-total">
    <div class="img-row">
      <img src="/src/assets/project-1-1.png" alt="" />
      <img src="/src/assets/project-1-2.png" alt="" />
    </div>
    <div class="img-row">
      <img src="/src/assets/project1-1-3.png" alt="" />
      <img src="/src/assets/project1-1-4.png" alt="" />
    </div>
  </div>
  <p class="content-1">
    使用Thonny編輯器撰寫Python，透過安裝opencv-python、mediapipe、cvzone來實現鏡頭照到人臉時會有點陣效果，<br />而照到手時，會顯示哪隻手並且顯示比了幾根手指頭。在偵測到手跟臉的結果是，上傳到各自的phpMyAdmin資料庫裡
  </p>
  <h2 class="center">感想</h2>
  <h4 class="center">
    這個作品是在大學實習期間製作的，雖然不是我自己獨自製作的，但讓我知道在做專案時，合作有多麼重要。<br />大家各自負責的範圍不一樣，可是再把資料都統整起來並完成作品後，真的讓我覺得努力有多麼的重要
  </h4>
</template>

<style lang="scss">
.title-1 {
  align-items: center;
  text-align: center;
}
.content {
  align-items: center;
  text-align: center;
}
ul {
  list-style: none;
  padding-left: 20px;
  text-align: center;
}
.tools {
  display: list-item;
  text-align: center;
}
.img-total {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}
img {
  width: 250px;
  height: auto;
}
.content-1 {
  text-align: center;
}
.center {
  text-align: center;
}

$breakpoint-md: 768px;
@media (max-width: $breakpoint-md) {
  .title-1 {
    font-size: 20px;
  }

  .content,
  .content-1 {
    font-size: 16px;
    padding: 0 15px;
  }

  .img-row {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 80%;
  }

  ul {
    padding-left: 0;
  }

  .tools {
    display: block;
    font-size: 16px;
  }
  .center {
    padding: 0 15px;
  }
}
</style>
