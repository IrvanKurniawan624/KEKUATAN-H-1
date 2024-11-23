import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Banner1 from '../assets/images/banner/Banner-1.svg';
import Banner2 from '../assets/images/banner/Banner-2.svg';
import Banner3 from '../assets/images/banner/Banner-3.svg';

const SwiperSection = () => {
    return (
        <div className="swiper-section -mx-44 -z-20">
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
            <SwiperSlide className='w-full h-400px'>
                <img src={Banner1} className='object-cover h-auto w-full' alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide className='w-full h-400px'>
                <img src={Banner2} className='object-cover h-auto w-full' alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide className='w-full h-400px'>
                <img src={Banner3} className='object-cover h-auto w-full' alt="Slide 3" />
            </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperSection