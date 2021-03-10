const isDividingByZero = (state) => {
  if (
    state.sequence[state.sequence.length - 1] === "/" &&
    state.currentNumber === "0"
  ) {
    alert("You cannot divide by 0.");
    return true;
  } else return false;
};

export default isDividingByZero;
