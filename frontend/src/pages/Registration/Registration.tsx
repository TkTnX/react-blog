import React, { useRef } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, isAuthSelector } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import userImg from "./user.png";
import { useForm } from "react-hook-form";
const Registration: React.FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const userImgRef = useRef(null);
  const dispatch = useDispatch();

  const {
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: any) => {
    // @ts-ignore
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert("Не удалось зарегистрироваться!");
    }
    // @ts-ignore
    if ("token" in data.payload) {
      // @ts-ignore
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <>
      <AuthForm
        onSubmit={onSubmit}
        title="Registration"
        type="Reg"
        btnText="Register"
      >
        <button
          // @ts-ignore
          onClick={() => userImgRef.current.click()}
          type="button"
          className="max-w-28 mx-auto"
        >
          <img src={userImg} alt="user" />
        </button>
        <input ref={userImgRef} type="file" hidden />

        {Boolean(errors.fullName?.message) && (
          <p className="text-left text-red-500">{errors.fullName?.message}</p>
        )}
      </AuthForm>
    </>
  );
};

export default Registration;
