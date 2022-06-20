import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { setUserName, removeUserName } from "../utils/util-service";

function App() {
  const loginWithUsername = (username) => {
    removeUserName();
    setUserName(username);
  };
  return (
    <Router>
      <Routes>
          <Route
            exact
            path="/"
            element={<Login loginWithUsername={loginWithUsername} />}
          />
        <Route path="/home" exact={true} element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
