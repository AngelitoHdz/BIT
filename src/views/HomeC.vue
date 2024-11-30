<script setup lang="ts">
import { useGamesStore } from '../stores/gamesc'
import GameCategory from '../components/GameCategory.vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


const store = useGamesStore()
</script>

<template>
  <Header />
  <main class="container py-5">
    <div class="row g-4">
      <div
        class="col-12"
        v-for="category in store.categories"
        :key="category.name"
      >
        <GameCategory
          :title="category.name"
          :bgColor="category.bgColor"
          :games="store.gamesByCategory(category.name)"
        />
      </div>
    </div>
  </main>
  <Footer />
</template>
