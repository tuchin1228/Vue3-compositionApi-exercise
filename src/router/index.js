import { createWebHashHistory, createRouter } from 'vue-router';
import Product from '@/components/ProductComponent.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Product2 from '@/components/Product2Component.vue';

const history = createWebHashHistory();
const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/product',
    component: Product,
  },
  {
    path: '/product/:id',
    component: Product2,
  },
];
const router = createRouter({
  history,
  routes,
});
export default router;
