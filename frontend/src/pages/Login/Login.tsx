import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, isAuthSelector } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
const Login: React.FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  if (isAuth) {
    return <Navigate to="/" />;
  }

  

  const onSubmit = async (values: any) => {
    // @ts-ignore
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Не удалось авторизоваться");
    }
    // @ts-ignore
    if ("token" in data.payload) {
      // @ts-ignore
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <>
      <AuthForm
        onSubmit={onSubmit}
        title="Login"
        type="Login"
        btnText="Login"
        children={""}
      />
    </>
  );
};

export default Login;
