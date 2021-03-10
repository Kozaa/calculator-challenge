<template>
  <button :class="['btn', { plus: sign === '+' }]">
    {{ sign }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["sign"],
};
</script>

<style lang="scss" scoped>
.btn {
  background: none;
  border: none;
  font: {
    family: inherit;
    size: inherit;
  }

  background-color: #8ea2c1;
  border: 2px solid black;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
}

.plus {
  grid-row: span 2;
}
</style>
