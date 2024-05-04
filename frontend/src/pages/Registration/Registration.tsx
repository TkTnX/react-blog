import React, { useRef } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import userImg from "./user.png";
const Registration: React.FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const userImgRef = useRef(null);
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <AuthForm title="Registration" type="Reg" btnText="Register">
        <button
          // @ts-ignore
          onClick={() => userImgRef.current.click()}
          type="button"
          className="max-w-28 mx-auto"
        >
          <img src={userImg} alt="user" />
        </button>
        <input ref={userImgRef} type="file" hidden />
        <input
          className="px-2 py-3 text-black bg-white rounded"
          type="text"
          placeholder="Username"
        />
      </AuthForm>
    </>
  );
};

export default Registration;
