import React from "react";
import { UserDataProps } from "../../types/typings";

interface FormAuthProps {
  labelText: string;
  id_html_for: string;
  value: string;
  setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>;
  actionValue: string;
}

export default function FormAuth(props: FormAuthProps) {
  const { id_html_for, labelText, setUserData, value, actionValue } = props;

  return (
    <div className=" flex flex-col">
      <label
        htmlFor={id_html_for}
        className="block mr-auto text-sm font-medium text-gray-600"
      >
        {labelText}
      </label>
      <input
        type={
          labelText === "Password:" || labelText === "Confirm Password:"
            ? "password"
            : "text"
        }
        id={id_html_for}
        className="mt-1 p-2 border rounded-md w-full"
        value={value}
        onChange={(event) => {
          setUserData((prevValue) => {
            return {
              ...prevValue,
              [actionValue]: event.target.value,
            };
          });
        }}
      />
    </div>
  );
}
