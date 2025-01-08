<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import dummy1 from "../assets/dummy/dummy1.jpg";
import dummy2 from "../assets/dummy/dummy2.jpg";
import dummy3 from "../assets/dummy/dummy3.jpg";
import dummy4 from "../assets/dummy/dummy4.jpg";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    url: dummy1,
    title: "Temple Grounds",
    category: "Architecture",
  },
  {
    url: dummy2,
    title: "Meditation Hall",
    category: "Interior",
  },
  {
    url: dummy3,
    title: "Zen Garden",
    category: "Nature",
  },
  {
    url: dummy4,
    title: "Main Shrine",
    category: "Spiritual",
  },
  {
    url: dummy1,
    title: "Ceremony Hall",
    category: "Events",
  },
  {
    url: dummy2,
    title: "Library",
    category: "Interior",
  },
];

const isMobile = ref(window.innerWidth < 768);

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768;
  });
});
</script>

<template>
  <!-- Mobile View with Swiper -->
  <div v-if="isMobile" class="w-full">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <div class="relative group overflow-hidden">
          <img
            :src="image.url"
            class="w-full h-[300px] object-cover"
            :alt="image.title"
          />
          <div
            class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div class="text-center">
              <div class="text-amber-400 text-sm mb-2">
                {{ image.category }}
              </div>
              <h3 class="text-white text-xl font-semibold">
                {{ image.title }}
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <!-- Desktop Grid View -->
  <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-6">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="relative group overflow-hidden cursor-pointer"
    >
      <img
        :src="image.url"
        :alt="image.title"
        class="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div
          class="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
        >
          <div class="text-amber-400 text-sm mb-2">{{ image.category }}</div>
          <h3 class="text-white text-xl font-semibold">{{ image.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
}

:deep(.swiper-pagination-bullet) {
  background: white;
}

@media (max-width: 768px) {
  .swiper {
    height: 300px;
  }
}
</style>
