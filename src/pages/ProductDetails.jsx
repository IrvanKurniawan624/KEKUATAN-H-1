import { useState } from "react";
import { useParams } from "react-router-dom";
import DataProduct from "../assets/JSON/product.json";
import DataKategori from "../assets/JSON/category.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";

import '../assets/css/swiper-product.css'

const ProductDetails = () => {
    const {slug} = useParams();
    const DetailProduct = DataProduct.find((Product) => Product.slug == slug);
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const Kategori = DataKategori.find((Kategori) => DetailProduct.category_id === Kategori.id);

    const [isExpanded, setIsExpanded] = useState(false);

    const [selectedType, setSelectedType] = useState(DetailProduct.type[0]);

    const handleChangeType = (type) => {
        setSelectedType(type);
    }

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-20 mt-32 content-container p-9">
            <div className="col-span-2 content-container p-8 box-border max-h-100">
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2">
                        {DetailProduct.img.map((image, index) => {
                        return (
                            <SwiperSlide key={index}> 
                            <img src={`/images/product/${image}`} alt={`Product image ${index + 1}`} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={2}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper3">
                        {DetailProduct.img.map((image, index) => {
                        return (
                            <SwiperSlide key={index}> 
                            <img src={`/images/product/${image}`} alt={`Thumbnail ${index + 1}`} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="col-span-3 relative">
                <a href="/" className="absolute right-0 top-0 text-white bg-blue-800 rounded-2xl py-2 px-4 hover:bg-blue-950">Kembali Ke Dashboard</a>
                <p className="text-xl font-semibold text-blue-900 uppercase">{Kategori.nama}</p>
                <h2 className="text-2xl font-semibold text-black my-5">{DetailProduct.nama}</h2>
                <h2 className="text-2xl font-bold text-black my-5">Rp.{formatNumber(DetailProduct.price)}</h2>
                <div className="product-info">
                    <h3 className="block font-semibold text-black">Deskripisi : </h3>
                    <p className={`text-xs text-gray-400 ${isExpanded ? '' : 'max-h-[130px] overflow-hidden'}`} style={{ whiteSpace: 'pre-line', transition: 'max-height 0.3s ease' }}>{DetailProduct.desc}</p>
                    <button className="text-blue-500 mt-2"onClick={toggleExpand}>{isExpanded ? 'Read Less' : 'Read More'}</button>
                </div>
                <div className="w-full relative">
                    <h3 className="block font-semibold text-black mt-4">Type : </h3>
                    <div className="flex flex-wrap gap-4 justify-between mt-3">
                        <ul className="list-none p-0 flex gap-4">
                            {DetailProduct.type.map((type, index) => {
                                return <li key={index} className={`inline-block py-2 px-6 rounded-md border-2 hover:cursor-pointer border-gray-500 ${(selectedType == type) ? 'bg-black text-white' : 'hover:bg-gray-300'}`} onClick={() => handleChangeType(type)}>{type}</li>
                            })}
                        </ul>
                        <button type="button" className="py-2 px-4 float-right font-semibold bg-blue-900 text-white"><FontAwesomeIcon icon={faCartPlus} className="me-3" />Tambah Keranjang</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails;