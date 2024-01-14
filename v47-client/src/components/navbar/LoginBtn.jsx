import React from "react";
import { IoPersonCircle } from "react-icons/io5";

const LoginBtn = () => {
  return (
    <div className="flex ">
      <button
        type="button"
        className=" text-white border-2 border-transparent bg-navGreen font-medium rounded-xl sm:text-md p-3 transition duration-300 ease-in-out transform  hover:border-black hover:border-2 hover:bg-navWhite hover:text-black "
      >
        Login / SignUp
      </button>

      {/* if logined this will be shown. need to add conditinal rendering */}

      {/* <div className="flex items-center">
        <IoPersonCircle className=" text-green-800 text-4xl" />
        <p className="text-white m-1 text-xl">JIYOUNG</p>
      </div> */}
    </div>
  );
};

export default LoginBtn;
