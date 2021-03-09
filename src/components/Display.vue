<template>
  <div class="display">
    412-123
  </div>
</template>

<script>
export default {
  name: "Display",
  setup() {},
};
</script>

<style lang="scss" scoped>
.display {
  width: 90%;
  height: 15%;
  min-height: 1.2em;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 2em;
  background-color: white;
  border: 1px solid black;
}
</style>
