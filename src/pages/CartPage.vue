<template>
  <DefaultLayout>
    <Cart />
  </DefaultLayout>
</template>

<script>
import Cart from '@/components/Cart.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'CartPage',
  components: {
    Cart,
    DefaultLayout,
  },
};
</script>
