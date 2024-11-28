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
  padding: 20px;
}

.ranking-container {
  background-color: black; 
  border: 3px solid black; 
  border-radius: 8px; 
  padding: 10px;
  display: flex;
  justify-content: space-around; 
  align-items: flex-start;
  gap: 10px;
  width: 90%; 
}

.ranking-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%; 
}

.ranking-card:nth-child(1) {
  flex: 1; 
}

.ranking-card:nth-child(2),
.ranking-card:nth-child(3) {
  flex: 1; 
}

.ranking-image {
  width: 100%; 
  height: auto; 
  object-fit: contain; 
  border: 2px solid black; 
  border-radius: 5px; 
}

.ranking-label {
  margin-top: 5px;
  padding: 10px 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 4px; 
  width: 100%; 
}
</style>
