import { useState } from "react";
import DataProduct from "../assets/JSON/product.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSearch } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
    
    const [searchInput, setSearchInput] = useState('');
    
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
        
    };

    const filteredData = DataProduct.filter((product) => {
        const product_nama = product.nama || '';
        const product_keyword = product.keyword || '';
        return (
            product_nama.toLowerCase().includes(searchInput.toLowerCase()) ||
            product_keyword.toLowerCase().includes(searchInput.toLowerCase())
        );
        
    });

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return (
        <div className="product-section my-5">
            <div className="w-full flex flex-col gap-5 md:flex-row justify-between items-center">
                <h2 className="font-bold text-black text-center sm:text-start text-3xl">Produk</h2>
                <div className="w-80 mx-auto md:mx-0">   
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                        </div>
                        <input type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Produk" value={searchInput} onChange={handleSearchChange} />
                    </div>
                </div>
            </div>
            <ul className="list-none grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-7 gap-5 content-container">
                {filteredData.map((Product, index) => (
                    <li key={index}>
                        <a href={`/product-details/${Product.slug}`} >
                            <div className="flex flex-col justify-start align-middle gap-1 h-64">
                                <div className="img-content w-full bg-white h-44">
                                        <img src={`/images/product/${Product.img[0]}`} className="w-full h-full object-contain" alt={Product.slug + '1'} />
                                </div>
                                <div className="product-info">
                                    <h6 className="text-start text-sm text-black line-clamp-2 overflow-hidden">{Product.nama}</h6>
                                    <h5 className="text-start text-base text-black font-semibold line-clamp-1 overflow-hidden">Rp{formatNumber(Product.price)}</h5>
                                    <p className="text-xs text-gray-500">
                                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" /><span> | {Product.stars}.0</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default Product;