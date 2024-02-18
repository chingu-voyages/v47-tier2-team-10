import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext(null);
// auth data needs to be moved all here for better props passing

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  useEffect(() => {
    if (loginModal || signupModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loginModal, signupModal]);

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        setLoginModal,
        setSignupModal,
        loginModal,
        signupModal,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
