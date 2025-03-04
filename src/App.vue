<script setup></script>

<template>
  <header>
    <div class="title">
      <a class="title-font" href="/">何宇程的網站</a>
    </div>
  </header>
  <nav>
    <div class="nav">
      <router-link to="/home">首頁</router-link>
      <router-link to="/project/project-1">作品介紹</router-link>
      <router-link to="/aboutme">關於我</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss">
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  font-size: 18px;
}
.nav {
  background-color: greenyellow;
  align-items: center;
  text-align: center;
  line-height: 2;
  letter-spacing: 1px;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.title {
  background-color: skyblue;
  text-align: center;
}
.title-font {
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  margin-right: 15px;

  margin-top: 15px;
  line-height: 2;
}
</style>
