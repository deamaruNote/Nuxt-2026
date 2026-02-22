export default defineNuxtPlugin(() => {
    const user = useState('user')
    // 模擬 admin 使用者
    user.value = { name: 'test', role: 'admin' }
  })