<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string
  bgColor: string
  games: Array<{
    id: number
    name: string
    price: number
    image: string
  }>
}>()

const router = useRouter()
const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return
  const scrollAmount = 300
  scrollContainer.value.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount
}

const goToCategory = () => {
  router.push(`/category/${props.title}`)
}
</script>

<template>
  <!-- Corrected dynamic background color binding -->
  <div :style="{ backgroundColor: props.bgColor }" class="p-4 rounded-lg mb-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="h5 text-dark">{{ title }}</h2>
      <button 
        @click="goToCategory"
        class="btn btn-link text-danger fw-bold"
      >
        Ver todos
      </button>
    </div>
    <div class="position-relative">
      <div
        ref="scrollContainer"
        class="d-flex gap-4 overflow-auto pb-2 hide-scrollbar"
      >
        <div
          v-for="game in games"
          :key="game.id"
          class="flex-shrink-0" 
          style="width: 11rem;"
        >
          <div class="card shadow-sm border-0">
            <img :src="game.image" :alt="game.name" class="card-img-top h-36 object-contain rounded mb-2">
            <div class="card-body text-center">
              <h5 class="card-title text-dark">{{ game.name }}</h5>
              <p class="card-text text-dark fw-bold">${{ game.price.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Scroll buttons positioned correctly -->
      <button
        @click="scroll('left')"
        class="position-absolute top-50 start-0 translate-middle-y bg-white rounded-circle p-2 shadow-sm"
      >
        <ChevronLeftIcon class="h-5 w-5 text-dark" />
      </button>
      <button
        @click="scroll('right')"
        class="position-absolute top-50 end-0 translate-middle-y bg-white rounded-circle p-2 shadow-sm"
      >
        <ChevronRightIcon class="h-5 w-5 text-dark" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>
