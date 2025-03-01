<script setup></script>

<template>
  <div>
    <h1 class="project-title">專案介紹</h1>
    <nav class="sub-nav">
      <router-link to="/project/project-1">樹梅派製作</router-link>
      <router-link to="/project/project-2">待辦事項清單</router-link>
    </nav>
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
</style>
