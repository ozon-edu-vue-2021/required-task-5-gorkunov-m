<template functional>
  <button :class="$options.methods.getClassList(props)" v-bind="data.attrs" v-on="listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'accent', // 'accent' | 'second'
    },
    size: {
      type: String,
      default: 'm', // 'm' | 'l'
    },
  },
  methods: {
    getClassList(props) {
      return ['Button', `-color-${props.color}`, `-size-${props.size}`];
    },
  },
};
</script>

<style lang="scss">
.Button {
  padding: 10px 14px;
  background-color: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: ease filter 200ms;

  &.-color-second {
    background-color: var(--color-second);
  }

  &.-size-l {
    padding: 14px 20px;
    font-size: 16px;
  }

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
</style>
