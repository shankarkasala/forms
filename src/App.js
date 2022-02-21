import "./App.css";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { fetchUser } from "./Actions/Actions";
import axios from "axios";
function App({ fetchUser }) {
  const [users, setUsers] = useState([]);
  const data = useSelector((state) => state);
  console.log("data", data);
  console.log("fetchuser", fetchUser);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("response", res);
      const data = res.data;

      setUsers(data);
    });
  });
  return (
    <div className="App">
      hello
      {users ? JSON.stringify(users) : ""}
      <button onClick={() => fetchUser({ users })}>click</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    fetchUser: (users) => {
      dispatch({
        type: "SUCCESS",
        data: users,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
