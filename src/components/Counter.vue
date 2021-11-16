<template>
  <div class="Counter">
    <button class="Counter_remove" :disabled="!canRemove" @click="remove">-</button>
    <input class="Counter_value" :value="value" tabindex="-1" readonly />
    <button class="Counter_add" @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    canRemove() {
      return this.value > 0;
    },
  },
  methods: {
    add() {
      this.$emit('add');
    },
    remove() {
      this.$emit('remove');
    },
  },
};
</script>

<style lang="scss">
.Counter {
  display: flex;
  height: 36px;

  &_value {
    width: 32px;
    border: none;
    border-top: 1px solid var(--color-accent);
    border-bottom: 1px solid var(--color-accent);
    text-align: center;
    font-family: inherit;
    outline: none;
  }

  &_add,
  &_remove {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    padding: 10px;
    border: none;
    border-radius: 0;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    &:active {
      filter: brightness(0.9);
    }

    &[disabled] {
      background-color: #999;
      pointer-events: none;
      user-select: none;
    }
  }

  &_remove {
    background-color: var(--color-accent);
    border-radius: 4px 0 0 4px;
  }

  &_add {
    background-color: var(--color-accent);
    border-radius: 0 4px 4px 0;
  }
}
</style>
