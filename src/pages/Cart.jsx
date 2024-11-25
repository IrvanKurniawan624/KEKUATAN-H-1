import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import DataProduct from "../assets/JSON/product.json";


const Cart = ({cart, setCart}) => {

    const navigate = useNavigate(); 
    useEffect(() => {
        if (localStorage.getItem('isLogged') === 'false') {
        navigate('/login'); 
        }
    }, [navigate]);

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const handleCheckout = () => {
        setCart([]);
        localStorage.removeItem("cart");
        navigate('/'); 
    }

    let total = 0;

    return (
        <div className="mt-32 content-container w-full">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Keranjang Saya</h1>
                <a href="/" className="text-white bg-blue-800 rounded-2xl py-2 px-4 hover:bg-blue-950"><FontAwesomeIcon icon={faArrowCircleLeft} className="me-3"/> Kembali Ke Dashboard</a>
            </div>
            <table className="w-full mt-10 text-center text-gray-500 font-semibold text-xs">
                <thead className="uppercase text-gray-700 text-xs bg-gray-100 font-bold py-10">
                    <tr>
                        <td className="px-6 py-3">Produk</td>
                        <td className="px-6 py-3">Harga</td>
                        <td className="px-6 py-3">Qty</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cart, index) => {
                        let DetailProduct = DataProduct.find((Product) => Product.id == cart.product_id);
                        total += DetailProduct.price;
                        
                        return (
                            <tr key={index}>
                                <td className="flex items-center gap-3">
                                    <div className="img-content w-32">
                                        <img src={`/public/images/product/${DetailProduct.img[0]}`} className="object-contain" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black text-sm">{DetailProduct.nama}</h3>
                                        <p className="text-gray-400 text-start">{cart.product_type}</p>
                                    </div>
                                </td>
                                <td>
                                    <h3 className="text-black text-sm">Rp. {formatNumber(DetailProduct.price)}</h3>
                                </td>
                                <td>
                                    <h3 className="text-black text-base">Rp. {formatNumber(DetailProduct.price)}</h3>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th className="bg-gray-100 text-black font-bold text-base py-5 uppercase " colSpan={2}>TOTAL : </th>
                        <th className="bg-gray-100 text-black font-bold text-base py-5 uppercase ">Rp. {formatNumber(total)}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="flex justify-end">
                <button className="py-3 px-8 mt-8 bg-green-800 text-white" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;