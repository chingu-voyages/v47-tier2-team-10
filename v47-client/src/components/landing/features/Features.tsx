import { useEffect } from "react";
import Aos from "aos";
import { iconData } from "../../../data/IconData";
import Icon from "./Icon";
import { statsData } from "../../../data/statsData";
import Stat from "./Stat";

export default function Features() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="min-h-screen mx-auto max-w-[1300px] flex justify-center items-center flex-col"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <FeaturesHeader />
      <Icons />
      <Stats />
    </div>
  );
}

const Icons = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {iconData.map((icon) => (
          <Icon headerText={icon.headerText} subText={icon.subText} />
        ))}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="max-w-[85rem] px-4 pt-0 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {statsData.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
};

const FeaturesHeader = () => {
  return (
    <div className="  text-center mt-10">
      <h2 className="text-3xl lg:text-4xl text-[#2d8630] font-bold dark:text-gray-200">
        Our Features
      </h2>
      <p className="mt-3 px-4 text-gray-800 dark:text-gray-200 text-[16px]">
        The powerful and flexible organisation solution for every individual and
        business.
      </p>
    </div>
  );
};
