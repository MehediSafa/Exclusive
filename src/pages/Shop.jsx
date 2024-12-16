import React, { useContext } from 'react'
import { ApiData } from '../components/ContextApi'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const Shop = () => {
  let {info,loading} = useContext(ApiData)
  return (
    <section>
      <div>
      <Container>
      <div className='flex flex-wrap gap-x-4 mt-[40px]'>
              {info.map((item, index) => (
                <div key={index} className='w-[24%] mb-[16px] group'>
                  <div className=' cursor-pointer m-4 bg-white  rounded-lg '>
                      <div className='relative'>
  
                    {/* Product Image */}
                    <Link  to={`/shop/${item.id}`}>
                    
                    <img className='w-full   bg-white shadow-md  hover:shadow-lg transition relative' src={item.thumbnail} alt={item.title} />
                    </Link>
                    
                    <div className='absolute bottom-0 left-0 w-full h-[41px] bg-black bg-opacity-100 flex items-center justify-center opacity-0 group-hover:opacity-100 '>
                      <h2 className='font-pops font-semibold text-[16px] text-white'>Add to Cart</h2>
                    </div>
                      </div>
                    
                    {/* Product Info */}
                    <h2 className='mb-2 font-pops font-medium text-[16px] mt-[8px]'>{item.title}</h2>
                    <h2 className='mb-2 font-pops font-medium text-[16px] text-[#DB4444]'>${item.price}</h2>
                    <h2 className='mb-2 font-pops font-medium text-[16px]'>Rating: {item.rating}</h2>
                    
                    {/* Add to Cart Button (Hidden by default) */}
                    
                  </div>
                </div>
              ))}
      </div>

      </Container>
      </div>
    </section>
  )
}

export default Shop