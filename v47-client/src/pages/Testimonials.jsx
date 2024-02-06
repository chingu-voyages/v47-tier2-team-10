import FeedbackCard from "../components/landing/FeedbackCard";
import { feedback } from "../constants/index";

const Testimonials = () => (
  <section className="py-6 flex justify-center items-center flex-col relative ">
    <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1]">

      <h2 className='text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200'>
        What People are saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 text-center">
        <p className="mt-3 text-gray-800 dark:text-gray-200">
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


// <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
// Our Features
// </h2>
// <p class="mt-3 text-gray-800 dark:text-gray-200">
// The powerful and flexible organisation solution for every individual and business.
// </p>



