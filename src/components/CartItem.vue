<template>
  <article class="CartItem" v-if="product">
    <figure class="CartItem_cover">
      <img class="CartItem_image" :src="product.image" alt />
    </figure>
    <div class="CartItem_body">
      <h3 class="CartItem_name">{{ product.name }}</h3>
      <div class="CartItem_price">
        <div class="CartItem_amount">{{ amount }} x</div>
        <div class="CartItem_totalPrice">{{ (amount * product.price) | number }} ₽</div>
      </div>
    </div>
    <div class="CartItem_button">
      <Counter :value="amount" @add="addToCart" @remove="removeOneFromCart" />
    </div>
    <div class="CartItem_button">
      <Button :color="'second'" @click="removeFromCart">Удалить</Button>
    </div>
  </article>
</template>

<script>
import Button from '@/components/Button.vue';
import Counter from '@/components/Counter.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'CartItem',
  components: { Counter, Button },
  props: {
    id: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['productsMap']),
    product() {
      return this.productsMap[this.id];
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', { productId: this.id });
    },
    removeOneFromCart() {
      this.$emit('removeFromCart', { productId: this.id });
    },
    removeFromCart() {
      this.$emit('removeFromCart', { productId: this.id, amount: this.amount });
    },
  },
};
</script>

<style lang="scss">
.CartItem {
  display: flex;
  align-items: center;
  padding-right: 10px;

  &_cover {
    flex-shrink: 0;
    width: 80px;
    margin: 0;
    aspect-ratio: 1/1;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  &_image {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &_body {
    display: flex;
    align-items: baseline;
    margin-left: 20px;
    flex-grow: 1;
  }

  &_name {
    flex-grow: 1;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
  }

  &_price {
    display: flex;
    align-items: baseline;
    margin-left: 20px;
  }

  &_amount {
  }

  &_totalPrice {
    margin-left: 6px;
    font-size: 21px;
  }

  &_button {
    margin-left: 24px;

    & + & {
      margin-left: 16px;
    }
  }
}
</style>
