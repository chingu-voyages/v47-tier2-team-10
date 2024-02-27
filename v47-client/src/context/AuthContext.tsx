import { User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: null | User;
  setUser: (value: null | User) => void;
  loginModal: boolean;
  setLoginModal: (value: boolean) => void;
  signupModal: boolean;
  setSignupModal: (value: boolean) => void;
}

export const authContext = createContext<AuthContextProps>({
  loginModal: false,
  setLoginModal: () => false,
  setSignupModal: () => false,
  setUser: () => null,
  signupModal: false,
  user: null,
});
// auth data needs to be moved all here for better props passing

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signupModal, setSignupModal] = useState<boolean>(false);

  useEffect(() => {
    if (loginModal || signupModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loginModal, signupModal]);

  const contextValue: AuthContextProps = {
    loginModal,
    setLoginModal,
    setSignupModal,
    setUser,
    signupModal,
    user,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
