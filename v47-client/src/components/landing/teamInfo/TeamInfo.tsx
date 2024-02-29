import { useEffect } from "react";
import MemberInfo from "./MemberInfo";
import Aos from "aos";
import { TeamData } from "../../../data/teamData";

export default function TeamInfo() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="py-6 flex justify-center items-center flex-col mx-auto max-w-[1400px] relative min-h-screen"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <TeamInfoHeader />
      <TeamInfoContent />
    </section>
  );
}

const TeamInfoHeader = () => {
  return (
    <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className="text-3xl lg:text-4xl text-[#2d8630]  dark:text-gray-200">
        Our <span className="font-bold">Chingu</span> Team
      </h2>
      <div className="w-[60%] md:mt-0 mt-6 text-center">
        <p className="mt-3 text-gray-800 dark:text-gray-200">
          We are a dedicated team of individuals brought together by our shared
          passion for coding and collaboration. Committed to excellence and
          continuous learning, we've embarked on this{" "}
          <span className="font-semibold	italic">Chingu Voyage</span> with a
          unified goal: to create something remarkable.
        </p>
      </div>
    </div>
  );
};

const TeamInfoContent = () => {
  return (
    <div
      className={`flex flex-wrap justify-center w-full feedback-container  relative z-[1]`}
    >
      {TeamData.map((card) => (
        <MemberInfo key={card.id} {...card} />
      ))}
    </div>
  );
};
