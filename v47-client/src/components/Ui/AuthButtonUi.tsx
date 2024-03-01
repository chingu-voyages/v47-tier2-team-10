import { User } from "firebase/auth";
import React from "react";

interface Props {
  authProps: {
    user: User | null;
    setLoginModal: (value: boolean) => void;
    handleLogout: () => void;
  };
}

export default function AuthButtonUi(props: Props) {
  const { authProps } = props;
  return (
    <>
      {authProps.user ? (
        <button
          onClick={authProps.handleLogout}
          className="bg-green-500 text-white px-4 py-2 duration-300 rounded-md hover:bg-[#2d8630]"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => authProps.setLoginModal(true)}
          className="bg-green-500 text-white px-4 py-2 duration-300 rounded-md hover:bg-[#2d8630]"
        >
          Login
        </button>
      )}
    </>
  );
}
