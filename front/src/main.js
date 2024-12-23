import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Подключение маршрутизатора

const app = createApp(App);
app.use(router); // Использование маршрутизатора
app.mount('#app');
