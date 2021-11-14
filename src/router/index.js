import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductsPage from '@/pages/ProductsPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Products',
    meta: {
      title: 'Продукты',
    },
    component: ProductsPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      title: 'Корзина',
    },
    component: () => import(/* webpackChunkName: "cart" */ '@/pages/CartPage.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    meta: {
      title: 'Избранное',
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/pages/FavoritesPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
