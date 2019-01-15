import { Decrement, Increment } from "../action/CAction";

const setCounter = (state = { count: 0 }, action) => {
  console.log("action=" + action.type);
  switch (action.type) {
    case Increment:
      return { count: state.count + 1 };
    case Decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
export default setCounter;
