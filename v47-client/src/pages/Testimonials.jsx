import FeedbackCard from "../components/landing/FeedbackCard";
import { feedback } from "../constants/index";

const Testimonials = () => (
  <section className="py-6 flex justify-center items-center flex-col relative bg-gradient-to-t from-gray-100 to-gray-200 text-[#2d8630]">
    <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1]">

      <h2 className='text-2xl md:text-4xl md:leading-tight font-poppins font-semibold xs:text-[48px] text-[40px] text-gray-600 xs:leading-[76.8px] leading-[66.8px] w-full text-center'>
        What People are saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 text-center">
        <p className="max-w-[900px] text-[30px] leading-[30.8px] mx-auto pt-10">
        Revolutionize your task management and boost productivity with our platform anywhere on the planet.
        </p>
      </div>
    </div>

    <div className={`flex flex-wrap justify-center w-full feedback-container relative z-[1]`}>
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;



