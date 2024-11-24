import DataProduct from "../assets/JSON/product.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    return (
        <div className="product-section my-5">
            <h2 className="font-bold text-black text-3xl">Produk</h2>
            <ul className="list-none grid grid-cols-6 mt-7 gap-5">
                {DataProduct.map((Product, index) => (
                    <li key={index} >
                        <a href={`/category/${Product.slug}`}>
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