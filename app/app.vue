<script setup lang="ts">
const nav = [
  { label: 'Home', to: '/' },
  { label: 'Forbidden', to: '/forbidden' },
  { label: 'Login', to: '/login' },
]
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- <nav>
      <NuxtLink
        v-for="item in nav"
        :key="item.to"
        :to="item.to"
        class="nav-link"
      >
        {{ item.label }}
      </NuxtLink>
    </nav> -->

    <!-- 顯示 pages 內容 -->
    <NuxtPage />
  </div>
</template>

<style>
@import url('@/style/main.css');
.nav-link {
  margin-right: 12px;
}

  button{
      background: #333;
      color: white;
      border: none;
      padding: 2px 30px;
      border-radius: 5px;
      cursor: pointer;
  }
</style>