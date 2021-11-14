<template functional>
  <button :class="['FavButton', { '-active': props.active }]" v-bind="data.attrs" v-on="listeners">
    <svg class="FavButton_icon" viewBox="0 0 23.2 22.9">
      <path
        class="FavButton_iconPath"
        d="M16.2,1.5c-2.9,0-4.5,2.2-4.5,2.2S10,1.5,7.1,1.5C4,1.5,1.5,4.1,1.5,7.3c0,4.4,5,8.7,6.3,10
	c1.6,1.5,3.8,3.5,3.8,3.5s2.2-2,3.8-3.5c1.4-1.3,6.3-5.6,6.3-10C21.7,4.1,19.2,1.5,16.2,1.5z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'FavButton',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.FavButton {
  $this: &;

  width: 24px;
  height: 24px;
  padding: 0;
  color: transparent;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: ease color 200ms, ease filter 200ms, ease transform 200ms;

  &.-active {
    color: var(--color-second);
  }

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(0.9);
    transform: scale(0.9);
  }

  &[disabled] {
    pointer-events: none;
  }

  &_icon {
    width: 100%;
    height: 100%;
  }

  &_iconPath {
    fill: currentColor;
    stroke: var(--color-second);
    stroke-width: 3;
  }
}
</style>
