import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";


interface Props {
  innerText: string
  link: string
}

export default function Button(props: Props) {
  const {innerText, link} = props
  const navigate = useNavigate();

  const { user, setSignupModal } = useContext(authContext);
  return (
    <button
      className="bg-green-600 mr-4 hover:opacity-70 duration-300 text-white py-2 px-4 rounded-md"
      onClick={() => {
        if (innerText === "Go to Product" && !user) {
          setSignupModal(true);
          console.log("modal open");
        } else {
          navigate(`/${link}`);
        }
      }}
    >
      {innerText}
    </button>
  );
}
