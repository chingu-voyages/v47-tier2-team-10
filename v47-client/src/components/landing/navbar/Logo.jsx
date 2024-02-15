import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex items-center flex-shrink-0 ">
      <Link to="/" className="flex items-center ">
        <img src="/assets/planner.png " className="h-8 w-8 m-2" alt="Logo" />
        <span className="text-lg text-[#2d8630]     text- sm:text-2xl md:text-3xl ml-2 font-bold whitespace-nowrap dark:text-navWhite">
          Daily Tasker
        </span>
      </Link>
    </div>
  );
}
