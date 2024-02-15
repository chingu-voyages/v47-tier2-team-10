import React from 'react'
import Stat from './Stat'

// credit to https://www.preline.co/examples/features-stats.html and https://www.notion.so/

const statsData = [
    {
        title: 'Community members',
        number: 8863,
        text: 'community users'
    },
    {
        title: 'Startup businesses',
        number: 960,
        text: 'partner with us'
    },
    {
        title: 'Happy customers',
        number: 5304,
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


