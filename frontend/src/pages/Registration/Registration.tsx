import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

const Registration: React.FC = () => {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <AuthForm title="Registration" type="Reg" btnText="Register">
        <input
          className="px-2 py-3 text-black bg-white rounded"
          type="text"
          placeholder="Login"
        />
      </AuthForm>
    </>
  );
};

export default Registration;
