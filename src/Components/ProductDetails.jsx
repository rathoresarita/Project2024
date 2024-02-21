import React from 'react'
import ProductBadge  from './ProductBadge'
import ProductRatings from './ProductRatings'
 const ProductDetails = (product,ratings) => {
  console.log('ratings',product.ratings)
   ratings=product.ratings
  return (
    <div className='mb-1'> 
    <div className='text-xl xl:text-2xl font-medium mb-1'> {product.product.title}</div>

    <div className='text-xl xl:text-2xl font-medium mb-1'> <span className='text-blue-500'>{product.product.brand}</span></div>
   {ratings &&
    <div className='text-sm xl:text-base mb-1'> <ProductRatings avgRatings={product.product.avgRating} ratings={product.product.ratings}></ProductRatings></div>
   }
   <div className='text-sm xl:text-base  mb-1'> {product.attribute}</div>

   <div > <ProductBadge badge={product.product.badge}></ProductBadge></div>
   <div></div>
    </div>
  )
}
export default ProductDetails