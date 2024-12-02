<template>
  <section class="ranking-section">
    <div class="ranking-container">
      <div 
        v-for="item in ranking" 
        :key="item.id" 
        class="ranking-card"
      >
        <img :src="item.image" :alt="item.name" class="ranking-image" />
        <div class="ranking-label" :style="{ backgroundColor: item.color }">
          {{ item.place }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import unoParty from "../assets/uno-party.jpg";
import monopoly from "../assets/monopoly.jpg";
import mexicanos from "../assets/mexicanos.jpg";

export default {
  name: "Ranking",
  data() {
    return {
      ranking: [
        {
          id: 1,
          name: "UNO Party",
          place: "1° LUGAR",
          image: unoParty,
          color: "#FFD700", 
        },
        {
          id: 2,
          name: "Monopoly",
          place: "2° LUGAR",
          image: monopoly,
          color: "#D3D3D3", 
        },
        {
          id: 3,
          name: "100 Mexicanos Dijeron",
          place: "3° LUGAR",
          image: mexicanos,
          color: "#A0522D", 
        },
      ],
    };
  },
};
</script>

<style scoped>
.ranking-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0; 
  background-image: url('../assets/background.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 100%; 
}

.ranking-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px; 
  width: 70%; 
  max-width: 1400px; 
  background-color: rgba(0, 0, 0, 0.75); 
  padding: 40px; 
  border-radius: 30px; 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
}

.ranking-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 500px;
}

.ranking-image {
  width: 100%;
  height: 250px; 
  object-fit: cover; 
  border-radius: 8px; 
}

.ranking-label {
  margin-top: 15px;
  padding: 12px 8px;
  font-size: 18px; 
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 6px;
  width: 100%;
}
</style>
