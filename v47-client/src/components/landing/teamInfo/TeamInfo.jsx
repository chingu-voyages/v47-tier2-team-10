import React from 'react';
import { TeamData } from '../../../lib/feedBackData';
import MemberInfo from './MemberInfo';

const TeamInfo = () => {
  return (
    <section className="py-6 flex justify-center items-center flex-col relative ">
      <div className="w-full flex justify-end items-center flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
          Team members
        </h2>
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
