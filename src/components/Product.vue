<template>
  <article class="Product">
    <figure class="Product_cover">
      <img class="Product_image" :src="image" loading="lazy" alt />
    </figure>
    <h3 class="Product_name">{{ name }}</h3>
    <div class="Product_price">{{ price | number }} ₽</div>
    <div class="Product_button">
      <Counter v-if="inCart" :value="cartItem.amount" @add="addToCart" @remove="removeFromCart" />
      <Button v-else @click="addToCart">В корзину</Button>
    </div>
    <div class="Product_favorite">
      <FavButton :active="favorite" @click="setFavorite" />
    </div>
  </article>
</template>

<script>
import Button from '@/components/Button.vue';
import Counter from '@/components/Counter.vue';
import FavButton from '@/components/FavButton.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'Product',
  components: { Button, Counter, FavButton },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(['cartMap']),
    cartItem() {
      return this.cartMap[this.id] || null;
    },
    inCart() {
      return Boolean(this.cartItem);
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', {
        productId: this.id,
      });
    },
    removeFromCart() {
      this.$emit('removeFromCart', {
        productId: this.id,
      });
    },
    setFavorite() {
      const event = this.favorite ? 'removeFromFavorites' : 'addToFavorites';

      this.$emit(event, {
        productId: this.id,
      });
    },
  },
};
</script>

<style lang="scss">
.Product {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  position: relative;
  z-index: 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;

  &_cover {
    width: 100%;
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

  &_name {
    margin: 0;
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
  }

  &_price {
    flex-grow: 1;
    margin-top: 5px;
    font-weight: 700;
    font-size: 21px;
  }

  &_button {
    margin-top: 15px;
  }

  &_favorite {
    position: absolute;
    top: 18px;
    right: 18px;
  }
}
</style>
