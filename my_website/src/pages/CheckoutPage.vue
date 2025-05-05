<template>
    <div class="p-4">
        <h2 class="text-xl mb-4">填写配送信息</h2>
        <input v-model="address" placeholder="地址" class="w-full mb-2 border p-2" />
        <input v-model="phone" placeholder="电话" class="w-full mb-2 border p-2" />
        <button @click="submitOrder" class="bg-blue-600 text-white px-4 py-2 rounded">提交订单</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const address = ref('')
const phone = ref('')
const cart = useCartStore()
const router = useRouter()

async function submitOrder() {
    const res = await axios.post('http://localhost:8080/api/orders', {
        address: address.value,
        phone: phone.value,
        items: cart.items.map(i => ({
            product_id: i.id,
            quantity: i.quantity
        }))
    })
    cart.clearCart()
    router.push(`/order/${res.data.order_id}`)
}
</script>