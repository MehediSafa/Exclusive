import React, { useContext, useEffect, useState } from 'react';
import { ApiData } from './ContextApi';
import Container from './Container';
import { Link } from "react-router-dom";

const FlashSales = () => {
  let { info, loading } = useContext(ApiData);

  // State to control displayed items
  let [filterShow, setFilterShow] = useState([]);
  // State to toggle the button between "See More" and "See Less"
  let [count, setCount] = useState(true);

  // Function to show all items
  const handleSeeMore = () => {
    setFilterShow(info);
    setCount(false);
  };

  // Function to show only 5 items
  const handleSeeLess = () => {
    const fiveFilter = info.slice(0, 5);
    setFilterShow(fiveFilter);
    setCount(true);
  };

  useEffect(() => {
    // Initialize with the first 5 items
    const fiveFilter = info.slice(0, 5);
    setFilterShow(fiveFilter);
  }, [info]);

  return (
    <section>
      <Container>
        <div>
          {/* Top Part */}
          <div className='flex items-center'>
            <div className='h-[40px] w-[20px] bg-[#DB4444]'></div>
            <div className='font-pops font-semibold text-[16px] text-[#DB4444] ps-[16px]'>Today’s</div>
          </div>

          {/* Header Part */}
          <div className='flex items-center mt-[24px]'>
            <h2 className='font-inter font-bold text-[36px]'>Flash Sales</h2>
          </div>

          {/* Items Part */}
          {loading ? (
            <h2>Loading......</h2>
          ) : (
            <div className='flex flex-wrap gap-x-4 mt-[40px]'>
              {filterShow.map((item, index) => (
                <div key={index} className='w-[24%] mb-[16px] group'>
                  <div className='m-4 bg-white rounded-lg'>
                    <div className='relative'>
                      {/* Product Image with Link */}
                      <Link to={`/shop/${item.id}`}>
                        <img
                          className='w-full bg-white shadow-md hover:shadow-lg transition relative'
                          src={item.thumbnail}
                          alt={item.title}
                        />
                      </Link>
                      <div className='absolute bottom-0 left-0 w-full h-[41px] bg-black bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                        <h2 className='font-pops font-semibold text-[16px] text-white'>Add to Cart</h2>
                      </div>
                    </div>

                    {/* Product Info */}
                    <h2 className='mb-2 font-pops font-medium text-[16px] mt-[8px]'>{item.title}</h2>
                    <h2 className='mb-2 font-pops font-medium text-[16px] text-[#DB4444]'>${item.price}</h2>
                    <h2 className='mb-2 font-pops font-medium text-[16px]'>Rating: {item.rating}</h2>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Buttons Below the Items */}
          <div className='flex justify-center mt-4'>
            {count ? (
              <button
                onClick={handleSeeMore}
                className='w-[200px] h-[56px] bg-[#DB4444] hover:bg-gray-300 mr-2'
              >
                See More
              </button>
            ) : (
              <button
                onClick={handleSeeLess}
                className='w-[200px] h-[56px] bg-[#DB4444] hover:bg-gray-300'
              >
                See Less
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FlashSales;
