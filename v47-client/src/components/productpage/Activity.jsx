import React from 'react'
import { GoTasklist } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";


export default function Activity({activity}) {

    return (
    <div className='md:flex items-center gap-1 ml-5 hidden'>
        <button className='text-lg font-bold'>
            <GoTasklist /> 
        </button>
        <p>{activity.activityName}</p>
        <button className='text-lg font-bold text-red-500 '>
            <MdDeleteForever />
        </button>
    </div>
  )
}
