import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="mt-14">
      <h3 className="title-3">Email newsletter</h3>
      <p className="text-sm font-normal text-slate-500">
        Sign up to receive email updates and to hear what's going on.
      </p>

      <form className="mt-6" action="#">
        <input
          className="p-4 border border-gray-400 rounded w-full mb-2"
          type="text"
          placeholder="Your name"
        />
        <input
          className="p-4 border border-gray-400 rounded w-full"
          type="email"
          placeholder="Your email adress"
        />
        <button className="btns py-4 w-full ">Subscribe to newsletter</button>
      </form>
    </div>
  );
};

export default Newsletter;
