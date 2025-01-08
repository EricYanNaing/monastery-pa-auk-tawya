<script setup>
import { useI18n } from "vue-i18n";
import ImageCarousel from "../components/ImageCarousel.vue";
import { ref, onMounted } from "vue";
import homephoto from "../assets/dummy/home-wallpaper.jpg";
import dummy1 from "../assets/dummy/dummy1.jpg";
import dummy2 from "../assets/dummy/dummy2.jpg";
import dummy3 from "../assets/dummy/dummy3.jpg";
import dummy4 from "../assets/dummy/dummy4.jpg";

const { t, locale } = useI18n();

const isEnglish = ref(true);
const stats = ref([
  { number: 127, myan: "၁၂၇", label: "Awards Received" },
  { number: 1505, myan: "၁၅၀၅", label: "Meditation Sessions" },
  { number: 109, myan: "၁၀၉", label: "Happy Students" },
  { number: 102, myan: "၁၀၂", label: "Resident Monks" },
]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  if (locale.value === "en") {
    isEnglish.value = true;
  } else {
    isEnglish.value = false;
  }
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative min-h-screen flex items-center justify-center">
      <img
        class="absolute inset-0 w-full h-full object-cover"
        alt="home-wallpaper"
        :src="homephoto"
      />
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative container mx-auto px-4 text-center">
        <h1
          class="text-xl md:text-5xl text-white font-bold mb-6 animate-slide-in"
        >
          {{ t("home.welcome") }}
        </h1>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="py-20 daily-donation-section mt-16">
      <div class="container mx-auto px-4">
        <div class="grid gap-8 text-center mt-52">
          <div class="text-xl md:text-2xl font-bold text-center text-white">
            Daily Donation Photos
          </div>
          <p class="text-white mb-2">တစ်နေ့တာဆွမ်းအလှူဓါတ်ပုံများ</p>
          <button>
            <router-link class="btn btn-primary" to="/">Click Here</router-link>
          </button>
        </div>
      </div>
    </div>

    <!-- About Sayadaw -->
    <div id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="fade-up">
            <img
              :src="dummy3"
              alt="Monastery Life"
              class="rounded-lg shadow-xl"
            />
          </div>
          <div class="fade-up">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              {{ t("home.aboutMonks") }}
            </h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ t("home.monksDesc") }}
            </p>
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="flex items-start space-x-3">
                <div class="text-amber-600">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Meditation</h3>
                  <p class="text-sm text-gray-500">Daily guided sessions</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="text-amber-600">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Teaching</h3>
                  <p class="text-sm text-gray-500">Buddhist philosophy</p>
                </div>
              </div>
            </div>
            <router-link to="/about" class="btn btn-primary">
              {{ t("home.readMore") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- About Monastery -->
    <div id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="fade-up">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">
              {{ t("home.aboutMonastery") }}
            </h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ t("home.monasteryDesc") }}
            </p>
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="flex items-start space-x-3">
                <div class="text-amber-600">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Meditation</h3>
                  <p class="text-sm text-gray-500">Daily guided sessions</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="text-amber-600">
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
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Teaching</h3>
                  <p class="text-sm text-gray-500">Buddhist philosophy</p>
                </div>
              </div>
            </div>
            <router-link to="/about" class="btn btn-primary">
              {{ t("home.readMore") }}
            </router-link>
          </div>
          <div class="fade-up">
            <img
              :src="dummy3"
              alt="Monastery Life"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Section -->
    <div class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 fade-up">
          Our Gallery
        </h2>
        <ImageCarousel />
      </div>
    </div>

    <!-- Contact Section -->
    <div class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center fade-up">
          <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="text-amber-600 mb-4">
                <svg
                  class="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Address</h3>
              <p class="text-gray-600">123 Monastery Road</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="text-amber-600 mb-4">
                <svg
                  class="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Email</h3>
              <p class="text-gray-600">info@monastery.com</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg">
              <div class="text-amber-600 mb-4">
                <svg
                  class="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-semibold mb-2">Phone</h3>
              <p class="text-gray-600">(123) 456-7890</p>
            </div>
          </div>
          <router-link to="/contact" class="btn btn-primary inline-block">
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-up.show {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.daily-donation-section {
  background-image: url("../assets/dummy/daily-donation.jpg");
  background-size: cover;
  background-position: center center;
  height: 400px;
}
</style>
