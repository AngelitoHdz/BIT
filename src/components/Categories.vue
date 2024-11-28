<template>
  <section class="categories-section">
    <div class="categories-container">
      <div v-for="category in categories" :key="category.id" class="category-card" :style="{ backgroundColor: category.color }">
        <span class="category-title">{{ category.name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "JUEGOS DE CARTAS",
          color: "#90ee90", 
        },
        {
          id: 2,
          name: "JUEGOS DE PARTY",
          color: "#FFD580", 
        },
        {
          id: 3,
          name: "JUEGOS DE FAMILIA",
          color: "#87CEFA", 
        },
        {
          id: 4,
          name: "JUEGOS DE ESTRATEGIA",
          color: "#FFFF99", 
        },
      ],
    };
  },
};
</script>

<style scoped>

.categories-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5e7e7; 
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px; 
  width: 60%; 
}

.category-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  font-size: 16px; 
  font-weight: bold;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease; 
}

.category-card:hover {
  transform: scale(1.05); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.category-title {
  color: black; 
}
</style>
