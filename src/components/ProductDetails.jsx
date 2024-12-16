import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    // to match id
    let productId = useParams()
    let [singleProduct, setSingleProduct] = useState([])
    
    
    let getSingleProduct  = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
               setSingleProduct(response.data);
                
        })
    }



    
    
    useEffect(()=> {
        getSingleProduct()
    },[])
  return (
    <section>
        <Container>
           
             <div className='flex justify-between items-center'>
             {/* all images */}
             <div className='w-[18%]'>
                    
             </div>
             {/* main image */}
             
             <div className='w-[48%]'>
                    <img className='w-full' src={singleProduct.thumbnail} alt="" />
             </div>
             {/* details */}
             <div className='w-[28%]'>
                 <h2 className='font-inter font-bold text-[26px] pb-[16px]'> {singleProduct.title}</h2>
                 <h2 className='font-inter font-bold text-[26px] pb-[16px]'>{singleProduct.rating}</h2>
                 <h2 className='font-pops font-normal text-[14px] pb-[16px]'>{singleProduct.description}</h2>
             </div>
             

         </div>
           
           
        </Container>
    </section>
  )
}

export default ProductDetails