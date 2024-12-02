<template>
  <div>
    <Header />
    <div class="shopping-cart bg-gradient-to-r from-pink-100 to-purple-200 p-4 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold mb-4 flex items-center text-purple-700">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"  
          width="30" 
          height="30" 
          alt="Cart Icon" 
          class="mr-2" 
        />
        Carrito De Compra
      </h2>
      <div class="cart-items grid gap-4">
        <div
          v-for="(item, index) in cartItems"
          :key="item.name"
          class="cart-item flex justify-between items-center bg-white p-4 rounded shadow hover:shadow-lg transition-shadow"
        >
          <div class="item-info flex items-center">
            <img 
              :src="item.image" 
              :alt="item.name" 
              class="w-16 h-16 mr-4 rounded-lg" 
            />
            <span class="text-lg font-semibold">{{ item.name }}</span>
          </div>
          <div class="item-controls flex items-center">
            <span class="mr-4 text-purple-700 font-semibold">
              {{ formatCurrency(item.price) }}
            </span>
            <div class="flex items-center">
              <button
                @click="decrementQuantity(index)"
                class="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 focus:ring-2 focus:ring-purple-500"
              >
                -
              </button>
              <span class="px-4">{{ item.quantity }}</span>
              <button
                @click="incrementQuantity(index)"
                class="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 focus:ring-2 focus:ring-purple-500"
              >
                +
              </button>
            </div>
            <button
              @click="removeItem(index)"
              class="ml-4 px-3 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-red-400 hover:to-red-600 focus:ring-2 focus:ring-red-300"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <div class="order-summary mt-6 p-4 bg-white rounded shadow-lg">
        <h3 class="text-xl font-bold mb-2 text-purple-700">Pedido</h3>
        <p class="text-gray-600">
          Precio aproximado:
          <span class="font-bold text-red-500">{{ formatCurrency(totalPrice) }}</span>
        </p>
        <button
          class="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded w-full mt-4 shadow-lg hover:shadow-xl hover:from-purple-400 hover:to-purple-600 focus:ring-2 focus:ring-purple-300"
          @click="checkout"
        >
          Pagar con tarjeta
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

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
    quantity: 2, 
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
    quantity: 3,
  },
  {
    name: "Uno",
    image: "https://m.media-amazon.com/images/I/81rNMQVqzEL._AC_SL1500_.jpg",
    price: 100,
    quantity: 1,
  },
]);

const incrementQuantity = (index: number) => {
  if (cartItems.value[index].quantity < 20) {
    cartItems.value[index].quantity++;
    console.log(cartItems.value);
  } else {
    alert("No puedes comprar más de 20 productos de este tipo.");
  }
};


const removeItem = (index: number) => {
  const removedItem = cartItems.value.splice(index, 1);
  console.log(cartItems.value);
  alert(`Producto "${removedItem[0].name}" eliminado correctamente.`);
};

const decrementQuantity = (index: number) => {
 
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
    console.log(cartItems.value); 
  } else {
    alert("La cantidad no puede ser menor que 1.");
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
  border-radius: 8px;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:focus {
  outline: 2px solid transparent;
}
</style>
