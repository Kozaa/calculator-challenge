<template>
  <div class="display">
    <span class="sequence">{{ sequence }}</span>
    <span class="displayNumber">{{ displayNumber }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Display",
  setup() {
    const store = useStore();
    const sequence = computed(() => store.state.sequence);
    const displayNumber = computed(() =>
      store.state.currentNumber || sequence.value
        ? store.state.currentNumber
        : "0"
    );

    return {
      displayNumber,
      sequence,
    };
  },
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
  overflow: hidden;

  font-size: 2em;
  background-color: white;
  border: 2px solid black;
}

.sequence {
  font-size: 0.5em;
  opacity: 0.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.displayNumber {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
