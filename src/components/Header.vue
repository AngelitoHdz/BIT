<template>
  <header class="header">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" @click="goToHome"/>
      <span class="site-name" @click="goToHome">PLAYZONE</span>
    </div>
    <nav class="nav">
      <router-link to="/categories" class="nav-link">Ver Categorías</router-link>
      <div class="divider"></div>
      <div class="auth-buttons">
        <button
          class="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded text-sm"
          @click="goToLogin"
        >
          INICIAR SESIÓN
        </button>
        <button
          class="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded text-sm"
          @click="goToRegister"
        >
          REGISTRARSE
        </button>
      </div>
      <div class="icons">
       

          <img src="../assets/Tienda.png" alt="Buscar" class="icon" @click="goTOcard"/>
       
        
        <img src="../assets/Carrito.png" alt="Carrito" class="icon" @click="goTocarrito" />
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

// Inicialización del store y router dentro del contexto
const authStore = useAuthStore();
const router = useRouter();

// Funciones para navegación
const goToLogin = () => {
  router.push('/login');
};

const goToRegister = () => {
  router.push('/register');
};
const goTOcard = () => {
  router.push('Game');

}
const goToHome= () => {
  router.push('/');

}
const goTocarrito= () => {
  router.push('/carrito');
}
const goTocate= () => {
  router.push('/homec');
}

</script>

<style scoped>
/* Add styles here if needed */
</style>
