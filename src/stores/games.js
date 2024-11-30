import { defineStore } from 'pinia'

export const useGamesStore = defineStore('games', {
  state: () => ({
    games: [
      { id: 1, name: 'Ajedrez', price: 29.99, image: 'https://m.media-amazon.com/images/I/61LA5e7uHtL._AC_UL320_.jpg' },
      { id: 2, name: 'Damas', price: 19.99, image: 'https://m.media-amazon.com/images/I/61RQnxpsOVL._AC_UL320_.jpg' },
      { id: 3, name: 'Monopoly', price: 39.99, image: 'https://m.media-amazon.com/images/I/81T7hKpWNNL.__AC_SX300_SY300_QL70_ML2_.jpg' },
      { id: 4, name: 'Scrabble', price: 34.99, image: 'https://m.media-amazon.com/images/I/811cnzGFDDL._AC_UL320_.jpg' },
      { id: 5, name: 'Connect 4', price: 24.99, image: 'https://m.media-amazon.com/images/I/819ZLc1npzL._AC_UL320_.jpg' },
      { id: 6, name: 'Hedbanz', price: 22.99, image: 'https://m.media-amazon.com/images/I/81ogvpoYu2L._AC_UL320_.jpg' },
      { id: 7, name: 'UNO', price: 14.99, image: 'https://m.media-amazon.com/images/I/8121iJtKLRL._AC_UL320_.jpg' },
      { id: 8, name: 'Phase 10', price: 19.99, image: 'https://m.media-amazon.com/images/I/71ISPZrjeSL._AC_UL320_.jpg' }
    ],
    categories: [
      'JUEGOS DE CARTAS',
      'JUEGOS DE ESTRATEGIA',
      'JUEGOS DE PARTY',
      'JUEGOS DE FAMILIA'
    ]
  }),
  getters: {
    getAllGames: (state) => state.games,
    getAllCategories: (state) => state.categories
  }
})