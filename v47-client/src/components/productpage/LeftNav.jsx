import React from 'react'
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import Category from './Category';
import { IoIosAddCircle } from "react-icons/io";


export default function LeftNav({isLeftNavOpen, setIsLeftNavOpen, productData}) {
  
 const categoryEl = productData.map((category, index) => <Category key={index} category={category}/>)

  return (
    // <section className='border w-[300px] p-6'>LeftNav</section>
    <>
      <section className={`md:w-64 flex bg-green-300 p-7 md:p-0 rounded-lg md:rounded-none md:duration-700 font-medium font-green-900 ${isLeftNavOpen ? 'absolute right-16 top-20 md:static' : 'md:-ml-72 hidden md:block'} `}>
        <div className='md:w-full md:flex md:flex-col  text-black md:px-5'>
          <button 
            onClick={() => setIsLeftNavOpen(prev => !prev)}
            className='hidden text-3xl md:flex ml-auto mt-6 mb-2 hover:text-green-800'>
            <TbLayoutSidebarLeftCollapse />
          </button>
          <div className='flex flex-col'>
            {categoryEl}
          </div>
          <button className='mt-auto mb-20 md:flex justify-center items-center gap-2 hidden hover:text-green-800'>
            <IoIosAddCircle />
            <p className='hover:text-green-800'>Add new activity</p>
          </button>
        </div>
      </section>

      {!isLeftNavOpen && 
      <button 
        onClick={() => setIsLeftNavOpen(prev => !prev)} 
        className='mb-auto ml-1 mt-6 hidden md:block text-3xl hover:text-green-800'>
        <TbLayoutSidebarRightCollapse />
      </button>}
    </>
  )
}
