<script setup>
import { ref, onMounted } from 'vue'
const canvas = ref(null)
const ctx = ref(null)
let canvasWidth = 0
let canvasHeight = 0
let circle_x = 160
let circle_y = 60
let radius = 20
let xSpeed = 10
let ySpeed = 10
let groundx = 100
let groundy = 500
let ground_height = 3
let brickArray = []
let count = 0

// 計算某個值到某個值之間的數
const getRandomArbitrary = (min, max) => {
  return min + Math.floor(Math.random() * (max - min))
}

class Brick {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    brickArray.push(this)
    this.visible = true
  }
  drawBrick() {
    ctx.value.fillStyle = 'lightgreen'
    ctx.value.fillRect(this.x, this.y, this.width, this.height)
  }
  touchingBall(ballx, bally) {
    return (
      ballx >= this.x - radius &&
      ballx <= this.x + this.width + radius &&
      bally <= this.y + this.height + radius &&
      bally >= this.y - radius
    )
  }
}

//製作所有的brick
for (let i = 0; i < 10; i++) {
  new Brick(getRandomArbitrary(0, 650), getRandomArbitrary(0, 500))
}

const drawCircle = () => {
  //畫出黑色背景
  ctx.value.fillStyle = 'black'
  ctx.value.fillRect(0, 0, canvasWidth, canvasHeight)
  //劃出所有的brick
  brickArray.forEach((brick) => {
    if (brick.visible) {
      brick.drawBrick()
    }
  })
  //畫出可控制的地板
  ctx.value.fillStyle = 'orange'
  ctx.value.fillRect(groundx, groundy, 200, ground_height)
  //畫出園球
  ctx.value.beginPath()
  ctx.value.arc(circle_x, circle_y, radius, 0, 2 * Math.PI)
  ctx.value.fillStyle = 'yellow'
  ctx.value.fill()
  ctx.value.stroke()
  // 更動圓的座標
  circle_x += xSpeed
  circle_y += ySpeed
  // 碰到邊界 確認右邊邊界                    確認左邊邊界
  if (circle_x >= canvasWidth - radius || circle_x <= radius) {
    xSpeed *= -1
  }
  if (circle_y <= radius || circle_y >= canvasHeight - radius) {
    ySpeed *= -1
  }
  //確認球是否打到橘色地板
  if (
    circle_x >= groundx - radius &&
    circle_x <= groundx + 200 + radius &&
    circle_y >= groundy - radius &&
    circle_y <= groundy + radius
  ) {
    if (ySpeed > 0) {
      circle_y -= 40
    } else {
      circle_y += 40
    }
    ySpeed *= -1
  }
  //確認球是否打到磚塊
  brickArray.forEach((brick) => {
    if (brick.visible && brick.touchingBall(circle_x, circle_y)) {
      //改變x,y方向速度，並將brick從brickArray中移除
      //從下方撞擊                                 從上方撞擊
      count++
      brick.visible = false
      if (circle_y >= brick.y + brick.height || circle_y <= brick.y) {
        ySpeed *= -1
      }
      //從左方撞擊
      else if (circle_x <= brick.x) {
        xSpeed *= -1
        //從右方撞擊
      } else if (circle_x >= brick.x + brick.width) {
        xSpeed *= -1
      }
      if (count == 10) {
        alert('遊戲結束')
      }
      // if (count == 10) {
      //   alert('遊戲結束')
      //   clearInterval(game)
      // }
    }
  })

  requestAnimationFrame(drawCircle)
}

onMounted(() => {
  const canva = canvas.value
  if (canva) {
    ctx.value = canva.getContext('2d')
    canvasWidth = canva.width
    canvasHeight = canva.height
    window.addEventListener('mousemove', (e) => {
      // 更新地板位置，這裡將滑鼠位置映射到畫布的座標
      const canvasRect = canva.getBoundingClientRect()
      groundx = e.clientX - canvasRect.left
    })

    window.addEventListener('touchmove', (e) => {
      const canvasRect = canva.getBoundingClientRect()
      const touchX = e.touches[0].clientX - canvasRect.left
      groundx = touchX
    })
    drawCircle()
  }
})
</script>

<template>
  <div class="container">
    <h1>彈跳球遊戲</h1>
  </div>
  <canvas ref="canvas" width="800" height="550"></canvas>
  <h2>若想重新遊玩，請重新整理頁面。</h2>
  <h4>
    心得:<br />利用貪吃蛇遊戲學習過的canvas製作彈跳球遊戲，遊戲做的完整性並不高，但往後我也會繼續把這些功能繼續強化!
  </h4>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
canvas {
  background-color: black;
  display: block;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
h4 {
  text-align: center;
}
@media (max-width: 768px) {
  canvas {
    width: 100%; // 在平板與小螢幕裝置上，讓 canvas 佔滿畫面
  }
}
</style>
