import React from "react";
import FormAuth from "../../Ui/AuthForm";
import AuthButton from "../../Ui/AuthButton";
import AuthUiStates from "../../Ui/AuthUiStates";
import { UserDataProps } from "../../../types/typings";

export interface UserProps {
  loginProps: {
    error: string;
    successMessage: string;
    setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>;
    userData: UserDataProps;
    handleLogin: () => void;
    handleForgotPassword: () => void;
    closeModal: () => void;
  };
}

export default function LoginModal(props: UserProps) {
  const { loginProps } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute bg-black opacity-50  inset-0"
        onClick={() => loginProps.closeModal()}
      ></div>
      <LoginFormContent loginProps={loginProps} />
    </div>
  );
}

const LoginFormContent = (props: UserProps) => {
  const { loginProps } = props;
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-md mx-auto p-4 bg-white w-[500px] flex flex-col  py-12 shadow-md rounded-md relative z-10"
    >
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="space-y-4">
        <FormAuth
          id_html_for="username"
          labelText="Username:"
          setUserData={loginProps.setUserData}
          value={loginProps.userData.username}
          actionValue="username"
        />
        <FormAuth
          id_html_for="username"
          labelText="Password:"
          setUserData={loginProps.setUserData}
          value={loginProps.userData.password}
          actionValue="password"
        />
        <AuthUiStates message={loginProps.error} />
        <AuthUiStates message={loginProps.successMessage} />
        <div className="flex space-x-2 flex-1">
          <AuthButton onClickValue={loginProps.handleLogin} textValue="Login" />
          <AuthButton
            onClickValue={loginProps.handleForgotPassword}
            textValue="Forgot Password?"
          />
        </div>
      </div>
    </form>
  );
};
