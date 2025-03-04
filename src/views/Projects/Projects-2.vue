<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const history = ref([])
const newTodo = ref('')
const todos = ref([])
const currentTab = ref('all')

const tabs = [
  { text: '全部', value: 'all' },
  { text: '待完成', value: 'wait' },
  { text: '已完成', value: 'done' },
]

const addTodo = () => {
  if (!newTodo.value.trim()) {
    alert('輸入框不能留白')
    return
  }
  todos.value.unshift({
    content: newTodo.value,
    id: Date.now(),
    checked: false,
  })
  newTodo.value = ''
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((item) => item.id !== id)
}

const clearCompleted = () => {
  if (confirm('確認是否清除已完成項目?')) {
    todos.value = todos.value.filter((item) => !item.checked)
  }
}

const filteredTodos = computed(() => {
  if (currentTab.value === 'done') {
    return todos.value.filter((item) => item.checked)
  } else if (currentTab.value === 'wait') {
    return todos.value.filter((item) => !item.checked)
  }
  return todos.value
})

const itemCountText = computed(() => {
  if (currentTab.value === 'done') {
    return `${filteredTodos.value.length}個已完成項目`
  } else if (currentTab.value === 'wait') {
    return `${filteredTodos.value.length}個待完成項目`
  }
  return `${todos.value.length}個項目`
})

onMounted(() => {
  const savedTodos = JSON.parse(localStorage.getItem('todos'))
  if (savedTodos) {
    todos.value = savedTodos
  }
})
watch(
  todos,
  (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  },
  { deep: true },
)
</script>

<template>
  <div class="container">
    <h1>Todo list</h1>
    <div class="card input">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        type="text"
        class="txt"
        placeholder="請輸入代辦事項"
      />
      <button @click="addTodo" class="btn_add">新增</button>
    </div>
    <div class="card card_list">
      <ul class="tab">
        <li
          v-for="tab in tabs"
          :key="tab.value"
          :class="{ active: currentTab === tab.value }"
          @click="currentTab = tab.value"
        >
          {{ tab.text }}
        </li>
      </ul>
      <div class="cart_content">
        <ul class="list">
          <li v-for="item in filteredTodos" :key="item.id" :data-id="item.id">
            <label class="checkbox" for=""></label>
            <input type="checkbox" v-model="item.checked" />
            <span>{{ item.content }}</span>
            <button @click.prevent="removeTodo(item.id)" class="delete"></button>
          </li>
        </ul>
        <div class="list_footer">
          <p class="itemCount">{{ itemCount }}</p>
          <button @click="clearCompleted" class="clearAll">清除已完成項目</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo+Tamma+2:600, 700');
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');

* {
  box-sizing: border-box;
}

html {
  font-size: 23px;
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  padding: 0;
  height: 100%;
}
$breakpoint-md: 768px;
$dark: #333;
$gray: #9f9a91;
$light: #efefef;

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'baloo Tamma 2';
  letter-spacing: 0.5rem;
}
.container {
  margin: 3rem auto 1.5rem auto;
  padding: 0 12px;
  width: 500px;
}

.card {
  margin-bottom: 0.5rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
}

input[type='text'] {
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1rem;
  padding-right: 1rem;
  color: $dark;
  &::placeholder {
    color: $gray;
  }
}
.input {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
}
.btn_add {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 70px;
  height: 35px;
  border-radius: 10px;
  background-color: $dark;
  color: white;
  font-size: 1rem;
}

.card_list {
  padding: 0;
}

.tab {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  color: $gray;
  font-size: 20px;
}
li {
  list-style-type: none;
  padding: 0.5rem;
  width: 100%;
  flex: 1;
  text-align: center;
  border-bottom: 2px solid $light;
  &.active {
    border-bottom: 2px solid $dark;
    color: $dark;
    font-weight: bold;
  }
}

.cart_content {
  padding: 0.5rem 1rem 1rem 1rem;
}

.list {
  li {
    position: relative;
    padding-right: 2rem;

    button.delete {
      position: relative;
      opacity: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50% -50);
      text-decoration: none;
      color: $dark;
      display: block;
      width: 1rem;
      height: 1rem;
      border: none; // 移除按鈕預設邊框
      background: none; // 移除按鈕預設背景
      background-image: url('/src/assets/123123.png');
      background-size: cover;
      cursor: pointer; // 讓按鈕有點擊手勢
    }

    &:hover button.delete {
      opacity: 1;
    }
  }
}
.list_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  button {
    color: $dark;
    border: none;
    background: none;
  }
}

.checkbox {
  position: relative;
  user-select: none;
  width: 100%;
  display: block; //區塊級元素會佔據整個行
  padding-left: 44px;
  cursor: pointer; //屬標移到上面會顯示手型狀
  span {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
    line-height: 1.5;
    @media (max-width: 575px) {
      padding-right: 1rem;
    }
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  span::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%) scale(1);
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: 1px solid $dark;
    pointer-events: none;
    transition: 0.3s ease;
  }
  span::after {
    content: '';
    position: absolute;
    left: 14px;
    top: 27%;
    transform: rotate(45deg);
    height: 15px;
    width: 0.5rem;
    border-radius: 1px;

    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease;
  }
  input:checked {
    ~ span {
      color: $gray;
      text-decoration: line-through;
    }
    ~ span::before {
      border-color: transparent;
      transform: translateY(-50%) scale(0);
    }
    ~ span::after {
      opacity: 1;
    }
  }
}
@media (max-width: $breakpoint-md) {
  .container {
    width: 90%; // 手機寬度為 90% 視口寬度
    // 稍微縮小邊距
  }
}
</style>
