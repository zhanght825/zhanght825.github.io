<template>
  <div>
    <h2>Buns & Pancakes Menu</h2>
    <div class="menu-grid">
      <div v-for="item in buns" :key="item.id" class="menu-item">
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store/cart.js'

const buns = [
  { id: 101, name: 'Steamed Bun', price: 5 },
  { id: 102, name: 'Stuffed Bun', price: 6 },
  { id: 103, name: 'Big Pancake', price: 7 },
  { id: 104, name: 'Sweet Red Bean Bun', price: 6 }
]

function addToCart(item) {
  cart.addItem(item)
  alert(`${item.name} added to cart`)
}
</script>

<style scoped>
.menu-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  gap: 15px; 
}
.menu-item { 
  border: 1px solid #ddd; 
  border-radius: 5px; 
  padding: 10px; 
  text-align: center; 
}
</style>
