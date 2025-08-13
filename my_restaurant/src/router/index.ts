import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dumplings from '../views/Dumplings.vue'
import Buns from '../views/Buns.vue'
import Desserts from '../views/Desserts.vue'
import Cart from '../views/Cart.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Asks Dumpling | Home' } },
  { path: '/dumplings', name: 'Dumplings', component: Dumplings, meta: { title: 'Dumplings Menu' } },
  { path: '/buns', name: 'Buns', component: Buns, meta: { title: 'Buns Menu' } },
  { path: '/desserts', name: 'Desserts', component: Desserts, meta: { title: 'Desserts Menu' } },
  { path: '/cart', name: 'Cart', component: Cart, meta: { title: 'Your Cart' } },
  { path: '/about', name: 'About', component: About, meta: { title: 'About Us' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact Us' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Update page title on route change
router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title as string
})

export default router
