import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return {
    inputStateReducer,
  };
};

const UseBasicInput = (valueValidate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = valueValidate(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  function valueChangeHandler(event) {
    dispatch({ type: "INPUT", value: event.target.value });
  }

  function inputBlurHandler(event) {
    dispatch({ type: "BLUR" });
  }

  function reset() {
    dispatch({ type: "RESET" });
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default UseBasicInput;
