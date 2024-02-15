const MemberInfo = ({
  content,
  name,
  title,
  img,
  iconGithub,
  iconLinkedin,
  flag,
  githubLink,
  linkedinLink,
}) => (
  <div className="flex justify-between flex-col px-5 mb-4 py-8 max-w-full md:max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-1 duration-300 hover:-translate-y-3  bg-gray-100 shadow-md  hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    <div className="flex justify-center object-contain">
      <img src={img} alt={name} className="w-[150px] object-cover h-[150px] rounded-full" />
    </div>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] my-4  text-gray-800 dark:text-gray-200  ">
      {content}
    </p>

    <div className="flex flex-row mt-5">
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px]  text-gray-700 dark:text-gray-200 flex items-center">
          {name}
          <div className="flex items-center">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[30px] h-[30px] ml-5  duration-300 hover:scale-125 active:scale-75 cursor-pointer"
                src={iconGithub}
                alt="github icon"
              />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[30px] duration-300 hover:scale-125 active:scale-75 cursor-pointer h-[30px] ml-1"
                src={iconLinkedin}
                alt="linkedin icon"
              />
            </a>
          </div>
        </h4>
        <p className="font-normal italic text-[16px] leading-[24px]  text-gray-800 dark:text-gray-200">
          {title} 
        </p>
      </div>
    </div>
  </div>
);

export default MemberInfo;
