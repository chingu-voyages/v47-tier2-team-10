import React from "react";

export default function AuthButton(props: {
  onClickValue: () => void;
  textValue: string;
}) {
  const { onClickValue, textValue } = props;
  return (
    <button
      type="button"
      onClick={() => onClickValue()}
      className={` ${
        textValue === "Login" ||
        textValue === "Sign Up" ||
        textValue === "Guest Sign Up"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-blue-500 hover:bg-red-600"
      } w-full text-white px-4 py-2 rounded-md `}
    >
      {textValue}
    </button>
  );
}
