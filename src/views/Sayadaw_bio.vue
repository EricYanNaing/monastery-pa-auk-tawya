<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

</script>

<template>
  <!-- Hero Section -->
  <div class="relative min-h-screen flex items-center justify-center">
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    <div class="relative container mx-auto px-4 text-center">
      <h1
        class="text-xl md:text-5xl text-white font-bold mb-6 animate-slide-in"
      >
        {{ t("home.welcome") }}
      </h1>
    </div>
  </div>
</template>

<style lang="scss"></style>
