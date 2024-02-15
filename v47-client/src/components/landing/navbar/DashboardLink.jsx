import React from "react";
import { Link } from "react-router-dom";

export default function DashboardLink() {
  return (
    <Link to="/PricingPage">
      <button
        type="button"
        className="dark:text-navWhite rounded-lg bg-gray-200   /md:text-lg px-3 py-2  mr-5 duration-300  hover:bg-gray-300 hover:rounded-xl dark:hover:bg-grey-100 dark:bg-green-500  dark:hover:text-navBlack "
      >
        Pricing
      </button>
    </Link>
  );
}
