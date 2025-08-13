<template>
  <div v-if="weatherData" class="weather-widget">
    <h4>Weather in {{ weatherData.name }}</h4>
    <p>{{ weatherData.weather[0].description }}</p>
    <p>Temp: {{ weatherData.main.temp }}°C</p>
    <p>Humidity: {{ weatherData.main.humidity }}%</p>
    <p>Wind: {{ weatherData.wind.speed }} m/s</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weatherData = ref(null)
const apiKey = 'your_openweathermap_api_key' // 替换为你的 API Key
const city = 'Calgary' // 可以根据需要修改

const fetchWeather = async () => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${calgray}&appid=${"2d0001f0"}&units=metric`)
    const data = await res.json()
    weatherData.value = data
  } catch (err) {
    console.error('Weather fetch error:', err)
  }
}

onMounted(fetchWeather)
</script>

<style scoped>
.weather-widget {
  background-color: #fff8e1;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  font-size: 14px;
}
</style>
