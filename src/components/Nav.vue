<template functional>
  <nav class="Nav">
    <ul class="Nav_list">
      <li class="Nav_item" v-for="item in props.items" :key="item.label">
        <router-link class="Nav_link" :to="item.url" :data-counter="item.counter || null">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.Nav {
  display: flex;

  &_list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &_item {
    position: relative;

    & + & {
      margin-left: 5px;
    }
  }

  &_link {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: 12px 16px;
    border-radius: 4px;
    color: #333;
    text-decoration: none;
    transition: background-color 200ms, color 200ms;

    &[data-counter]::after {
      content: attr(data-counter);
      margin-left: 8px;
      padding: 4px;
      min-width: 20px;
      color: #fff;
      background-color: var(--color-second);
      border-radius: 50%;
      font-size: 10px;
      font-weight: 700;
      line-height: 1.21;
      text-align: center;
    }

    &.router-link-exact-active {
      pointer-events: none;
      background-color: var(--color-accent);
      color: #fff;
    }

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
