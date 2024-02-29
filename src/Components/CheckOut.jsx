import React, { useDebugValue } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { GB_CURRENCY } from '../utils/Constants'

import { removeFromCart } from '../Components/redux/cartSlice'


const CheckOut = () => {
    const products = useSelector((state) => state.cart.products)
    console.log('products', products)
   const dispatch=useDispatch()


    const subtotal = useSelector((state) => state.cart.products.reduce((subtotal, product) => subtotal + (product.price * product.quantity), 0))
    console.log('subtotal ', subtotal)

    const itmesNumber = useSelector((state) => state.cart.productsNumber)
    console.log('item', itmesNumber)
    return (
        <div className='h-screen bg-amazoncone-background'>
            <div className='min-w-[1000px] mx-w-[1500px] m-auto pt-8'>
                <div className='grid grid-cols-8'>
                    {/* Products */}
                    <div className='col-span-6  bg-white'>
                        <div className='text-2xl xl:text-3xl m-4'> Shopping Cart</div>
                        {
                            products.map(products => {
                                return (<div key={products.id}>
                                    <div className='grid grid-cols-12 divide-y  divide-gray-400 m-4'>

                                        <div className='col-span-10 grid grid-cols-8 divide-y  divide-gray-400 '>


                                            <div className='col-span-2'>
                                                <Link to={`/product/${products.id}`}>

                                                    <img className='p-4 m-auto' src={products.image_small}></img>
                                                </Link>

                                            </div>
                                            <div className='col-span-6'>
                                                <div className='font-medium text-black mt-2'>
                                                    <Link to={`/product/${products.id}`}>

                                                        <ProductDetails product={products} ratings={false}></ProductDetails>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <button className='text-sm xl:text-base font-semibold rounded-s text-blue-500 mt-2 mb-1' onClick={()=>{dispatch(removeFromCart(products.id))}}>Delete</button>
                                                </div>
                                                <div

                                                    className='grid grid-cols-3 w-20 text-center'>

                                                    <div className='text-xl xl:text-2xl bg-gray-400 rounded'>- </div>
                                                    <div className='text-xl xl:text-xl bg-gray-200'>{products.quantity} </div>
                                                    <div className='text-xl xl:text-2xl bg-gray-400 rounded'>+</div>

                                                </div>


                                            </div>
                                        </div>

                                        <div className='col-span-2'>
                                            <div className='text-lg xl:text-xl mt-2 mr-4 font-semibold'>{GB_CURRENCY.format(products.price)}</div>
                                        </div>
                                    </div>

                                </div>)
                            })
                        }
                        <div className='text-lg xl:text-xl text-right mb-4 mr-4'>Subtotal({itmesNumber}itmes):<span className='font-semibold'>{GB_CURRENCY.format(subtotal)}</span></div>

                    </div>
                    {/* Checkout */}
                    <div className='col-span-2 bg-white rounded h-[250px]' >

                        <div className='text-xs xl:text-sm text text-green-800'>Your order qualifies for<span className='font-bold'>Free Delivery</span>.Delivery Details</div>

                        <div className='text-base xl:text-base text-right mb-4 '>Subtotal({itmesNumber}itmes):<span className='font-semibold'>{GB_CURRENCY.format(subtotal)}</span></div>
                        <button className='btn'>proceed to checkout</button>

                    </div>




                </div>
            </div>

        </div>
    )
}

export default CheckOut
