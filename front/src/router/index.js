import { createRouter, createWebHistory } from 'vue-router';
import BlogPage from '../components/BlogPage.vue';
import ShopPage from '../components/ShopPage.vue';

const routes = [
  { path: '/shop', component: ShopPage },
  { path: '/blog', component: BlogPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
