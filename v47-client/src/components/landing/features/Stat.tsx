import React, { useRef } from "react";
import useScrollTriggeredCountUp from "./useScrollTriggeredCountUp";
import { StatsDataProps } from "./Stats";

export default function Stat(props: StatsDataProps) {
  const { number, text, title } = props;
  const ref = useRef(null);
  const count = useScrollTriggeredCountUp(ref, number);

  return (
    <div className="text-center">
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h4>
      <p
        ref={ref}
        className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-green-600"
      >
        {count.toLocaleString()}+
      </p>
      <p className="mt-1 text-gray-500">{text}</p>
    </div>
  );
}
