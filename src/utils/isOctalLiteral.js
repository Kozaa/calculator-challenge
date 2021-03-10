const isOctalLiteral = (state) => {
  if (
    state.currentNumber[0] === "0" &&
    state.currentNumber[1] !== "." &&
    state.currentNumber.length > 1
  ) {
    return true;
  } else return false;
};

export default isOctalLiteral;
