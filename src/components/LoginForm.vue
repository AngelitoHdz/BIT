<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';  // Importa useRouter para hacer redirección
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Ranking from '../components/Ranking.vue';
import Categories from '../components/Categories.vue';

const authStore = useAuthStore();
const router = useRouter();  // Crea una instancia de router
const email = ref('');
const password = ref('');

const emit = defineEmits(['close', 'showRegister']);

const handleSubmit = () => {
  authStore.login(email.value, password.value);
  emit('close');
};

// Función para cerrar el modal y redirigir al home
const handleClose = () => {
  emit('close');  // Cerrar el modal
  router.push('/');  // Redirigir a la página principal (home)
};

// Función para mostrar el modal de registro
const handleShowRegister = () => {
  router.push('/register');  // Redirigir a la página de registro
};
</script>

<template>
  <Header />
  <Ranking />
  <Categories />
  <div class="modal d-flex align-items-center justify-content-center">
    <div class="modal-dialog">
      <div class="modal-content p-4">
        <!-- Botón de cierre -->
        <button 
          type="button" 
          class="btn-close position-absolute top-0 end-0 mt-2 me-2" 
          @click="handleClose"> <!-- Usar handleClose aquí -->
        </button>

        <!-- Título -->
        <div class="text-center mb-4">
          <h1 class="h4 fw-bold text-primary">Iniciar Sesión</h1>
          <p class="text-muted">Ingresa tus credenciales para continuar</p>
        </div>

        <!-- Formulario -->
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input 
              v-model="email"
              type="email" 
              id="email" 
              class="form-control" 
              placeholder="Correo Electrónico" 
              required 
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input 
              v-model="password"
              type="password" 
              id="password" 
              class="form-control" 
              placeholder="Contraseña" 
              required 
            />
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>

        <!-- Enlace de registro -->
        <div class="mt-3 text-center">
          <span class="text-muted">¿No tienes cuenta?</span>
          <button 
            type="button" 
            class="btn btn-link text-primary text-decoration-none p-0 ms-1" 
            @click="handleShowRegister"> <!-- Redirige al registro -->
            Registrarse
          </button>
        </div>

        <!-- Inicio con proveedores -->
        <div class="mt-4">
          <p class="text-center text-muted mb-2">O inicia sesión con</p>
          <div class="d-flex justify-content-center gap-3">
            <button 
              @click="authStore.loginWithProvider('google')" 
              class="btn btn-light border rounded-circle">
              <img src="https://www.google.com/favicon.ico" alt="Google" class="w-25 h-25" />
            </button>
            <button 
              @click="authStore.loginWithProvider('outlook')" 
              class="btn btn-light border rounded-circle">
              <img src="https://www.microsoft.com/favicon.ico" alt="Outlook" class="w-25 h-25" />
            </button>
            <button 
              @click="authStore.loginWithProvider('facebook')" 
              class="btn btn-light border rounded-circle">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" class="w-25 h-25" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Modal background */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
}

/* Button styles */
.btn-primary {
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  border: none;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-link:hover {
  text-decoration: underline;
}
</style>
