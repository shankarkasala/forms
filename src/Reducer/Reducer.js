import { REQUEST, SUCCESS, FAIL } from "../Actions/Actiontype";
const initialstate = {
  users: [],
  error: "",
  isLoading: false,
};
export const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case REQUEST:
      state = { ...state, isLoading: true };
      return state;
    case "SUCCESS":
      console.log("action", action);
      state = { isLoading: false, users: action.data, error: "" };

      return state;
    case FAIL:
      state = { isLoading: false, users: [], error: action.data };
      return state;
    default:
      return state;
  }
};
