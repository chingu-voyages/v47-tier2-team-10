import React from "react";
import AuthButton from "../../Ui/AuthButton";
import AuthUiStates from "../../Ui/AuthUiStates";
import FormAuth from "../../Ui/AuthForm";
import { UserDataProps } from "../../../types/typings";

interface SignupModalProps {
  signupModalProps: {
    userData: UserDataProps;
    setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>;
    error: string;
    successMessage: string;
    handleGuestSignIn: () => void;
    setSignupModal: (value: boolean) => void;
    handleSignup: () => void;
  };
}

export default function SignupModal(props: SignupModalProps) {
  const { signupModalProps } = props;
  console.log(signupModalProps.error);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute bg-black opacity-50  inset-0"
        onClick={() => signupModalProps.setSignupModal(false)}
      ></div>
      <SignupModalContent signupModalProps={signupModalProps} />
    </div>
  );
}

const SignupModalContent = (props: SignupModalProps) => {
  const { signupModalProps } = props;
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-md mx-auto mt-8 p-4  w-[500px] flex flex-col  py-12 bg-white shadow-md rounded-md z-50"
    >
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div>
        <AuthButton
          textValue="Guest Sign Up"
          onClickValue={() => signupModalProps.handleGuestSignIn()}
        />
        <FormAuth
          actionValue="email"
          id_html_for="email"
          labelText="Email:"
          setUserData={signupModalProps.setUserData}
          value={signupModalProps.userData.email}
        />
        <FormAuth
          actionValue="password"
          id_html_for="password"
          labelText="Password:"
          setUserData={signupModalProps.setUserData}
          value={signupModalProps.userData.password}
        />
        <FormAuth
          actionValue="confirmPassword"
          id_html_for="confirmPassword"
          labelText="Confirm Password:"
          setUserData={signupModalProps.setUserData}
          value={signupModalProps.userData.confirmPassword}
        />
        <AuthUiStates message={signupModalProps.error} />
        <AuthUiStates message={signupModalProps.successMessage} />
        <AuthButton
          textValue="Sign Up"
          onClickValue={() => signupModalProps.handleSignup()}
        />
      </div>
    </form>
  );
};
