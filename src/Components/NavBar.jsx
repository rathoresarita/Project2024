import React from 'react'
import Search from './Search'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
const NavBar = () => {
    return (
        <header className='min-w-w[1000px]'>
            <div className='flex bg-amazonclone text-white h-[60px'>
                {/* left */}
                <div className='flex itmes-center m-4'>
                    <img className='h-[35px] w- [100px] m-2' src={"../images/amazon.png"}></img>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Deliver to</div>
                        <div className='text-sm xl:text-base font-bold'>United Kingdom</div>
                    </div>
                </div>

                {/* Mid */}
                <div className='flex grow relative items-center'>
                    <Search></Search>
                </div>


                {/* Right */}
                <div className='flex items-center m-4'>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Hello sign  in</div>
                        <div className='text-sm xl:text-base font-bold'>Accounts & List</div>
                    </div>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Returns </div>
                        <div className='text-sm xl:text-base font-bold'>Orders</div>
                    </div>
                    <div className='flex pr-3 pl-3 '>
                        <ShoppingCartIcon className='h-[48px]'></ShoppingCartIcon>
                        <div className='mt-7 text-xs xl:text-sm font-bold'>cart</div>
                    </div>
                </div>
            </div>
            <div className=' flex  text-white bg-amazonclone-ligt_blue space-x-3 text-xs xl:text-sm p-2 pl-6' >
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>GiftCards</div>
            <div>Sell</div>
            </div>
        </header>
    )
}

export default NavBar
