<template>
  <div>
    <header class="site-header" role="banner">
      <div class="container nav">
        <div class="brand">
          <div class="logo">L</div>
          <span>ove within</span>
        </div>

        <button class="burger" aria-label="Open menu" :aria-expanded="mobileOpen" @click="toggleMenu">
          ☰
        </button>

        <nav class="menu" :class="{ open: mobileOpen }" aria-label="Main Navigation">
          <RouterLink :to="{name:'Home'}" :aria-current="$route.name==='Home' ? 'page' : null">Home</RouterLink>
          <RouterLink :to="{name:'Dumplings'}" :aria-current="$route.name==='Dumplings' ? 'page' : null">Dumplings</RouterLink>
          <RouterLink :to="{name:'Buns'}" :aria-current="$route.name==='Buns' ? 'page' : null">Buns</RouterLink>
          <RouterLink :to="{name:'Desserts'}" :aria-current="$route.name==='Desserts' ? 'page' : null">Desserts</RouterLink>
          <RouterLink :to="{name:'Cart'}" :aria-current="$route.name==='Cart' ? 'page' : null">Cart</RouterLink>
          <RouterLink :to="{name:'About'}" :aria-current="$route.name==='About' ? 'page' : null">About</RouterLink>
          <RouterLink :to="{name:'Contact'}" :aria-current="$route.name==='Contact' ? 'page' : null">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <!-- Optional Weather Widget -->
    <!-- <WeatherWidget /> -->

    <main class="container">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import SiteFooter from './components/SiteFooter.vue'
// import WeatherWidget from './components/WeatherWidget.vue'

const mobileOpen = ref(false)
function toggleMenu() { mobileOpen.value = !mobileOpen.value }
</script>

<style>
/* 基本导航和响应式样式 */
.site-header { background:#fff; border-bottom:1px solid #ccc; padding:10px 20px; }
.nav { display:flex; justify-content:space-between; align-items:center; }
.menu { display:flex; gap:15px; }
.menu.open { display:block; }
.burger { display:none; }
@media (max-width:768px){
  .menu { display:none; flex-direction:column; }
  .burger { display:block; }
}
</style>
