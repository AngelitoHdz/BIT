import { createApp } from "vue";
import { createPinia } from "pinia";
import router from './router';
import App from "./App.vue";
import './assets/tailwind.css';
import "../style.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';



const app = createApp(App);
const pinia = createPinia()
app.use(pinia);
app.use(router);
app.mount("#app");