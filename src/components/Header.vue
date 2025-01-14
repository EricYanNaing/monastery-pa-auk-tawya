<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "myan" : "en";
};
</script>

<template>
  <header class="bg-white shadow-md fixed w-full top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-amber-600">
          PA AUK TAWYA (18 Miles)
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <router-link to="/" class="nav-link">{{ t("nav.home") }}</router-link>
          <router-link to="/sayadaw-bio" class="nav-link">{{
            t("nav.monks")
          }}</router-link>
          <router-link to="/monastery" class="nav-link">{{
            t("nav.about")
          }}</router-link>
           <router-link to="/donator" class="nav-link">{{
            t("nav.donator")
          }}</router-link>
          <router-link to="/contact" class="nav-link">{{
            t("nav.contact")
          }}</router-link>
          <button @click="toggleLanguage" class="btn btn-primary">
            {{ locale === "en" ? "Myanmar" : "English" }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isMenuOpen" class="md:hidden mt-4 animate-fade-in">
        <div class="flex flex-col space-y-2">
          <router-link to="/" class="nav-link" @click="isMenuOpen = false">{{
            t("nav.home")
          }}</router-link>
          <router-link
            to="/monks"
            class="nav-link"
            @click="isMenuOpen = false"
            >{{ t("nav.monks") }}</router-link
          >
          <router-link
            to="/about"
            class="nav-link"
            @click="isMenuOpen = false"
            >{{ t("nav.about") }}</router-link
          >
          <router-link
            to="/contact"
            class="nav-link"
            @click="isMenuOpen = false"
            >{{ t("nav.contact") }}</router-link
          >
          <button @click="toggleLanguage" class="btn btn-primary w-24">
            {{ locale === "en" ? "myan" : "EN" }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
