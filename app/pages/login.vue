<template>
  <div class="input-form">
    <h2>Login</h2>
    <div class="input-box">
      <span>ID</span>
      <input type="text">
    </div>
    <div class="input-box">
      <span>Password</span>
      <input type="password">
    </div>
    <div class="input-box">
        <button type="button">login</button>
        <nuxt-link to="/">
            <button type="button">back</button>
        </nuxt-link>
    </div>
  </div>
</template>
<style scoped>
  .input-form{
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .input-box{
    display: flex;
    text-align: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .input-box span{
    width: 100px;
  }
  .input-box input{
    border: none;
    border-radius: 3px;
    background: #eee;
    padding: 5px;
  }
</style>