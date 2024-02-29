import { useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import Aos from "aos";
import { feedback } from "../../../data/feedbackData";

export default function Testimonials() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="py-6 flex justify-center mx-auto max-w-[1300px] items-center flex-col relative min-h-screen  "
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <TestimonialsHeader />
      <TestimonialsContent />
    </section>
  );
}

const TestimonialsHeader = () => {
  return (
    <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1] text-center">
      <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-200 text-[#2d8630]">
        What People are saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 text-center">
        <p className="mt-3 text-gray-800 dark:text-gray-200">
          Revolutionize your task management and boost productivity with our
          platform anywhere on the planet.
        </p>
      </div>
    </div>
  );
};

const TestimonialsContent = () => {
  return (
    <div
      className={`flex flex-wrap justify-center w-full feedback-container relative z-[1]`}
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  );
};
