import React from 'react'
import { GoTasklist } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";


export default function Activity({activity}) {

    return (
    <div className='md:flex items-center gap-1 ml-5 hidden'>
        <button className=' '>
            <GoTasklist /> 
        </button>
        <p>{activity.activityName}</p>
        <button className=' '>
            <MdDeleteForever />
        </button>
    </div>
  )
}
