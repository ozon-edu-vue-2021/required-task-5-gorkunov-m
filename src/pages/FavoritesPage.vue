<template>
  <DefaultLayout>
    <Products :products="favoritesProducts" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Products from '@/components/Products.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'FavoritesPage',
  components: {
    DefaultLayout,
    Products,
  },
  computed: {
    ...mapGetters(['favoritesProducts']),
  },
};
</script>
