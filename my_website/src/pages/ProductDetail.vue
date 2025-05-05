<!-- src/pages/ProductDetail.vue -->
<template>
    <div class="p-4">
        <div v-if="product">
            <img :src="product.image_url" alt="商品图片" class="w-full h-60 object-cover mb-4" />
            <h2 class="text-2xl font-bold mb-2">{{ product.name }}</h2>
            <p class="text-lg text-green-600 mb-2">{{ product.price }} 元</p>
            <p class="mb-4">{{ product.description }}</p>
            <button @click="addToCart" class="px-4 py-2 bg-red-600 text-white rounded">加入购物车</button>
        </div>
        <div v-else>
            <p>加载中...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const cart = useCartStore()
const product = ref(null)

onMounted(async () => {
    const res = await axios.get(`http://localhost:8080/api/products/${route.params.id}`)
    product.value = res.data
})

function addToCart() {
    cart.addToCart(product.value)
}
</script>