<script setup>
import { useGamesStore } from '../stores/games'

const store = useGamesStore()
</script>

<template>
  <div class="card shadow-sm p-3">
    <!-- Search Input -->
    <input
      type="text"
      placeholder="Buscar juegos..."
      class="form-control mb-3"
    />

    <!-- Categories -->
    <div class="list-group">
      <button
        v-for="category in store.getAllCategories"
        :key="category"
        class="list-group-item list-group-item-action"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>
