<template>
  <div>
    <h2>Desserts Menu</h2>
    <div class="menu-grid">
      <div v-for="item in desserts" :key="item.id" class="menu-item">
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store/cart.js'

const desserts = [
  { id: 201, name: 'Mango Pudding', price: 6 },
  { id: 202, name: 'Red Bean Soup', price: 5 },
  { id: 203, name: 'Egg Tart', price: 4 },
  { id: 204, name: 'Sweet Rice Cake', price: 5 }
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
