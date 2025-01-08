<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>