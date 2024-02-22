import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div
      className={`flex justify-center bg-slate-100 min-h-screen items-center
      `}
    >
      <div className="w-full max-w-xs">
        <h1 className="text-purple-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your detail
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <>
        <p className="py-3 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-purple-600">
            Register
          </Link>
        </p>
        <p> username: johnd, password: m38rmF$ </p>
      </>
    );
  } else if (type === "register") {
    return (
      <>
        <p className="py-3 text-center">
          Already Have an account?{" "}
          <Link to="/login" className="font-bold text-purple-600">
            Login
          </Link>
        </p>
      </>
    );
  }
};

export default AuthLayouts;
