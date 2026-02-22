export default defineNuxtRouteMiddleware((to, from) => {
    const user = useState('user')
    console.log("test")
    if (!user.value || user.value.role !== 'admin') {
      return navigateTo('/forbidden')
    }
  })