import Vue from 'vue';
import Vuex from 'vuex';

import { transformProducts } from '@/utils/transformProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [], // Array<{ productId: number; amount: number }>;
    isLoading: false,
  },
  getters: {
    favoritesProducts(state) {
      return state.products.filter((product) => product.favorite);
    },
    productsMap(state) {
      return state.products.reduce((productsMap, product) => {
        return { ...productsMap, [product.id]: product };
      }, {});
    },
    cartMap(state) {
      return state.cart.reduce((cartMap, cartItem) => {
        return { ...cartMap, [cartItem.productId]: cartItem };
      }, {});
    },
    cartProductsCount(state) {
      return state.cart.length;
    },
    cartEmpty(state) {
      return state.cart.length === 0;
    },
    totalPrice(state, getters) {
      return state.cart.reduce((total, item) => {
        return total + item.amount * getters.productsMap[item.productId].price;
      }, 0);
    },
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    updateProducts(state, products) {
      state.products = products;
    },
    updateCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        commit('setLoading', true);

        const response = await fetch('https://random-data-api.com/api/food/random_food?size=30');
        const products = await response.json();

        commit('updateProducts', transformProducts(products));
      } catch (error) {
        console.error(error);
      } finally {
        commit('setLoading', false);
      }
    },
    addToCart({ state, commit }, { productId, amount = 1 }) {
      const { cart = [], productAlreadyAdded = false } = state.cart.reduce(
        ({ cart, productAlreadyAdded }, cartItem) => {
          if (cartItem.productId === productId) {
            const updatedCartItem = {
              productId,
              amount: cartItem.amount + amount,
            };

            return {
              cart: [...cart, updatedCartItem],
              productAlreadyAdded: true,
            };
          }

          return {
            cart: [...cart, cartItem],
            productAlreadyAdded,
          };
        },
        { cart: [], productAlreadyAdded: false }
      );

      const newCart = productAlreadyAdded ? cart : [...cart, { productId, amount }];

      commit('updateCart', newCart);
    },
    removeFromCart({ state, commit }, { productId, amount = 1 }) {
      const newCart = state.cart.reduce((cart, cartItem) => {
        if (cartItem.productId === productId) {
          cartItem.amount = cartItem.amount - amount;
        }

        return cartItem.amount > 0 ? [...cart, cartItem] : cart;
      }, []);

      commit('updateCart', newCart);
    },
    createOrder({ commit, state }) {
      alert(JSON.stringify(state.cart, null, 2));
      commit('updateCart', []);
    },
    addToFavorites({ state, commit }, { productId }) {
      const newProducts = state.products.map((product) => {
        return product.id === productId ? { ...product, favorite: true } : product;
      });

      commit('updateProducts', newProducts);
    },
    removeFromFavorites({ state, commit }, { productId }) {
      const newProducts = state.products.map((product) => {
        return product.id === productId ? { ...product, favorite: false } : product;
      });

      commit('updateProducts', newProducts);
    },
  },
});
