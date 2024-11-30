<script setup>
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card shadow-sm">
    <!-- Image -->
    <div class="overflow-hidden">
      <img
        :src="game.image"
        :alt="game.name"
        class="card-img-top img-fluid transition-transform"
        style="height: 200px; object-fit: cover;"
      />
    </div>

    <!-- Content -->
    <div class="card-body">
      <h5 class="card-title text-truncate">{{ game.name }}</h5>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <span class="fw-bold fs-5">${{ game.price }}</span>
        <button class="btn btn-danger btn-sm">
          Comprar
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.card:hover img {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}
</style>
