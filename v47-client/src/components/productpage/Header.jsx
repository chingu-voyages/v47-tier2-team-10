import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


export default function Header({isLeftNavOpen, setIsLeftNavOpen}) {
  return (
    <section className='border  p-6 flex justify-between items-center'>
      <p>Header</p>

      {<button onClick={() => setIsLeftNavOpen(prev => !prev)} className='mb-auto  md:hidden'>
        {!isLeftNavOpen && <GiHamburgerMenu />}
        {isLeftNavOpen && <IoClose />}
      </button>}
    </section>
  )
}
