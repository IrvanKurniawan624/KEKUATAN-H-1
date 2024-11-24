import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Banner1 from '../assets/images/banner/Banner-1.svg';
import Banner2 from '../assets/images/banner/Banner-2.svg';
import Banner3 from '../assets/images/banner/Banner-3.svg';

const SwiperSection = () => {
    return (
        <div className="swiper-section lg:-mx-44 -z-20 mt-28">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation                         
            pagination={{ clickable: true }}  
            spaceBetween={-25}         
            loop        
            slidesPerView={1}
            autoplay={{
                delay: 3000,                      
                disableOnInteraction: false,      
            }}                 
            className="w-full"                  
            >
            <SwiperSlide className='w-full h-52 lg:h-96'>
                <img src={Banner1} className='object-contain lg:object-contain h-full lg:h-auto w-full' alt="Banner-1" />
            </SwiperSlide>
            <SwiperSlide className='w-full h-52 lg:h-96'>
                <img src={Banner2} className='object-contain lg:object-contain h-full lg:h-auto w-full' alt="Banner-2" />
            </SwiperSlide>
            <SwiperSlide className='w-full h-52 lg:h-96'>
                <img src={Banner3} className='object-contain lg:object-contain h-full lg:h-auto w-full' alt="Banner-3" />
            </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperSection