<template>
    <div class="p-4">
        <h2 class="text-xl font-bold mb-2">订单状态</h2>
        <div v-if="order">
            <p>订单号：{{ order.order_id }}</p>
            <p>状态：{{ order.status }}</p>
            <p>快递单号：{{ order.tracking_number }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const order = ref(null)

onMounted(async () => {
    const res = await axios.get(`http://localhost:8080/api/orders/${route.params.id}`)
    order.value = res.data
})
</script>