import { planner } from "../../assets";
import { footerLinks } from "../../data/footerLinksData";
import { socialMedia } from "../../data/socialMediaData";
import { FooterLinksProps } from "../../types/typings";

export default function Footer() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <section
        className={` flex justify-center   dark:text-white duration-300 items-center sm:py-16 py-6 flex-col mx-10`}
      >
        <div
          className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
        >
          <LeftContent />
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <FooterLink {...footerlink} />
            ))}
          </div>
        </div>
        <BottomContent />
      </section>
    </div>
  );
}

const FooterLink = (props: FooterLinksProps) => {
  const { links, title } = props;
  return (
    <div key={title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
      <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
        {title}
      </h4>
      <ul className="list-none mt-4">
        {links.map((link, index) => (
          <Link {...link} index={index} />
        ))}
      </ul>
    </div>
  );
};

interface LinkProps {
  name: string;
  index: number;
}

const Link = (props: LinkProps) => {
  const { index, name } = props;
  return (
    <li
      key={name}
      className={`font-poppins duration-100 cursor-not-allowed font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#2d8630] ${
        index !== footerLinks.length - 1 ? "mb-4" : "mb-0"
      }`}
    >
      {name}
    </li>
  );
};

const BottomContent = () => {
  const svgToDataURL = (svgString: string) => {
    const encodedSVG = encodeURIComponent(svgString);
    return `data:image/svg+xml,${encodedSVG}`;
  };
  return (
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
        Copyright Ⓒ 2024 Daily Tasker. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => {
          const socialMediaImageProps = {
            svgToDataURL,
            id: social.id,
            icon: social.icon,
            link: social.link,
            index,
          };
          return (
            <SocialMediaImage
              socialMediaImageProps={socialMediaImageProps}
              key={social.id}
            />
          );
        })}
      </div>
    </div>
  );
};

interface SocialMediaImageProps {
  socialMediaImageProps: {
    index: number;
    svgToDataURL: (value: string) => string;
    id: string;
    icon: string;
    link: string;
  };
}

const SocialMediaImage = (props: SocialMediaImageProps) => {
  const { socialMediaImageProps } = props;
  return (
    <img
      src={socialMediaImageProps.svgToDataURL(socialMediaImageProps.icon)}
      alt={socialMediaImageProps.id}
      className={`w-[25px] h-[25px] dark:fill-white  object-contain cursor-pointer hover:text-[#2d8630] ${
        socialMediaImageProps.index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
      }`}
      onClick={() => window.open(socialMediaImageProps.link)}
    />
  );
};

const LeftContent = () => {
  return (
    <div className="flex-[1] flex flex-col justify-start mr-10">
      <img
        src={planner}
        alt="hoobank"
        className="w-[266px] h-[72.14px] object-contain"
      />
      <p
        className={`font-poppins text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px] font-medium`}
      >
        Revolutionize your task management and boost productivity with our
        platform anywhere on the planet.
      </p>
    </div>
  );
};
