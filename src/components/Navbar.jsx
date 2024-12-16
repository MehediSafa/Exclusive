import React, { useState, useRef, useEffect } from 'react';
import Container from './Container';
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  // Language dropdown state
  const [languageShow, setLanguageShow] = useState(false);
  const languageRef = useRef();
  // Language selectors
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageShow(false); // Hide dropdown after selecting a language
  };

  useEffect(()=>{
      document.addEventListener('click',(e) => {
        if(languageRef.current.contains(e.target))
          {
            setLanguageShow(!languageShow)
          }else{
              setLanguageShow(false)
          }
      })
    },[languageShow])

  return (
    <section className="bg-[#000000] py-[17px]">
      <Container>
        <div className='lg:flex lg:justify-between items-center'>
          {/* EMPTY DIV */}
          <div className='lg:w-[24%] w-full flex lg:justify-start justify-center items-center mb-2 lg:mb-0'>
          </div>

          {/* Middle part */}
          <div className='lg:w-[50%] w-full flex items-center lg:items-start'>
            <h2 className='font-pops font-normal text-[14px] text-[#FAFAFA] mb-[8px] me-[8px]'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h2>
            <span className='font-pops font-normal text-[14px] text-[#FAFAFA] underline decoration-white cursor-pointer'>
              Shop Now
            </span>
          </div>

          {/* Right part - Language dropdown */}
          <div  className='lg:w-[24%] w-full flex lg:justify-start justify-center items-center relative'>
            <div ref={languageRef}
            className='flex justify-between items-center cursor-pointer'>

            <p className='font-pops font-normal text-[14px] text-[#FAFAFA] mr-[8px]' >{selectedLanguage}</p>
            <FaAngleDown className='text-[14px] text-[#FAFAFA]' />
            </div>
            {languageShow && (
              <div className='absolute lg:top-[42px] lg:left-[-0%] top-[38px] duration-300 ease-in-out z-50'>
                <ul className='bg-[#000000] w-[200px]'>
                  <li onClick={() => handleLanguage('Arabic')} className='py-1 border-b-2 border-white font-pops font-normal text-[14px] text-[#FAFAFA] cursor-pointer'>Arabic</li>
                  <li onClick={() => handleLanguage('Spanish')} className='py-1 border-b-2 border-white font-pops font-normal text-[14px] text-[#FAFAFA] cursor-pointer'>Spanish</li>
                  <li onClick={() => handleLanguage('French')} className='py-1 border-b-2 border-white font-pops font-normal text-[14px] text-[#FAFAFA] cursor-pointer'>French</li>
                  <li onClick={() => handleLanguage('German')} className='py-1 border-b-2 border-white font-pops font-normal text-[14px] text-[#FAFAFA] cursor-pointer'>German</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
