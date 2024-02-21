import React from 'react'
import { StarIcon} from '@heroicons/react/24/outline'

 const ProductRatings = (props) => {
  const startNumber=props.avgRatings
  console.log('s',startNumber)
  const ratingNumber=props.ratings
  console.log('rat',ratingNumber)

  return (
    <div className='flex'>
      {Array.from({length:startNumber},(_,i)=><StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]'></StarIcon>)}
   
      {Array.from({length:startNumber},(_,i)=><StarIcon key={i} className='stroke-[#F1B61F] fill-[#F1B61F] h-[20px]'></StarIcon>)}
   
   <span className='ml-3 text-blue-500'> {ratingNumber}</span>
    </div>
  )
}

export default ProductRatings