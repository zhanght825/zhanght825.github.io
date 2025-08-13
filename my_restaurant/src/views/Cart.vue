<template>
  <div>
    <h2>Your Cart</h2>
    <div v-if="cart.items.length===0">Your cart is empty</div>
    <div v-else>
      <div v-for="item in cart.items" :key="item.id">
        {{ item.name }} x {{ item.quantity }} - ${{ item.price * item.quantity }}
        <button @click="cart.removeItem(item.id)">Remove</button>
      </div>
      <p>Total: ${{ cart.getTotal() }}</p>
    </div>
  </div>
</template>

<script setup>
import { cart } from '../store/cart.js'
</script>
