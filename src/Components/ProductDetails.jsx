import React from 'react'
import ProductBadge  from './ProductBadge'
 const ProductDetails = (product) => {
  return (
    <div className='mb-1'> 
    <div className='text-xl xl:text-2xl font-medium mb-1'> {product.product.title}</div>
   
    <div className='text-sm xl:text-base mb-1'>{product.product.avgRating}</div>
   <div className='text-sm xl:text-base  mb-1'> {product.product.attribute}</div>

   <div > <ProductBadge badge={product.product.badge}></ProductBadge></div>
   <div></div>
    </div>
  )
}
export default ProductDetails