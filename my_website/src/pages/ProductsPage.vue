<template>
    <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product"
            @add-to-cart="cart.addToCart(product)" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductCard from '@/components/ProductCard.vue'
import { useCartStore } from '@/stores/cart'

const products = ref([])
const cart = useCartStore()

onMounted(async () => {
    const res = await axios.get('http://localhost:8080/api/products') // 替换为你的后端地址
    products.value = res.data
})
</script>