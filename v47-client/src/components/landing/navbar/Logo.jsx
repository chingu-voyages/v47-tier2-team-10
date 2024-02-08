import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center flex-shrink-0 ">
      <a href="/" className="flex items-center ">
        <img src="/assets/planner.png " className="h-8 w-8 m-2" alt="Logo" />
        <span className="text-xl  sm:text-navBlack sm:text-2xl md:text-3xl ml-2 font-bold whitespace-nowrap dark:text-navWhite">
          Daily Tasker
        </span>
      </a>
    </div>
  );
}
