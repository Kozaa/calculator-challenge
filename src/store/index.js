import { createStore } from "vuex";
import isDividingByZero from "../utils/isDividingByZero";
import isOctalLiteral from "../utils/isOctalLiteral";

export default createStore({
  state: {
    currentNumber: "",
    sequence: "",
  },
  mutations: {
    numberChange: (state, payload) => {
      if (payload === "." && state.currentNumber.includes(".")) {
        return;
      }
      if (
        payload === "0" &&
        state.currentNumber[0] === "0" &&
        state.currentNumber.length < 2
      ) {
        return;
      }

      state.currentNumber = `${state.currentNumber}${payload}`;
    },

    addToSequence: (state, payload) => {
      if (!state.sequence && !state.currentNumber) {
        return;
      }

      if (isOctalLiteral(state)) {
        state.currentNumber = state.currentNumber.slice(1);
      }

      if (isDividingByZero(state)) return;

      if (state.currentNumber) {
        state.sequence = `${state.sequence}${state.currentNumber}${payload}`;
        state.currentNumber = "";
      } else {
        state.sequence = `${state.sequence.slice(0, -1)}${payload}`;
      }
    },

    handlePercent: (state) => {
      if (state.sequence) {
        if (state.sequence[state.sequence.length - 1] === "*") {
          const currentSum = eval(state.sequence.slice(0, -1));
          const result = (currentSum / 100) * state.currentNumber;
          state.sequence = "";
          state.currentNumber = result;
        } else {
          alert("In order to calculate percenteges, use *, ex. 100 * 20%");
        }
      }
    },

    deleteRecent: (state) =>
      (state.currentNumber = state.currentNumber.slice(0, -1)),

    deleteAll: (state) => {
      state.currentNumber = "";
      state.sequence = "";
    },

    result: (state) => {
      if (isDividingByZero(state)) return;
      if (isOctalLiteral(state)) {
        state.currentNumber = state.currentNumber.slice(1);
      }
      if (isNaN(state.sequence.slice(-1)) && !state.currentNumber) {
        state.sequence = state.sequence.slice(0, -1);
      } else {
        state.sequence = `${state.sequence}${state.currentNumber}`;
      }
      state.currentNumber = eval(state.sequence).toString();
      state.sequence = "";
    },
  },
  actions: {},
  modules: {},
});
