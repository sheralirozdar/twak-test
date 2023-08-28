


import { createRouter, createWebHistory } from 'vue-router'; 

import HomeView from './components/HomeView.vue';
import CategoryView from './components/CategoryView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/category/:categoryId', name: 'category', component: CategoryView }
   


  ]
});

export default router;
