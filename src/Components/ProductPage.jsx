import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { callApi } from '../utils/CallApi'



const ProductPage = () => {
    const { id } = useParams()
    const [product,setProduct]=useState(null)
    const getProduct = () => {
        callApi(`data/products.json`).then((productResult) => {
            setProduct(productResult[id])
            console.log('Product Result:', productResult[id]);
    
            // Rest of the code...
        });
    };
    
    
    useEffect(()=>{
getProduct()
    },[])

if(!product?.title)
{
    return <h1>Loading Product ....</h1>
}
    return (
        product &&
        <div className='h-screen bg-amazonclone-background'>
            <div className='min-w-[1000px] max-w-[1000px] m-auto bg-orange-400'></div>
            <div className='grid  grid-cols-10'>
                {/* left */}
                <div className='col-span-3  p-8 rounded bg-white m-auto'>
                    <img src={`${product.image}`}></img>

                </div> 
                 {/* mid */}
                 <div className='col-span-5  bg-pink-400'>
                    <div></div>
                    <div></div>

                 </div >
 {/* right*/}
                 <div className='col-span-5  bg-green-400'></div>
                 
            </div >
            Product  {product.title}
        </div>
    )
}

export default ProductPage
