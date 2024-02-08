import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";




const MemberInfo = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-5 py-8 max-w-full md:max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-1  bg-gray-100 shadow-md  hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

    <div className="flex items-center justify-center  bg-gray-200">
      <img src={img} alt={name} className="w-[200px] h-[200px] rounded-full" />
    </div>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-5  text-gray-800 dark:text-gray-200  ">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-1">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]  text-gray-800 dark:text-gray-200 flex items-center">
          {name}
          <FaLinkedin className="ml-2 text-[25px]" />
          <FaGithub  className="text-[25x]"/>
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px]  text-gray-800 dark:text-gray-200">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default MemberInfo;
