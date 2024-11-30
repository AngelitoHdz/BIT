<script setup lang="ts">
import { useGamesStore } from '../stores/gamesc'
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const store = useGamesStore()
const games = computed(() => store.gamesByCategory(props.name))
const categoryStyle = computed(() => store.getCategoryStyle(props.name))
</script>

<template>
  <main class="container py-5">
    <div :class="[categoryStyle, 'p-4 rounded']">
      <h1 class="h4 mb-4 text-dark fw-bold">{{ name }}</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        <div
          v-for="game in games"
          :key="game.id"
          class="col"
        >
          <div class="card h-100 shadow-sm">
            <img 
              :src="game.image" 
              :alt="game.name" 
              class="card-img-top img-fluid p-2"
              style="height: 200px; object-fit: contain;"
            />
            <div class="card-body text-center">
              <h5 class="card-title text-dark fw-bold">{{ game.name }}</h5>
              <p class="card-text text-dark fw-bold mt-2">
                ${{ game.price.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
