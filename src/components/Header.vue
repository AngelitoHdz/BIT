<template>
  <header class="header">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <span class="site-name">PLAYZONE</span>
    </div>
    <nav class="nav">
      <a href="#" class="nav-link">Ver Categorías</a>
      <div class="divider"></div>
      <div class="auth-buttons">
        <button class="auth-button">INICIAR SESIÓN</button>
        <button class="auth-button">REGISTRARSE</button>
      </div>
      <div class="icons">
        <img src="../assets/Tienda.png" alt="Buscar" class="icon" />
        <img src="../assets/Carrito.png" alt="Carrito" class="icon" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
