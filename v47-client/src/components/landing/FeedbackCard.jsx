// import { quotes } from "../../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12  max-w-full md:max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2  bg-gray-100 shadow-md  hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">


     <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-5  text-gray-800 dark:text-gray-200  ">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]  text-gray-800 dark:text-gray-200">
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
