<template>
  <main class="displayWrapper">
    <Display />
    <ButtonSection />
  </main>
</template>

<script>
import Display from "./Display.vue";
import ButtonSection from "./ButtonSection.vue";

export default {
  name: "Calculator",
  components: {
    Display,
    ButtonSection,
  },
  setup() {},
};
</script>

<style scoped lang="scss">
.displayWrapper {
  width: 30%;
  height: 80%;
  padding: 50px 10px;
  border-radius: 20px;
  background-color: #a6bcde;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

@media screen and (max-width: 768px) {
  .displayWrapper {
    width: 90%;
  }
}
</style>
