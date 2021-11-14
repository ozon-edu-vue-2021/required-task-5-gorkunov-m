<template>
  <div class="Cart">
    <div class="Cart_body">
      <ul class="Cart_list" v-if="cart.length">
        <li class="Cart_item" v-for="item in cart" :key="item.productId">
          <CartItem
            :id="item.productId"
            :amount="item.amount"
            @addToCart="addToCart"
            @removeFromCart="removeFromCart"
          />
        </li>
      </ul>
      <p class="Cart_empty" v-else>Ничего нет</p>
    </div>
    <div v-if="!cartEmpty" class="Cart_aside">
      <div class="Cart_caption">Общая стоимость:</div>
      <div class="Cart_total">{{ totalPrice | number }} ₽</div>
      <div class="Cart_button">
        <Button :size="'l'" @click="createOrder">Оформить заказ</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import CartItem from '@/components/CartItem.vue';

import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Cart',
  components: { Button, CartItem },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice', 'cartEmpty']),
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart', 'createOrder']),
  },
};
</script>

<style lang="scss">
.Cart {
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  gap: 16px;

  &_body {
    flex: 1 1 480px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  &_list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &_item {
    & + & {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #ccc;
    }
  }

  &_empty {
    margin: 0;
    padding: 30px 0;
    color: #666;
    font-size: 14px;
    text-align: center;
  }

  &_aside {
    width: 280px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  &_label {
  }

  &_total {
    margin-top: 5px;
    font-size: 21px;
    font-weight: 700;
  }

  &_button {
    margin-top: 20px;
  }
}
</style>
