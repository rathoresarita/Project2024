import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {useNavigate,createSearchParams} from 'react-router-dom'

const CarouselCategory = () => {

    const searchCategory = (category) => {  navigate(
        {pathname:"search",
    search:`${
        createSearchParams({
           category:`${category}`,
           searchTerm: ``
        })
    }`

}) }
    return (
        <div className="bg-white m-3">
            <div className="text-2xl font-semibold p-3">Shop By category</div>
            <Swiper slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}

            >

                <SwiperSlide onClick={()=>searchCategory("Deals")}>

                    <img src={'../images/category_0.jpg'}></img>

                </SwiperSlide>

                <SwiperSlide > 

                    <img src={'../images/category_1.jpg'}></img>

                </SwiperSlide>

                <SwiperSlide>

                    <img src={'../images/category_2.jpg'}></img>

                </SwiperSlide>
                <SwiperSlide>

                    <img src={'../images/category_3.jpg'}></img>

                </SwiperSlide>
                <SwiperSlide>

                    <img src={'../images/category_4.jpg'}></img>

                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default CarouselCategory
