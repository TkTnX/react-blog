import React, { ChangeEvent, useRef, useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, isAuthSelector } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import userImg from "./user.png";
import { useForm } from "react-hook-form";
import axios from "../../axios";
const Registration: React.FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const userImgRef = useRef(null);
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState("");
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
    return <Navigate to="/" />;
  }

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const formData = new FormData();
      // @ts-ignore
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post(
        `${import.meta.env.URL}/avatars`,
        formData
      );
      setAvatarUrl(data.url);
    } catch (error) {
      console.log(error);
      alert("Не удалось загрузить аватарку");
    }
  };

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
          className="max-w-28 mx-auto rounded-full overflow-hidden"
        >
          {avatarUrl === "" ? (
            <img src={userImg} alt="user" />
          ) : (
            <img src={`https://react-blog-rrdj.onrender.com${avatarUrl}`} alt="user" />
          )}
        </button>
        <input
          onChange={(event) => handleChangeFile(event)}
          ref={userImgRef}
          type="file"
          hidden
        />

        {Boolean(errors.fullName?.message) && (
          <p className="text-left text-red-500">{errors.fullName?.message}</p>
        )}
      </AuthForm>
    </>
  );
};

export default Registration;
