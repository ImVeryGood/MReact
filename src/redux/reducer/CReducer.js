import {
  Change_PassWord,
  Change_UserName,
  Decrement,
  Increment,
  Update_List
} from "../action/CAction";
import { totalState } from "../state";
const setCounter = (state = totalState, action) => {
  switch (action.type) {
    case Increment:
      return { count: state.count + 1 };
    case Decrement:
      return { count: state.count - 1 };
    case Change_UserName:
      return Object.assign({}, state, { username: action.value });
    case Change_PassWord:
      return Object.assign({}, state, { password: action.value });
    case Update_List:
      alert("reducer=" + action.info);
      return Object.assign({}, state, { activityList: action.info });
    default:
      return state;
  }
};
export default setCounter;
