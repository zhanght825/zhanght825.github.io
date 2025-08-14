<template>
  <div>
    <h2>Contact Us</h2>
    <p>If you have any questions or want to place a special order, please reach out to us!</p>

    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>

    <section class="contact-info">
      <h3>Our Info</h3>
      <p>Email: 88888888@example.com</p>
      <p>Phone: 888888-8888</p>
      <p>Service Area: Calgary (Takeout & Delivery Only)</p>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert(`Thank you, ${form.name}! Your message has been sent.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.contact-form { display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px; max-width: 400px; }
.form-group { display: flex; flex-direction: column; }
input, textarea { padding: 8px; border:1px solid #ccc; border-radius:5px; }
button { padding: 10px 15px; background:#ff8c00; color:white; border:none; border-radius:5px; cursor:pointer; }
button:hover { background:#e67600; }
.contact-info { background:#fff8e1; padding:15px; border-radius:8px; border:1px solid #ddd; }
</style>
