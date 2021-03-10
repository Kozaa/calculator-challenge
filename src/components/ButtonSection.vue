<template>
  <div class="btnWrapper">
    <Button
      v-for="button in buttonActions"
      :sign="button.sign"
      :key="button.sign"
      @click="commit(button.action, button.sign)"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { buttonActions } from "../data";
import Button from "./Button.vue";

export default {
  name: "ButtonSection",
  components: {
    Button,
  },
  setup() {
    const state = useStore();
    const commit = state.commit;

    return {
      buttonActions,
      commit,
    };
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
