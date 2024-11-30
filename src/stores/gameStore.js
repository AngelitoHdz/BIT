import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    ranking: [],
    categories: [
      "JUEGOS DE CARTAS",
      "JUEGOS DE PARTY",
      "JUEGOS DE FAMILIA",
      "JUEGOS DE ESTRATEGIA",
    ],
  }),
});
