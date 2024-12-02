<template>
  <section class="categories-section">
    <div class="categories-container">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        :style="{ backgroundColor: category.color }"
      >
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
        { id: 1, name: "JUEGOS DE CARTAS", color: "#90ee90" },
        { id: 2, name: "JUEGOS DE PARTY", color: "#FFD580" },
        { id: 3, name: "JUEGOS DE FAMILIA", color: "#87CEFA" },
        { id: 4, name: "JUEGOS DE ESTRATEGIA", color: "#FFFF99" },
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
  padding: 50px 0;
  background: linear-gradient(135deg, #f5e7e7, #e3f2fd);
}

.categories-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 0px;
  width: 80%;
  perspective: 1500px; 
}

.category-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: black;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease;
  animation: float 3s infinite ease-in-out, pulse 2s infinite ease-in-out; /* Animación flotante y pulsación */
  position: relative;
  z-index: 1;
}

@keyframes float {
  0% {
    transform: translateY(0) translateZ(0) scale(1);
  }
  50% {
    transform: translateY(-10px) translateZ(10px) scale(1.02); /* Ligero escalado */
  }
  100% {
    transform: translateY(0) translateZ(0) scale(1);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4); 
  }
  100% {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
}

.category-card:hover {
  transform: translateZ(50px) translateY(-10px); 
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5); 
  animation: bounce 0.5s; 
}

@keyframes bounce {
  0%, 100% {
    transform: translateZ(50px) translateY(-10px);
  }
  50% {
    transform: translateZ(50px) translateY(0px); 
  }
}

.category-card:hover .category-title {
  transform: translateZ(80px); 
  transition: transform 0.3s ease, color 0.3s ease;
  color: #16aba3; 
}

.category-title {
  transform: translateZ(20px); 
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  transition: transform 0.5s ease, color 0.5s ease;
}
</style>
