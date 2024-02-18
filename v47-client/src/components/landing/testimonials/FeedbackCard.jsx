// import { quotes } from "../../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex hover:-translate-y-3 active:scale-95 duration-300 justify-between flex-col px-10 py-12 dark:bg-black  max-w-full md:max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2  bg-gray-100 shadow-md  hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-200"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z" />
      <path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" />
    </svg>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-5  text-gray-800 dark:text-gray-200  ">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-[#2d8630] dark:text-gray-200">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px]  text-gray-800 dark:text-gray-200">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
