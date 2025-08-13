import { reactive } from 'vue'

export const cart = reactive({
    items: [],
    addItem(item) {
        const existing = this.items.find(i => i.id === item.id)
        if (existing) {
            existing.quantity++
        } else {
            this.items.push({ ...item, quantity: 1 })
        }
    },
    removeItem(id) {
        const index = this.items.findIndex(i => i.id === id)
        if (index !== -1) this.items.splice(index, 1)
    },
    getTotal() {
        return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    }
})
