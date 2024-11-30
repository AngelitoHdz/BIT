<template>
  <Header />
  <div class="shopping-cart bg-pink-100 p-4 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"  width = "30" height = "30" alt="Cart Icon" class="mr-2" />
      Carrito De Compra
    </h2>
    <div class="cart-items grid gap-4">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="cart-item flex justify-between items-center bg-white p-4 rounded shadow"
      >
        <div class="item-info flex items-center">
          <img :src="item.image" alt="Product Image" class="w-16 h-16 mr-4" />
          <span>{{ item.name }}</span>
        </div>
        <div class="item-controls flex items-center">
          <span class="mr-4">{{ formatCurrency(item.price) }}</span>
          <div class="flex items-center">
            <button
              @click="decrementQuantity(index)"
              class="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
            >
              -
            </button>
            <span class="px-4">{{ item.quantity }}</span>
            <button
              @click="incrementQuantity(index)"
              class="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="order-summary mt-6 p-4 bg-white rounded shadow">
      <h3 class="font-bold mb-2">Pedido</h3>
      <p>
        Precio aproximado:
        <span class="font-bold text-red-500">{{ formatCurrency(totalPrice) }}</span>
      </p>
      <button
        class="bg-black text-white py-2 px-4 rounded w-full mt-4"
        @click="checkout"
      >
        Pagar con tarjeta
      </button>
    </div>
  </div>
  <Footer />
</template> agregar imagenes a los juegos
<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref, computed } from "vue";


const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
};

const cartItems = ref([
  {
    name: "Damas",
    image: "https://m.media-amazon.com/images/I/71ng+RJoA4L._AC_SL1500_.jpg", 
    price: 200,
    quantity: 1,
  },
  {
    name: "Ajedrez",
    image: "https://m.media-amazon.com/images/I/71vJnptdWuL._AC_SL1500_.jpg", 
    price: 300,
    quantity: 1,
  },
  {
    name: "Monopoly",
    image: "https://m.media-amazon.com/images/I/91s5Xbx5vTL._AC_SL1500_.jpg", 
    price: 400,
    quantity: 1,
  },
  {
    name: "Uno",
    image: "https://m.media-amazon.com/images/I/81rNMQVqzEL._AC_SL1500_.jpg", 
    price: 100,
    quantity: 1,
  },
]);


const incrementQuantity = (index: number) => {
  cartItems.value[index].quantity++;
};


const decrementQuantity = (index: number) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
  }
};


const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);


const checkout = () => {
  alert("¡Redirigiendo al pago!");
};
</script>
<style scoped>
.shopping-cart {
  max-width: 600px;
  margin: auto;
}

.cart-item img {
  border-radius: 4px;
}

.cart-item span {
  font-size: 16px;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
}

button:focus {
  outline: 2px solid #000;
}
</style>
