import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ innerText, link }) {
  const navigate = useNavigate();
  return (
    <button
      className="bg-green-600 mr-4 hover:opacity-70 duration-300 text-white py-2 px-4 rounded-md"
      onClick={() => navigate(`/${link}`)}
    >
      {innerText}
    </button>
  );
}
