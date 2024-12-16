import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../components/Container';
import bannerImg from '../assets/Banner.png';
import Slider from 'react-slick';
import { useContext } from 'react';
import { ApiData } from './ContextApi';

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    let {info,loading} = useContext(ApiData)
    let [category,setCategory] = useState([])
    // show category items
    let [categoryFilter,setCategoryFilter] = useState([])
    

    let handleCategory = (citem)=> {
        console.log(citem);
        let filterItem = info.filter((item)=>item.category == citem)
    }

    useEffect(() => {
        setCategory([...new Set(info.map((item) => item.category))]);
    }, [info]);
    
    
    

    return (
        <section className='mt-[40px]'>
            <Container>
                <div className='flex '>
                    {/* category div */}
                    <div className='w-[20%]'>
                        <ul>
                            {category.map((item)=>(

                            <li onClick={()=>handleCategory(item)} 
                            className='font-pops font-normal text-[16px] mb-[16px] capitalize'>{item}</li>
                            ))}
                            
                        </ul>
                    </div>

                    {/* slick part */}
                    <div className='w-[70%] bg-[#000000]  '>
                        <Slider {...settings}>
                            <div className='flex justify-end items-end h-full'>
                                <img src={bannerImg} alt="Banner Image" />
                            </div>
                            <div className='flex justify-end items-end h-full'>
                                <img src={bannerImg} alt="Banner Image" />
                            </div>
                            <div className='flex justify-end items-end h-full'>
                                <img src={bannerImg} alt="Banner Image" />
                            </div>
                            <div className='flex justify-end items-end h-full'>
                                <img src={bannerImg} alt="Banner Image" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
