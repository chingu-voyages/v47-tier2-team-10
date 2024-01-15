import React, { useState } from 'react'
import { MdExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Activity from './Activity';


export default function Category({category}) {

    const [isActivityVisible, setIsActivityVisible] = useState(false)

    const activityEl = category.activityTypes.map((activity, index) => <Activity key={index} activity={activity}/>)

    const capitalizeEachWord = (sentence) => {
        const sentenceArr = (sentence.toLowerCase().split(' '))
        return sentenceArr.map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
    }

  return (
    <>
        <div className='flex justify-start items-center gap-2 md:mt-3 mb-2'>
            <div className='hidden md:block' >
                <button onClick={() => setIsActivityVisible(prev => !prev)}>
                    {isActivityVisible ? <MdOutlineExpandLess /> : <MdExpandMore />}
                </button> 
            </div>
            <button className=''>{capitalizeEachWord(category.categoryName)}</button>
            <button className='hidden md:block '>
                <MdDeleteOutline />  
            </button>
        </div>

        {isActivityVisible && 
        <div>
            {activityEl}
        </div>}
    </>      
  )
}
