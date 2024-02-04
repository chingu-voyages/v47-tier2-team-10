import React from 'react'

// credit to https://www.preline.co/examples/features-stats.html and https://www.notion.so/

const statsData = [
    {
        title: 'Community members',
        number: '1M+',
        text: 'community users'
    },
    {
        title: 'Startup businesses',
        number: '2,000+',
        text: 'partner with us'
    },
    {
        title: 'Happy customers',
        number: '85%',
        text: 'this year alone'
    },
]

export default function Stats() {

    const statEl = statsData.map(stat => <Stat key={stat.title} stat={stat}/>)

  return (
    <div>
        {/* <!-- Features --> */}
        <div class="max-w-[85rem] px-4 pt-0 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
  
            { /* <!-- Grid --> */}
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
                {statEl}
            </div>
            {/* <!-- End Grid --> */}

        </div>
        {/* <!-- End Features --> */}
    </div>
  )
}


function Stat({stat}) {
    return (
        <div className='text-center'>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{stat.title}</h4>
            <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-green-600">{stat.number}</p>
            <p class="mt-1 text-gray-500">{stat.text}</p>
        </div>
    )
}