<template>
  <div class="Products">
    <p class="Products_preloader" v-if="isLoading">Загрузка...</p>
    <template v-else>
      <ul class="Products_list" v-if="products.length">
        <li class="Products_item" v-for="product in products" :key="product.uid">
          <Product
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :image="product.image"
            :favorite="product.favorite"
            @addToCart="addToCart"
            @removeFromCart="removeFromCart"
            @addToFavorites="addToFavorites"
            @removeFromFavorites="removeFromFavorites"
          />
        </li>
      </ul>
      <p class="Products_empty" v-else>Ничего нет</p>
    </template>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';

import { mapActions } from 'vuex';

export default {
  name: 'Products',
  components: { Product },
  props: {
    products: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart', 'addToFavorites', 'removeFromFavorites']),
  },
};
</script>

<style lang="scss">
.Products {
  &_preloader {
  }

  &_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &_item {
  }

  &_empty {
    padding: 20px 0;
    color: #666;
    font-size: 14px;
  }
}
</style>
