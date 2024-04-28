import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const Login: React.FC = () => {
  return (
    <>
      <AuthForm title="Login" type="Login" btnText="Login" children={""} />
    </>
  );
};

export default Login;
