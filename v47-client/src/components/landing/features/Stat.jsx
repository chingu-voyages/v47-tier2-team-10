import React, { useRef } from 'react';
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp' 

export default function Stat({stat}) {
    const ref = useRef(null);
    const count = useScrollTriggeredCountUp(ref, stat.number);

    return (
        <div className='text-center'>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{stat.title}</h4>
            <p ref={ref} class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-green-600">{count.toLocaleString()}+</p>
            <p class="mt-1 text-gray-500">{stat.text}</p>
        </div>
    )
}
