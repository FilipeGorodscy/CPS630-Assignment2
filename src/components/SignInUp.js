import React from "react";
import { Link, Redirect } from "react-router-dom";

const SignInUp = ({ setUsername }) => {
  const logout = () => {
    sessionStorage.removeItem("username");
    setUsername(undefined);
  };

  return sessionStorage.getItem("username") ? (
    <div>
      You are logged in as {sessionStorage.getItem("username")}
      <br />
      <Link to="/register" onClick={() => logout()}>
        Click here to logout
      </Link>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default SignInUp;
