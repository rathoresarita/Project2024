import React from 'react'

export const ProductDetails = () => {
  return (
    <div className='mb-1'> clProductDetails
    
    <div className='text-xl xl:text-2xl'> {product.title}</div>
   
    <div>{product.brand}</div>
    <div>{product.avgRating}</div>
   <div>{product.attribute}</div>

   <div>{product.badge}</div>
    </div>
  )
}
