import { defineStore } from 'pinia';

export const useGamesStore = defineStore('games', {
  state: () => ({
    games: [
      // JUEGOS DE ESTRATEGIA
      {
        id: 1,
        name: 'Ajedrez',
        price: 1135,
        image: '/games/ajedrez.jpg',
        category: 'JUEGOS DE ESTRATEGIA',
      },
      {
        id: 2,
        name: 'Damas',
        price: 1219,
        image: '/games/damas.jpg',
        category: 'JUEGOS DE ESTRATEGIA',
      },
      {
        id: 3,
        name: 'Monopoly',
        price: 1658,
        image: '/games/monopoly.jpg',
        category: 'JUEGOS DE ESTRATEGIA',
      },
      {
        id: 4,
        name: 'Jumanji',
        price: 1079,
        image: '/games/jumanji.jpg',
        category: 'JUEGOS DE ESTRATEGIA',
      },
      {
        id: 5,
        name: '4 en Línea',
        price: 1318,
        image: '/games/4-en-linea.jpg',
        category: 'JUEGOS DE ESTRATEGIA',
      },
      // JUEGOS DE CARTAS
      {
        id: 6,
        name: 'Hedbanz',
        price: 998,
        image: '/games/hedbanz.jpg',
        category: 'JUEGOS DE CARTAS',
      },
      {
        id: 7,
        name: 'Uno flip',
        price: 1120,
        image: '/games/uno-flip.jpg',
        category: 'JUEGOS DE CARTAS',
      },
      {
        id: 8,
        name: 'Cartas Royal',
        price: 1346,
        image: '/games/cartas-royal.jpg',
        category: 'JUEGOS DE CARTAS',
      },
      {
        id: 9,
        name: 'Baraja Española',
        price: 185,
        image: '/games/baraja-espanola.jpg',
        category: 'JUEGOS DE CARTAS',
      },
      {
        id: 10,
        name: 'Virus',
        price: 638,
        image: '/games/virus.jpg',
        category: 'JUEGOS DE CARTAS',
      },
      // JUEGOS DE PARTY
      {
        id: 11,
        name: 'Party 6',
        price: 1198,
        image: '/games/party6.jpg',
        category: 'JUEGOS DE PARTY',
      },
      {
        id: 12,
        name: '100 Mexicanos dijeron',
        price: 1129,
        image: '/games/100-mexicanos.jpg',
        category: 'JUEGOS DE PARTY',
      },
      {
        id: 13,
        name: 'Uno Party',
        price: 1028,
        image: '/games/uno-party.jpg',
        category: 'JUEGOS DE PARTY',
      },
      {
        id: 14,
        name: 'Torre del beber',
        price: 1185,
        image: '/games/torre-beber.jpg',
        category: 'JUEGOS DE PARTY',
      },
      {
        id: 15,
        name: 'Me caigo de risa',
        price: 1624,
        image: '/games/me-caigo-risa.jpg',
        category: 'JUEGOS DE PARTY',
      },
      // JUEGOS DE FAMILIA
      {
        id: 16,
        name: 'Quien es quien?',
        price: 1998,
        image: '/games/quien-es-quien.jpg',
        category: 'JUEGOS DE FAMILIA',
      },
      {
        id: 17,
        name: 'Basta',
        price: 1159,
        image: '/games/basta.jpg',
        category: 'JUEGOS DE FAMILIA',
      },
      {
        id: 18,
        name: 'Preguntados',
        price: 1276,
        image: '/games/preguntados.jpg',
        category: 'JUEGOS DE FAMILIA',
      },
      {
        id: 19,
        name: 'Gestos',
        price: 1015,
        image: '/games/gestos.jpg',
        category: 'JUEGOS DE FAMILIA',
      },
      {
        id: 20,
        name: 'Jenga',
        price: 994,
        image: '/games/jenga.jpg',
        category: 'JUEGOS DE FAMILIA',
      },
    ],
    categories: [
      {
        name: 'JUEGOS DE ESTRATEGIA',
        bgColor: 'bg-[#FFF9E5]',
      },
      {
        name: 'JUEGOS DE CARTAS',
        bgColor: 'bg-[#E8F5E9]',
      },
      {
        name: 'JUEGOS DE PARTY',
        bgColor: 'bg-[#FFE0B2]',
      },
      {
        name: 'JUEGOS DE FAMILIA',
        bgColor: 'bg-[#E3F2FD]',
      },
    ],
  }),
  getters: {
    gamesByCategory: (state) => {
      return (categoryName) => state.games.filter((game) => game.category === categoryName);
    },
    getCategoryStyle: (state) => {
      return (categoryName) =>
        state.categories.find((cat) => cat.name === categoryName)?.bgColor || 'bg-gray-100';
    },
  },
});
