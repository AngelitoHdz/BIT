import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const email = ref('');
  const isAuthenticated = ref(false);

  // Métodos
  function login(userEmail, password) {
    email.value = userEmail;
    isAuthenticated.value = true;
  }

  function register(userEmail, password) {
    email.value = userEmail;
    isAuthenticated.value = true;
  }

  function loginWithProvider(provider) {
    email.value = `${provider}_user@example.com`; // Usuario ficticio
    isAuthenticated.value = true;
  }

  function registerWithProvider(provider) {
    email.value = `${provider}_user@example.com`; // Usuario ficticio
    isAuthenticated.value = true;
  }

  // Retorno
  return {
    email,
    isAuthenticated,
    login,
    register,
    loginWithProvider,
    registerWithProvider,
  };
});
