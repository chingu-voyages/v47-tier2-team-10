import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Logout from "../../modals/Logout";
import Login from "../../modals/Login";
import app from "../../../firebase";
export default function UserSignedIn({ setShowLoginModal, showLoginModal }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscriebe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscriebe();
  }, []);

  const handleLogin = () => {
    setUser({});
    //close the login modal after successful login
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth); //fire, legendary - cakin
    setUser(null);
  };
  return (
    <>
      {user ? (
        <div>
          <Logout onLogout={handleLogout} />
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </>
  );
}
