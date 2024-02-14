import React, { useContext } from 'react';

const Footer = () => {

  return (
    <footer className='site-footer bg-gray-800 p-10 text-base leading-6 text-white flex flex-col mt-12'>
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Team Members Section */}
        <div className='container-none'>
   
          <p className=' font-bold text-xl'>Team members</p>
            <div className='mt-1'>
              <ul className="footer-links list-none">
                <li><a href="https://github.com/MinjuSkylarPark" className="text-blue-300">Skylar github.com/MinjuSkylarPark</a></li>
                <li><a href="https://github.com/Cakinn1" className="text-blue-300">Anthony github.com/Cakinn1</a></li>
                <li><a href="https://github.com/devavaz" className="text-blue-300">Avaz github.com/devavaz</a></li>
                <li><a href="https://github.com/Choiz0" className="text-blue-300">Jiyoung github.com/Choiz0</a></li>
                <li><a href="https://github.com/jessabc" className="text-blue-300">Jess github.com/jessabc</a></li>
                {/* <li><a href="#" className="text-blue-300">Lili github.com/Lili</a></li> */}
              </ul>
          </div>
        </div>
        {/* About Us Section */}
        <div className='container-none text-center '>
          <p className=' font-bold text-xl'>About us</p>
          <p><a href="https://github.com/MinjuSkylarPark/v47-tier2-team-10" className='text-blue-300'>v47 Team 10</a></p>
        </div>
        {/* Copyright Section */}
        <div className='container-none '>
          <p className="copyright-text md:text-left mt-0 md:mt-0 sm:mt-0">
            {/* <p className='text-xl text-center'>Copyright &copy; <br /></p> */}
            <p className='text-center'> &copy;Voyage team 10 2024</p>
          </p>
     
            {/* Bottom Section (Terms and Policies) */}
          <div className="container-none mt-20 text-center">
            <br/>
            <p className='text-xl'><a href="https://www.forbes.com/advisor/business/why-your-website-needs-terms-of-use-agreement/" className='text-blue-300'>Terms and conditions</a></p>
            {/* Empty for now, add any additional sections if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
