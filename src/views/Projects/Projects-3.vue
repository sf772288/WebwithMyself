<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const canvas = ref(null)
const ctx = ref(null)

const unit = 20
const row = ref(0)
const col = ref(0)

const snake = ref([
  { x: 80, y: 0 },
  { x: 60, y: 0 },
  { x: 40, y: 0 },
  { x: 20, y: 0 },
])

class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * col.value) * unit
    this.y = Math.floor(Math.random() * row.value) * unit
  }
  drawFruit() {
    ctx.value.fillStyle = 'lightblue'
    ctx.value.fillRect(this.x, this.y, unit, unit)
  }

  pickALocation() {
    let overlapping = false
    let new_x
    let new_y

    const checkOverlap = (new_x, new_y) => {
      for (let i = 0; i < snake.value.length; i++) {
        if (new_x == snake.value[i].x && new_y == snake.value[i].y) {
          overlapping = true
          return
        } else {
          overlapping = false
        }
      }
    }
    do {
      new_x = Math.floor(Math.random() * col.value) * unit
      new_y = Math.floor(Math.random() * row.value) * unit
      checkOverlap(new_x, new_y)
    } while (overlapping)
    this.x = new_x
    this.y = new_y
  }
}

let myFruit = new Fruit()
let myGame = null
let Gameover = false
onMounted(() => {
  if (canvas.value) {
    canvas.value.width = 320
    canvas.value.height = 320
    ctx.value = canvas.value.getContext('2d')
    row.value = canvas.value.height / unit
    col.value = canvas.value.width / unit
    myFruit = new Fruit()
    myGame = setInterval(draw, 150)
    window.addEventListener('keydown', changeDirection)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    loadHightestScore()
  }
})

onUnmounted(() => {
  clearInterval(myGame) // **在元件卸載時清除計時器**
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
})

let d = 'Right'
const changeDirection = (event) => {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.preventDefault() // 阻止鍵盤影響網頁滾動
  }

  if (event.key == 'ArrowLeft' && d != 'Right') {
    d = 'Left'
  } else if (event.key == 'ArrowDown' && d != 'Up') {
    d = 'Down'
  } else if (event.key == 'ArrowUp' && d != 'Down') {
    d = 'Up'
  } else if (event.key == 'ArrowRight' && d != 'Left') {
    d = 'Right'
  }
}

// 處理觸控開始事件
const handleTouchStart = (event) => {
  event.preventDefault()
  const touch = event.touches[0]
  lastTouchX = touch.clientX
  lastTouchY = touch.clientY
}

// 處理觸控移動事件
let lastTouchX = 0
let lastTouchY = 0
let lastDirectionChange = 0
const DIRECTION_CHANGE_DELAY = 100

const handleTouchMove = (event) => {
  event.preventDefault()
  const touch = event.touches[0]
  const dx = touch.clientX - lastTouchX
  const dy = touch.clientY - lastTouchY
  const now = Date.now()
  if (now - lastDirectionChange < DIRECTION_CHANGE_DELAY) {
    return
  }
  if (Math.abs(dx) > Math.abs(dy)) {
    // 水平滑動
    if (dx > 0 && d != 'Left') {
      d = 'Right'
    } else if (dx < 0 && d != 'Right') {
      d = 'Left'
    }
  } else {
    // 垂直滑動
    if (dy > 0 && d != 'Up') {
      d = 'Down'
    } else if (dy < 0 && d != 'Down') {
      d = 'Up'
    }
  }
  lastTouchX = touch.clientX
  lastTouchY = touch.clientY
  lastDirectionChange = now
}

const highestScore = ref(0)
const score = ref(0)

const draw = () => {
  if (Gameover) return
  for (let i = 1; i < snake.value.length; i++) {
    if (snake.value[i].x == snake.value[0].x && snake.value[i].y == snake.value[0].y) {
      clearInterval(myGame)
      Gameover = true
      alert('遊戲結束')
      return
    }
  }

  ctx.value.fillStyle = 'black'
  ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
  myFruit.drawFruit()

  for (let i = 0; i < snake.value.length; i++) {
    if (i == 0) {
      ctx.value.fillStyle = 'lightgreen'
    } else {
      ctx.value.fillStyle = 'lightblue'
    }
    ctx.value.strokeStyle = 'white'

    if (snake.value[i].x >= canvas.value.width) {
      snake.value[i].x = 0
    } else if (snake.value[i].x < 0) {
      snake.value[i].x = canvas.value.width - unit
    } else if (snake.value[i].y >= canvas.value.height) {
      snake.value[i].y = 0
    } else if (snake.value[i].y < 0) {
      snake.value[i].y = canvas.value.height - unit
    }

    ctx.value.fillRect(snake.value[i].x, snake.value[i].y, unit, unit)
    ctx.value.strokeRect(snake.value[i].x, snake.value[i].y, unit, unit)
  }
  let snakeX = snake.value[0].x
  let snakeY = snake.value[0].y
  if (d == 'Left') {
    snakeX -= unit
  } else if (d == 'Up') {
    snakeY -= unit
  } else if (d == 'Right') {
    snakeX += unit
  } else if (d == 'Down') {
    snakeY += unit
  }
  let newHead = {
    x: snakeX,
    y: snakeY,
  }

  if (snake.value[0].x == myFruit.x && snake.value[0].y == myFruit.y) {
    myFruit.pickALocation()
    score.value++
    setHighestScore()
  } else {
    snake.value.pop()
  }

  snake.value.unshift(newHead)
}
const loadHightestScore = () => {
  const storedScore = localStorage.getItem('highestScore')
  if (storedScore !== null) {
    highestScore.value = Number(storedScore)
  }
}

