<template>
  <div class="category-view">
    <h1>{{ category }}</h1>
    <div class="games-grid">
      <GameCard 
        v-for="game in categoryGames" 
        :key="game.id" 
        :game="game" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGamesStore } from '../stores/games'
import GameCard from '../components/GameCard.vue'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

const store = useGamesStore()
const categoryGames = computed(() => {
  const categoryKey = props.category.toLowerCase()
  return store.categories[categoryKey]?.games || []
})
</script>

<style scoped>
.category-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
}
</style>
