<template>
  <DefaultLayout>
    <Products :products="products" :isLoading="isLoading" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Products from '@/components/Products.vue';

import { mapState } from 'vuex';

export default {
  name: 'ProductsPage',
  components: {
    DefaultLayout,
    Products,
  },
  computed: {
    ...mapState(['products', 'isLoading']),
  },
};
</script>
