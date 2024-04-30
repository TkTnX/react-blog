import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
    const isAuth = useSelector(isAuthSelector);

    if (isAuth) {
      return <Navigate to="/" />;
    }
  return (
    <>
      <AuthForm title="Login" type="Login" btnText="Login" children={""} />
    </>
  );
};

export default Login;
