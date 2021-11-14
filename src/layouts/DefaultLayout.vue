<template>
  <main class="DefaultLayout">
    <header class="DefaultLayout_header">
      <div class="DefaultLayout_container">
        <div class="DefaultLayout_row">
          <div class="DefaultLayout_nav">
            <Nav :items="nav" />
          </div>
          <div class="DefaultLayout_favorites">
            <FavButton
              :active="isFavoritesPage"
              :disabled="isFavoritesPage"
              @click="gotoFavorites"
            />
          </div>
        </div>
      </div>
    </header>
    <div class="DefaultLayout_body">
      <div class="DefaultLayout_container">
        <h1 class="DefaultLayout_title">{{ title }}</h1>
        <div class="DefaultLayout_content">
          <slot />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FavButton from '@/components/FavButton.vue';
import Nav from '@/components/Nav.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
  components: { FavButton, Nav },
  computed: {
    ...mapGetters(['cartProductsCount']),
    nav() {
      return [
        { label: 'Продукты', url: '/' },
        { label: 'Корзина', url: '/cart', counter: this.cartProductsCount },
      ];
    },
    title() {
      return this.$route.meta.title;
    },
    isFavoritesPage() {
      return this.$route.name === 'Favorites';
    },
  },
  methods: {
    gotoFavorites() {
      if (!this.isFavoritesPage) {
        this.$router.push('/favorites');
      }
    },
  },
};
</script>

<style lang="scss">
.DefaultLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &_header {
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }

  &_body {
    flex-grow: 1;
    padding: 30px 20px 40px;
    background-color: #eee;
  }

  &_container {
    max-width: 1080px;
    margin: 0 auto;
  }

  &_row {
    display: flex;
    align-items: center;
  }

  &_nav {
    flex-grow: 1;
  }

  &_favorites {
    margin-left: 10px;
  }

  &_title {
    margin: 0;
  }

  &_content {
    margin-top: 30px;
  }
}
</style>
