import React from 'react'

export const ProductDetails = (product) => {
  return (
    <div className='mb-1'> 
    <div className='text-xl xl:text-2xl'> {product.title}</div>
   
    <div>{product.product.brand}</div>
    <div>{product.product.avgRating}</div>
   <div>{product.product.attribute}</div>

   <div>{product.badge}</div>
    </div>
  )
}
