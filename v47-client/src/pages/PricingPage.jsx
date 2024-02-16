import React, { useState } from "react";
import Nav from "../components/landing/navbar/Navbar";
import Footer from "../components/landing/footer/Footer";
// import { Elements, useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

export default function PricingPage() {
  //   const [email, setEmail] = useState("");
  //   const [cardElement, setCardElement] = useState(null);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const stripePromise = loadStripe(
  //         "sk_test_51Oh4IWAUtAQXtL4pQ6PeWYeZD5vLTWoellIRexfjjV4KCTSXwbe2tt9RplQih97KgOsvDoY9rnhhKjftbaFBhac800Fne11BDi"
  //       );
  //     const stripe = await stripePromise;

  //     const { error, paymentMethod } = await stripe.createPaymentMethod({
  //       type: "card",
  //       card: cardElement,
  //       billing_details: {
  //         email: email,
  //       },
  //     });

  //     if (error) {
  //       console.error(error);
  //     } else {
  //       console.log(paymentMethod);
  //       // Handle successful payment
  //     }
  //   };
  return (
    <>
      <Nav />

      {/* <!-- Pricing --> */}
      <div class="mt-14 max-w-[85rem] duration-300 dark:bg-[#1b1b1b] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Pricing
          </h2>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* Switch */}
        <div class="flex justify-center items-center">
          <label class="min-w-[3.5rem] text-sm text-gray-500 me-3 dark:text-gray-400">
            Monthly
          </label>

          {/*Toggle - https://www.kindacode.com/article/tailwind-css-create-toggle-switches-without-javascript/ */}
          <div class="mt-1">
            <label class="relative inline-block w-12 h-7 rounded-full">
              <input type="checkbox" class="peer opacity-0 w-0 h-0" />
              <span
                class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full duration-300 before:content-[''] before:absolute before:w-5 before:h-5 before:bottom-1 before:left-1 before:rounded-full
                        before:bg-white before:duration-300 peer-checked:before:translate-x-5 peer-checked:bg-green-500"
              ></span>
            </label>
          </div>

          <label class="relative min-w-[3.5rem] text-sm text-gray-500 ms-3 dark:text-gray-400">
            Annual
            <span class="absolute -top-10 start-auto -end-28">
              <span class="flex items-center">
                <svg
                  class="w-14 h-8 -me-6"
                  width="45"
                  height="25"
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    class="fill-gray-300 dark:fill-gray-700"
                  />
                </svg>
                <span class="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-green-600 text-white rounded-full py-1 px-2.5">
                  Save up to 10%
                </span>
              </span>
            </span>
          </label>
        </div>
        {/* End Switch */}

        {/* <!-- Grid --> */}
        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {/* <!-- Card --> */}
          <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
              Free
            </h4>
            <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
              Free
            </span>
            <p class="mt-2 text-sm text-gray-500">Forever free</p>

            <ul class="mt-7 space-y-2.5 text-sm">
              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">1 user</span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Plan features
                </span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Product support
                </span>
              </li>
            </ul>

            <a
              class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-100 text-green-800 hover:bg-green-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-green-900 dark:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col border-2 border-green-600 text-center shadow-xl rounded-xl p-8 dark:border-green-700">
            <p class="mb-3">
              <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-green-100 text-green-800 dark:bg-green-600 dark:text-white">
                Most popular
              </span>
            </p>
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
              Startup
            </h4>
            <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">$ </span>9
            </span>
            <p class="mt-2 text-sm text-gray-500">
              A place for small groups to plan & get organized.
            </p>

            <ul class="mt-7 space-y-2.5 text-sm">
              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">2 users</span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Plan features
                </span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Product support
                </span>
              </li>
            </ul>

            <a
              class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
            >
              Sign up
            </a>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
              Team
            </h4>
            <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">$</span>
              18
            </span>
            <p class="mt-2 text-sm text-gray-500">
              For companies to connect several teams & tools.
            </p>

            <ul class="mt-7 space-y-2.5 text-sm">
              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">5 users</span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Plan features
                </span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Product support
                </span>
              </li>
            </ul>

            <a
              class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-100 text-green-800 hover:bg-green-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-green-900 dark:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
              Enterprise
            </h4>
            <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">$ </span>
              49
            </span>
            <p class="mt-2 text-sm text-gray-500">
              Advanced features for scaling your business
            </p>

            <ul class="mt-7 space-y-2.5 text-sm">
              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">10 users</span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Plan features
                </span>
              </li>

              <li class="flex space-x-2">
                <svg
                  class="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600 dark:text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="text-gray-800 dark:text-gray-400">
                  Product support
                </span>
              </li>
            </ul>

            <a
              class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-100 text-green-800 hover:bg-green-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-green-900 dark:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Sign up
            </a>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Comparison table --> */}
        <div class="mt-20 lg:mt-32">
          <div class="lg:text-center mb-10 lg:mb-20">
            <h3 class="text-2xl font-semibold dark:text-white">
              Compare plans
            </h3>
          </div>

          {/* <!-- xs to lg --> */}
          <div class="space-y-24 lg:hidden">
            <section>
              <div class="px-4 mb-4">
                <h2 class="text-lg leading-6 font-medium text-gray-800">
                  Free
                </h2>
              </div>
              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Analytics
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Workspace analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Basic page analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Collaborative workspace
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      7 day page history
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Invite guests
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited blocks for teams
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited file uploads
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Integrate with Slack, GitHub & more
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      SAML SSO
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Private teamspaces
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Bulk PDF export
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Social & Compliance Integrations
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Advanced security & controls
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Audit log
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Customer success manager
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      User provisioning
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div class="px-4 mb-4">
                <h2 class="text-lg leading-6 font-medium text-gray-800">
                  Startup
                </h2>
              </div>
              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Analytics
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Workspace analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Basic page analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Collaborative workspace
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      7 day page history
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Invite guests
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited blocks for teams
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited file uploads
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Integrate with Slack, GitHub & more
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      SAML SSO
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Private teamspaces
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Bulk PDF export
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Social & Compliance Integrations
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Advanced security & controls
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Audit log
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Customer success manager
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      User provisioning
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div class="px-4 mb-4">
                <h2 class="text-lg leading-6 font-medium text-gray-800">
                  Team
                </h2>
              </div>
              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Analytics
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Workspace analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Basic page analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Collaborative workspace
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      7 day page history
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Invite guests
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited blocks for teams
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited file uploads
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Integrate with Slack, GitHub & more
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      SAML SSO
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Private teamspaces
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Bulk PDF export
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Social & Compliance Integrations
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Advanced security & controls
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Audit log
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Customer success manager
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      User provisioning
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Minus --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-gray-400 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      {/* <!-- Minus --> */}
                      <span class="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div class="px-4 mb-4">
                <h2 class="text-lg leading-6 font-medium text-gray-800">
                  Enterprise
                </h2>
              </div>
              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Analytics
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Workspace analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Basic page analytics
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Collaborative workspace
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      7 day page history
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Invite guests
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited blocks for teams
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Unlimited file uploads
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Integrate with Slack, GitHub & more
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      SAML SSO
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Private teamspaces
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Bulk PDF export
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="w-full">
                <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start dark:bg-gray-700 dark:border-gray-700 dark:text-white">
                  Social & Compliance Integrations
                </caption>
                <thead>
                  <tr>
                    <th class="sr-only" scope="col">
                      Feature
                    </th>
                    <th class="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Advanced security & controls
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Audit log
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      Customer success manager
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <th
                      class="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                      scope="row"
                    >
                      User provisioning
                    </th>
                    <td class="py-5 pe-4">
                      {/* <!-- Check --> */}
                      <svg
                        class="flex-shrink-0 ms-auto h-5 w-5 text-green-600 dark:text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {/* <!-- End Solid Check --> */}
                      <span class="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          {/* <!-- End xs to lg --> */}

          {/* <!-- lg+ --> */}
          <div class="hidden lg:block">
            <table class="w-full h-px">
              <caption class="sr-only">Pricing plan comparison</caption>
              <thead class="sticky top-0 inset-x-0 bg-white dark:bg-slate-900">
                <tr>
                  <th
                    class="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                    scope="col"
                  >
                    <span class="sr-only">Feature by</span>
                    <span class="dark:text-white">Plans</span>
                  </th>

                  <th
                    class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Free
                  </th>
                  <th
                    class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Startup
                  </th>
                  <th
                    class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Team
                  </th>
                  <th
                    class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white"
                    scope="col"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody class="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <tr>
                  <th
                    class="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white"
                    colspan="5"
                    scope="colgroup"
                  >
                    Analytics
                  </th>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Workspace analytics
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Basic page analytics
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white"
                    colspan="5"
                    scope="colgroup"
                  >
                    Collaborative workspace
                  </th>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    7 day page history
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Invite guests
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Unlimited blocks for teams
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Unlimited file uploads
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Integrate with Slack, GitHub & more
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    SAML SSO
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Private teamspaces
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Bulk PDF export
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Not included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 dark:text-white"
                    colspan="5"
                    scope="colgroup"
                  >
                    Social & Compliance Integrations
                  </th>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Advanced security & controls
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Audit log
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    Customer success manager
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Minus --> */}
                    {/* <!-- Minus --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>

                <tr>
                  <th
                    class="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
                    scope="row"
                  >
                    User provisioning
                  </th>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Free</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Startup</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Team</span>
                  </td>

                  <td class="py-5 px-6">
                    {/* <!-- Check --> */}
                    <svg
                      class="mx-auto flex-shrink-0 h-5 w-5 text-green-600 dark:text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {/* <!-- End Solid Check --> */}
                    <span class="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- End lg+ --> */}
        </div>
        {/* <!-- End Comparison table --> */}
      </div>
      {/* <!-- End Pricing --> */}

      <Footer />
    </>
  );
}
