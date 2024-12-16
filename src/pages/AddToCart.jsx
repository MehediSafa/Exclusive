import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const AddToCart = () => {
  return (
    <section>
      <Container>
        {/* top part */}
        <div className='flex'>
          <Link to='/'><h2 className='font-pops font-medium text-[16px] pe-[16px]'>Home</h2></Link>
          <span className='pe-[16px]'>/</span>
          <Link to='/cart'><h2 className='font-pops font-normal text-[14px]'>Cart</h2></Link>
        </div>

        <div className='flex justify-between items-center'>
          <div className='w-[25%]'> 
            <h2 className='font-pops font-normal text-[16px]'>Products</h2>
          </div>
          <div className='w-[25%]'>
            <h2 className='font-pops font-normal text-[16px]'>Price</h2>
          </div>
          <div className='w-[25%]'>
            <h2 className='font-pops font-normal text-[16px]'>Quantity</h2>
          </div>
          <div className='w-[25%]'>
            <h2 className='font-pops font-normal text-[16px]'>Subtotal</h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AddToCart