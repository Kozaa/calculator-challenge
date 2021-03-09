<template>
  <div class="btnWrapper">
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "ButtonSection",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.btnWrapper {
  width: 90%;
  height: 80%;

  display: grid;
  grid-gap: 10px;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
}
</style>
