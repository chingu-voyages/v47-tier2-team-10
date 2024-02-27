import React, { useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Logout from "../../modals/Logout";
import Login from "../../modals/Login";
import { auth } from "../../../firebase";

interface Props {
  setShowLoginModal: (value: boolean) => void;
  showLoginModal: boolean;
}

export default function UserSignedIn(props: Props) {
  const { setShowLoginModal, showLoginModal } = props;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscriebe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscriebe();
  }, []);

  const handleLogin = () => {
    // why is this being set to null? this makes 0 sense there is no user logined in
    setUser(null);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };
  return <>{user ? <Logout handleLogout={handleLogout} /> : <Login />}</>;
}
