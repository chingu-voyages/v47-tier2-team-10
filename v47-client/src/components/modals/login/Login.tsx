import { useState, useEffect, useContext } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../context/AuthContext";
import AuthButtonUi from "../../Ui/AuthButtonUi";
import LoginModal from "./LoginModal";
import { UserDataProps } from "../../../types/typings";



export default function Login() {
  const navigate = useNavigate();
  const { user, setUser, loginModal, setLoginModal } = useContext(authContext);

  const [userData, setUserData] = useState<UserDataProps>({
    password: "",
    username: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth, setUser]);

  const handleLogin = async () => {
    if (!userData) {
      setError("Please provide username and password.");
      return;
    }
    try {
      await signInWithEmailAndPassword(
        auth,
        userData.username,
        userData.password
      );
      // gets all current users data
      const user = auth.currentUser;
      console.log(user);
      setUser(user);
      setSuccessMessage("Success");
      setTimeout(() => {
        setLoginModal(false);
        setSuccessMessage("");
      }, 2000);
      setTimeout(() => {
        navigate("/ProductPage");
      }, 2000);
    } catch (error) {
      setError("Invalid username or password. Please try again.");
      setTimeout(() => {
        setError("");
      }, 2000);
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout successful!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, userData.username);
      setError("");
      setSuccessMessage("Password reset email sent successfully!");
      // setLoginModal(false);
    } catch (error) {
      setError("Failed to send a password reset email. Please try again.");
      setSuccessMessage("");
      console.error("Password reset failed:", error);
    }
  };

  const closeModal = () => {
    setLoginModal(false);
    setSuccessMessage("");
  };

  const loginProps = {
    userData,
    setUserData,
    error,
    successMessage,
    handleLogin,
    handleForgotPassword,
    closeModal,
  };

  const authProps = {
    setLoginModal,
    user,
    handleLogout,
  };

  return (
    <div className="justify-center">
      <AuthButtonUi authProps={authProps} />
      {loginModal && <LoginModal loginProps={loginProps} />}
    </div>
  );
}
