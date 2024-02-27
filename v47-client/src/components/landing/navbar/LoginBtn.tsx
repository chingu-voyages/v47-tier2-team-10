import React from "react";
import Login from "../../modals/Login";
import Signup from "../../modals/Signup";
import { IoPersonCircle } from "react-icons/io5";

const LoginBtn = () => {
  return (
    <div className="flex space-x-2">
      <button>
        <Login />
      </button>

      <button>
        <Signup />
      </button>
    </div>
  );
};

export default LoginBtn;