const setHighestScore = () => {
  if (score.value > highestScore.value) {
    highestScore.value = score.value
    localStorage.setItem('highestScore', highestScore.value)
  }
}

const reloadPage = () => {
  localStorage.removeItem('highestScore')
  window.location.reload()
}
</script>

<template>
  <div class="game-container">
    <div class="title-container">
      <h1>貪吃蛇遊戲</h1>
      <button @click="reloadPage" class="start">開始新遊戲</button>
    </div>

    <div class="bottom-container">
      <div class="score-container">
        <p class="myScore">遊戲分數:{{ score }}</p>
        <p class="myScore1">最高分數:{{ highestScore }}</p>
      </div>

      <div class="canvas-container">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.game-container {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: flex-start; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100vh;
  overflow-y: scroll; /* 僅允許在遊戲區域內滾動 */
  -webkit-overflow-scrolling: touch; /* 優化iOS設備的滾動體驗 */
}

.title-container {
  display: flex;
  flex-direction: column; /* 標題和按鈕垂直排列 */
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.start {
  padding: 0.25rem 0.5rem;
  background-color: yellow;
  font-size: 1.15rem;
  margin-top: 15px;
  margin-left: 298px; /* 添加這行來向右移動按鈕 */
}

.bottom-container {
  display: flex;
  justify-content: space-between; /* 左右並排 */
  width: 100%; /* 使分數和遊戲畫面區域擴展 */
  max-width: 960px; /* 最大寬度 */
  padding: 0 20px;
}

.score-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* 向左對齊 */
  flex: 1; /* 左邊區域佔滿剩餘空間 */
  margin-left: 20px; /* 添加這行來讓分數和最高分數向右偏移 */
}

.myScore1,
.myScore {
  color: black;
  font-size: 1.5rem;
  padding: 5px;
  margin-left: 70px; /* 添加這行來讓分數更靠右 */
}

.canvas-container {
  flex: 2; /* 右邊遊戲畫面區域佔兩倍寬度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

canvas {
  width: 320px;
  height: 320px;
  background-color: black;
  border: 5px solid lightgreen;
}

@media (max-width: 1024px) {
  .game-container {
    flex-direction: column; /* 確保在小螢幕上仍然是垂直排列 */
    align-items: center; /* 水平居中 */
    overflow-y: auto;
  }

  .title-container {
    margin-bottom: 15px;
  }

  .start {
    font-size: 1.2rem; /* 確保按鈕不會被壓縮 */
    margin-left: 0; /* 移除邊距 */
    padding: 0.5rem 1rem; /* 增加按鈕的內邊距 */
    min-width: 150px; /* 確保按鈕不會被壓縮 */
    text-align: center;
    max-width: 200px; /* 限制最大寬度 */
  }

  .bottom-container {
    flex-direction: column; /* 小螢幕時將分數和畫布垂直排列 */
    align-items: center; /* 使項目居中 */
    padding: 10px 0; /* 增加內邊距來避免邊緣接觸 */
  }

  .score-container {
    margin-left: 0; /* 取消偏移 */
    text-align: center; /* 中央對齊 */
    min-width: 200px;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }

  .myScore1,
  .myScore {
    margin-left: 0; /* 取消分數的左邊距 */
    font-size: 1rem; /* 調整字體大小 */
    text-align: center;
  }

  .canvas-container {
    flex: 1; /* 讓畫布佔據剩餘空間 */
    width: 100%; /* 保證畫布區域寬度不會超過螢幕 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0; /* 增加間距 */
  }

  canvas {
    width: 250px; /* 降低畫布寬度 */
    height: 250px; /* 降低畫布高度 */
  }
}
</style>
