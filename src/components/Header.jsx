import React, { useEffect, useState } from 'react'
import Container from './Container'
import logo from '../assets/Logo.png'
import { FaSearch, FaRegHeart,FaBars  } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { useRef } from 'react';


const Header = () => {
    let [show,setShow] = useState(false)
    const showRef = useRef(false)

   
        
   


    useEffect(() => {
        document.addEventListener('click', (e) => {
            
            if (showRef.current.contains(e.target)) {
                setShow(!show)
            }
            else {
                setShow(false)
            }

            
        });
    }, [show])

  return (
    <section className='mt-[47px]'>
        <Container>
            <div className='lg:flex lg:flex-row justify-between'>

            {/* logo  div*/}
            <div className='lg:w-[25%] flex j lg:py-[0] py-3'>
            <img src={logo} alt="logo" />  
            </div>
            {/* responisve menu part */}
            <div ref={showRef} className='lg:hidden cursor-pointer text-[#262626] ] flex justify-center relative py-6'>
                        {show ? <RxCross1 className='cursor-pointer' /> : <FaBars className='cursor-pointer' />}
                    </div>
                    {show && (

                    <div className={`z-50 absolute lg:hidden top-[250px] left-0 w-full bg-white flex flex-col items-center  ${show ? 'visible' : 'hidden'}`}>
                        <ul>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Home/</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Shop</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>About</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Contacts</li>
                            <li className='pt-[10px] font-sans font-bold text-[14px] text-[#767676] hover:text-[#262626]'>Journal</li>
                        </ul>
                    </div>
                    )

                    }
            {/* menu div */}
            <div className='lg:w-[40%] lg:flex lg:flex-col hidden'>
                <ul className='flex  lg:gap-x-[48px]'>
                    <li className='font-pops font-normal text-[16px] text-[#00000] hover:underline hover:decoration-black hover:underline-offset-[8px]'>Home</li>
                    <li className='font-pops font-normal text-[16px] text-[#00000] hover:underline hover:decoration-black hover:underline-offset-[8px] cursor-pointer'>Contact</li>
                    <li className='font-pops font-normal text-[16px] text-[#00000] hover:underline hover:decoration-black hover:underline-offset-[8px] cursor-pointer'>About</li>
                    <li className='font-pops font-normal text-[16px] text-[#00000] hover:underline hover:decoration-black hover:underline-offset-[8px] cursor-pointer'>Sign UP</li>
                </ul>
            </div>

            {/* left div */}
            <div className='lg:w-[35%] w-full lg:flex lg:flex-row flex-col lg:justify-even items-center lg:gap-y-0 gap-y-3'>
                {/* search field */}
                <div className='relative'>

                    <input
                    className='font-pops font-normal text-[12px] text-[#000000] border-0 bg-[#F5F5F5] h-[38px] lg:w-[95%] w-full' 
                    type="text" placeholder='What are you looking for?' />

                    <FaSearch className='absolute lg:top-[10%] lg:right-[10%] top-[30%] right-[40px] lg:translate-y-[50%]'/>
                </div>

                <div className='flex lg:justify-between justify-center gap-x-7 items-center lg:gap-x-2 lg:mt-0 mt-4'>
                {/* wishlist area */}
                <div>
                    <FaRegHeart className='h-[27px] w-[27px] cursor-pointer'/>
                </div>
                {/* cart area */}
                <div>
                    <IoCartOutline className='h-[32px] w-[32px] cursor-pointer'/>
                </div>
                </div>
            </div>
            </div>

        </Container>
    </section>
  )
}

export default Header;
