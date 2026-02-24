<script setup lang="ts">
definePageMeta({
  middleware: 'admin'
})
</script>

<template>
  <div>
    <h2>Login</h2>
    <div class="input-box">
      <span>ID</span>
      <input type="text">
    </div>
    <div class="input-box">
      <span>Password</span>
      <input type="password">
    </div>
  </div>
</template>
<style scoped>
  .input-box{
    display: flex;
    row-gap: 10px;
  }
  .input-box span{
    width: 100px;
  }
  .input-box input{
    outline: 0;
    background: #eee;
  }
</style>