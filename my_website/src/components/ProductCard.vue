<template>
    <div class="border p-4 rounded shadow hover:shadow-lg">
        <img :src="product.image_url" alt="商品图片" class="w-full h-40 object-cover mb-2" />
        <h3 class="text-lg font-bold">{{ product.name }}</h3>
        <p class="text-green-600">{{ product.price }} 元</p>
        <button @click="$emit('add-to-cart')" class="mt-2 px-3 py-1 bg-red-500 text-white rounded">加入购物车</button>
    </div>
</template>

<script setup>
defineProps(['product'])
defineEmits(['add-to-cart'])
</script>