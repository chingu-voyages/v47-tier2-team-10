import React from 'react';

const Footer = () => {
  return (
    <footer className='site-footer bg-gray-800 p-10 text-base leading-6 text-gray-500 flex flex-col'>
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Team Members Section */}
        <div className='container-none'>
          <p className=' font-bold text-xl'>Team members</p>
            <div className='mt-1'>
              <ul className="footer-links list-none">
                <li><a href="https://github.com/MinjuSkylarPark" className="text-gray-500">Skylar github.com/MinjuSkylarPark</a></li>
                <li><a href="https://github.com/Cakinn1" className="text-gray-500">Anthony github.com/Cakinn1</a></li>
                <li><a href="https://github.com/devavaz" className="text-gray-500">Avaz github.com/devavaz</a></li>
                <li><a href="https://github.com/Choiz0" className="text-gray-500">Jiyoung github.com/Choiz0</a></li>
                <li><a href="https://github.com/jessabc" className="text-gray-500">Jess github.com/jessabc</a></li>
                <li><a href="#" className="text-gray-500">Lili github.com/Lili</a></li>
              </ul>
          </div>
        </div>
        {/* About Us Section */}
        <div className='container-none text-center '>
          <p className=' font-bold text-xl'>About us</p>
          <p>v47 Team 10</p>
        </div>
        {/* Copyright Section */}
        <div className='container-none'>
          <p className="copyright-text text-center md:text-left mt-0 md:mt-0 sm:mt-0">
            <p className='text-xl'>Copyright &copy; <br /></p>
          </p>
          <a href="https://github.com/MinjuSkylarPark/v47-tier2-team-10" className="text-blue-500"> Voyage team 10 2024</a>.
            {/* Bottom Section (Terms and Policies) */}
          <div className="container-none mt-20 ">
            <p className='font-bold text-xl'>terms and policy</p>
            {/* Empty for now, add any additional sections if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
