import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const Registration: React.FC = () => {
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
