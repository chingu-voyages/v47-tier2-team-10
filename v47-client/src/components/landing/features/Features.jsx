import React, { useEffect } from 'react'
import Icons from './Icons'
import Stats from './Stats'
import Aos from 'aos'

export default function Features() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='mt-48' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        {/* <!-- Title --> */}
        <div class="mx-auto max-w-2xl  text-center mt-10">
            <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
            Our Features
            </h2>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
            The powerful and flexible organisation solution for every individual and business.
            </p>
        </div>
        {/* <!-- End Title --> */}
        
        <Icons/>
        <Stats/>
    </div>
  )
}
