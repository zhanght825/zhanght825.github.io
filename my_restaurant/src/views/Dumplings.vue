<template>
  <div>
    <h2>Dumplings Menu</h2>
    <div class="menu-grid">
      <div v-for="item in dumplings" :key="item.id" class="menu-item">
        <h3>{{ item.name }}</h3>
        <p>${{ item.price }}</p>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store/cart.js'

const dumplings = [
  { id: 1, name: 'Pork Dumpling', price: 8 },
  { id: 2, name: 'Veggie Dumpling', price: 7 },
  { id: 3, name: 'Shrimp Dumpling', price: 10 }
]

function addToCart(item) {
  cart.addItem(item)
  alert(`${item.name} added to cart`)
}
</script>

<style scoped>
.menu-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:15px; }
.menu-item { border:1px solid #ddd; border-radius:5px; padding:10px; text-align:center; }
</style>
