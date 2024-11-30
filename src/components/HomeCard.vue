<script setup>
import { useGamesStore } from '../stores/games'
import GameCard from '../components/GameCard.vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const store = useGamesStore()
</script>

<template>
  <div class="min-vh-100 bg-light">
    <Header />

    <div class="container py-5">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-3 mb-4">
          <Sidebar class="w-100" />
        </div>

        <!-- Game Cards -->
        <div class="col-md-9">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
            <GameCard
              v-for="game in store.getAllGames"
              :key="game.id"
              :game="game"
              class="col"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
