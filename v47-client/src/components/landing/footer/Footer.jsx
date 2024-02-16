import logo from "../../../assets/planner.png";
import { footerLinks, socialMedia } from "../../../lib/feedBackData"

const Footer = () => {

  const svgToDataURL = (svgString) => {
    const encodedSVG = encodeURIComponent(svgString);
    return `data:image/svg+xml,${encodedSVG}`;
  };

  return (
  <section className={` flex justify-center items-center sm:py-16 py-6 flex-col mx-10`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`font-poppins text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px] font-medium`}>
        Revolutionize your task management and boost productivity with our platform anywhere on the planet.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#2d8630] cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
        Copyright Ⓒ 2024 Daily Tasker. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
      {socialMedia.map((social, index) => (
  <img
    key={social.id}
    src={svgToDataURL(social.icon)}
    alt={social.id}
    className={`w-[25px] h-[25px] object-contain cursor-pointer hover:text-[#2d8630] ${
      index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
    }`}
    onClick={() => window.open(social.link)}
  />
))}
      </div>
    </div>
  </section>
)}

export default Footer;