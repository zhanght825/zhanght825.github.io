import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import CartPage from '../pages/CartPage.vue'
import CheckoutPage from '../pages/CheckoutPage.vue'
import OrderStatus from '../pages/OrderStatus.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/order/:id', component: OrderStatus },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
