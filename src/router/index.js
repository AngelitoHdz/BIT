import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Categories from '../components/Categories.vue';
import Login from '../components/LoginForm.vue';
import Register from '../components/RegisterForm.vue';
import GameCard from '../components/HomeCard.vue';
import Carrito from '../components/Carrito.vue';
import HomeC from '../views/HomeC.vue'; // Corregido nombre del componente
import CategoryPage from '../views/CategoryPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/game',
    name: 'Game',
    component: GameCard,
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito,
  },
  {
    path: '/homec',
    name: 'HomeC',
    component: HomeC, // Corregido nombre de la ruta
  },
  {
    path: '/category/:name',
    name: 'Category',
    component: CategoryPage,
    props: true, // Habilitado paso de props a la ruta
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
