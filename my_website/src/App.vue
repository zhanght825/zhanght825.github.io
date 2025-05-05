<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="bg-red-600 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">中国家常菜商城</h1>
        <nav>
          <router-link to="/" class="text-white px-4">首页</router-link>
          <router-link to="/products" class="text-white px-4">商品</router-link>
          <router-link to="/cart" class="text-white px-4">购物车</router-link>
        </nav>
      </div>
    </header>

    <!-- 主内容区域，显示根据路由变化的内容 -->
    <main class="container mx-auto p-4">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 中国家常菜商城 | 版权所有</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* 在这里可以定义全局样式 */
body {
  font-family: 'Arial', sans-serif;
}
</style>
