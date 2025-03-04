<template>
  <div class="wrapper">
    <div id="app">
      <!-- 逐字顯示的文字 -->
      <transition name="fade" @before-enter="beforeEnter" @after-enter="afterEnter">
        <div v-if="showText" class="loading-text">
          <span
            v-for="(letter, index) in letters"
            :key="index"
            class="letter"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            {{ letter }}
          </span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 定義響應式變數
const showText = ref(true)

// 把文字拆成單獨的字母
const text = '歡迎來到我的網站 '
const letters = ref(text.split(''))
const isMobile = ref(window.innerWidth <= 768)

// 在組件掛載後，延遲顯示首頁

onMounted(() => {
  if (isMobile.value) {
    document.body.style.backgroundColor = 'lightblue' // 手機背景色
  } else {
    document.body.style.backgroundColor = 'lightblue'
  }
  setTimeout(() => {
    showText.value = false
    router.push('/home')
  }, 3000) // 3秒後顯示首頁
})
onUnmounted(() => {
  document.body.style.backgroundColor = '' // 離開組件時還原
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loading-text {
  font-size: 2em;
  text-align: center;
  margin-top: 20%;
  white-space: nowrap; /* 防止文字換行 */
}

.letter {
  opacity: 0;
  display: inline-block;
  animation: fadeIn 0.5s forwards;
  word-spacing: 0.1em; /* 字母間距 */
  margin-right: 0.3em; /* 控制字母之間的距離 */
  color: orange;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s; /* 縮短動畫時間 */
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw; /* 修正 width 設錯 */
    height: 100vh;
    margin: 0;
  }

  .loading-text {
    font-size: 1.5em; /* 手機版縮小字體 */
    text-align: center;
    margin-top: 40%;
    white-space: nowrap;
  }

  .letter {
    animation: fadeIn 0.3s forwards; /* 手機版縮短動畫 */
    margin-right: 0.15em; /* 減少字母之間的距離 */
  }
}
</style>
