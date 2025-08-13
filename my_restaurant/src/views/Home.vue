<template>
  <div>
    <section class="hero">
      <h1>Welcome to Asks Dumpling</h1>
      <p>Delicious dumplings, buns and desserts delivered to your door!</p>
      <router-link :to="{name:'Dumplings'}" class="btn">Order Now</router-link>
    </section>

    <section class="intro">
      <h2>Our Specialties</h2>
      <div class="intro-grid">
        <div class="intro-item">
          <h3>Dumplings</h3>
          <p>Juicy and freshly made dumplings for every taste.</p>
        </div>
        <div class="intro-item">
          <h3>Buns & Pancakes</h3>
          <p>Soft, flavorful buns and pancakes perfect for breakfast or snack.</p>
        </div>
        <div class="intro-item">
          <h3>Desserts</h3>
          <p>Sweet treats to finish your meal with delight.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 50px 20px;
  background: #ffe5b4;
  border-radius: 8px;
  margin-bottom: 40px;
}
.hero .btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #ff8c00;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.intro {
  text-align: center;
}
.intro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.intro-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff8e1;
}
</style>
