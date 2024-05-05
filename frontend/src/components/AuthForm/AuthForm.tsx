import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type AuthFormProps = {
  title: string;
  btnText: string;
  children: any;
  type?: string;
  onSubmit: (values: any) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  btnText,
  children,
  type,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });



  return (
    <div className="bg-black px-16 py-5 max-w-xl mx-auto rounded-xl text-white text-center mt-6">
      <h2 className="font-normal text-3xl mb-8">{title}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
        {children}
        <input
          className="px-2 py-3 text-black bg-white rounded"
          type="text"
          placeholder="Username"
          {...register("fullName", { required: "Укажите имя" })}
        />
        <input
          className="px-2 py-3 bg-white rounded text-black"
          type="email"
          {...register("email", { required: "Укажите почту" })}
          placeholder="Email"
        />
        {Boolean(errors.email?.message) && (
          <p className="text-left text-red-500">{errors.email?.message}</p>
        )}
        <input
          className="px-2 py-3 bg-white rounded text-black"
          type="password"
          placeholder="Password"
          {...register("password", { required: "Укажите пароль" })}
          autoComplete="off"
        />
        {Boolean(errors.password?.message) && (
          <p className="text-left text-red-500">{errors.password?.message}</p>
        )}

        <button
          disabled={!isValid}
          type="submit"
          className=" disabled:opacity-60 w-full mt-4 py-4 bg-zinc-800 rounded-sm hover:opacity-80 transition-all "
        >
          {btnText}
        </button>
      </form>
      {type === "Reg" ? (
        <p className="text-left mt-5">
          Already have an account? <br />{" "}
          <span className="text-blue-600">
            <Link to="/auth/login">Login</Link>
          </span>
        </p>
      ) : (
        <p className="text-left mt-5">
          Don't have an account yet? <br />
          <span className="text-blue-600">
            <Link to="/auth/registration">Registration</Link>
          </span>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
