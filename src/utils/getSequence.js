const getSequence = (state, payload = "") => {
  if (state.currentNumber.includes("-")) {
    return `${state.sequence}(${state.currentNumber})${payload}`;
  } else {
    return `${state.sequence}${state.currentNumber}${payload}`;
  }
};

export default getSequence;
