import React, { useContext, useState } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { authContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignupModal from "./SignupModal";
import { UserDataProps } from "../../../types/typings";

export default function Signup() {
  const navgiate = useNavigate();
  const [userData, setUserData] = useState<UserDataProps>({
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const { signupModal, setSignupModal, user } = useContext(authContext);

  const handleSignup = async () => {
    try {
      if (userData.password !== userData.confirmPassword) {
        setError("Passwords don't match");
        return;
      }
      try {
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
        setError("");
        setSuccessMessage(
          "Signup successfully! Now, Go back to our main page and log in as our new member<3"
        );
        setSignupModal(false);
        navgiate("/ProductPage");
      } catch (error) {
        setError("Signup failed. Please try again.");
        console.error("Signup failed:", error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleGuestSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, "guest321@gmail.com", "guest123");
      setSuccessMessage(
        "Signup successfully! Now, Go back to our main page and log in as our new member<3"
      );
      setSignupModal(false);
      navgiate("/ProductPage");
    } catch (error) {
      console.log(error, "error signing as guest");
    }
  };

  const buttonProps = {
    user,
    setSignupModal,
  };

  const signupModalProps = {
    userData,
    setUserData,
    error,
    successMessage,
    handleGuestSignIn,
    setSignupModal,
    handleSignup,
  };

  return (
    <div>
      <Button buttonProps={buttonProps} />
      {signupModal && <SignupModal signupModalProps={signupModalProps} />}
    </div>
  );
}

interface ButtonProps {
  buttonProps: {
    user: User | null;
    setSignupModal: (value: boolean) => void;
  };
}

const Button = (props: ButtonProps) => {
  const { buttonProps } = props;
  return (
    <>
      {!buttonProps.user && (
        <button
          onClick={() => buttonProps.setSignupModal(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Sign Up
        </button>
      )}
    </>
  );
};
