<template>
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">购物车</h2>
      <div v-for="item in cart.items" :key="item.id" class="flex justify-between mb-2">
        <div>{{ item.name }} × {{ item.quantity }}</div>
        <div>{{ item.price * item.quantity }} 元</div>
      </div>
      <div class="font-bold">总计：{{ cart.totalAmount }} 元</div>
      <router-link to="/checkout" class="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded">去结账</router-link>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/cart'
  const cart = useCartStore()
  </script>
  