import React from 'react';
import { TeamData } from '../../../lib/feedBackData';
import MemberInfo from './MemberInfo';



const TeamInfo = () => 
{
  return (
    <section className="py-6 flex justify-center items-center flex-col relative" 
>    

 <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="text-3xl lg:text-4xl text-gray-800  dark:text-gray-200">
          Our <span className='font-bold'>Chingu</span> Team
        </h2>
        <div className="w-[60%] md:mt-0 mt-6 text-center">
        <p className="mt-3 text-gray-800 dark:text-gray-200">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsa in? Odit, tenetur magnam. Nisi architecto ratione tenetur odit blanditiis. Aliquid expedita fugit voluptatum iure a. Eos, necessitatibus! Esse, magni?
        </p>
      </div>
      </div>

      <div className={`flex flex-wrap justify-center w-full feedback-container relative z-[1]`}>
        {TeamData.map((card) => (
          <MemberInfo key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default TeamInfo;
