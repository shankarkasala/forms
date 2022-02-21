import { REQUEST, SUCCESS, FAIL } from "./Actiontype";
import axios from "axios";
const userRequest = () => {
  return {
    type: REQUEST,
  };
};
const userSuccess = (users) => {
  return {
    type: SUCCESS,
    data: users,
  };
};
const userFail = (error) => {
  return {
    type: FAIL,
    data: error,
  };
};
export const fetchUser = () => {
  return {
    function(dispatch) {
      dispatch(userRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          const users = res.data.map((user) => user.name);
          console.log(users);
          dispatch(userSuccess(users));
        })
        .catch((error) => {
          dispatch(userFail(error));
        });
    },
  };
};
