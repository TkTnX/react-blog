import React from "react";
import { Link } from "react-router-dom";

type AuthFormProps = {
  title: string;
  btnText: string;
  children: any;
  type?: string;
};

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  btnText,
  children,
  type,
}) => {
  return (
    <div className="bg-black px-16 py-5 max-w-xl mx-auto rounded-xl text-white text-center mt-6">
      <h2 className="font-normal text-3xl mb-8">{title}</h2>

      <form className="grid gap-3">
        {children}
        <input
          className="px-2 py-3 bg-white rounded text-black"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-2 py-3 bg-white rounded text-black"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <button className="w-full mt-4 py-4 bg-zinc-800 rounded-sm hover:opacity-80 transition-all ">
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
