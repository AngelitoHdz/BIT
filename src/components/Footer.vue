<template>
  <footer class="footer-section">
    <div class="footer-socials">
      <span class="footer-title">REDES SOCIALES</span>
      <div class="social-icons">
        <img src="../assets/facebook.png" alt="Facebook" class="social-icon" />
        <img src="../assets/whatsapp.png" alt="WhatsApp" class="social-icon" />
        <img src="../assets/instagram.png" alt="Instagram" class="social-icon" />
      </div>
    </div>
    <div class="footer-bottom">
      <img src="../assets/logo.png" alt="Logo" class="footer-logo" />
      <span class="footer-text">
        © 2024 PLAYZONE. Todos los derechos reservados.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer-section {
  background-color: #d9534f; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0;
  font-family: Arial, sans-serif;
}

.footer-socials {
  text-align: center;
  margin-bottom: 20px;
}

.footer-title {
  font-size: 16px;
  font-weight: bold;
  color: #87cefa; 
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  gap: 15px; 
  justify-content: center;
}

.social-icon {
  width: 40px; 
  height: 40px;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.social-icon:hover {
  transform: scale(1.2); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
}

.footer-bottom {
  background-color: #ffd700; 
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.footer-logo {
  width: 50px;
  height: 50px;
}

.footer-text {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: black;
}
</style>