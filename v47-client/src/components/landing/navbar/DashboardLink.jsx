import React from "react";

export default function DashboardLink() {
  return (
    <>
      <button
        type="button"
        className="dark:text-navWhite text-lg md:text-lg px-3 py-3 mr-5  hover:bg-gray-100 hover:rounded-xl dark:hover:bg-grey-100 dark:hover:text-navBlack "
      >
        Task Dashboard
      </button>
      <button
        type="button"
        className=" dark:text-navWhite text-lg md:text-lg px-3 py-3 mr-5  hover:bg-gray-100 hover:rounded-xl dark:hover:bg-grey-100 dark:hover:text-navBlack "
      >
        <a href="/PricingPage">Pricing</a>
      </button>
    </>
  );
}
