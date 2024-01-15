import React, { useState } from 'react'
import { TbCategoryPlus } from "react-icons/tb";
import { TbCategoryMinus } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import Activity from './Activity';
import { TbCategory } from "react-icons/tb";


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
                    {isActivityVisible ? <TbCategoryMinus /> : <TbCategoryPlus />}
                </button> 
            </div>
            <button onClick={() => setIsActivityVisible(prev => !prev)} className='flex justify-center items-center gap-2'>
                <div className='md:hidden'>
                    <TbCategory />
                </div>
                {capitalizeEachWord(category.categoryName)}
            </button>
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
