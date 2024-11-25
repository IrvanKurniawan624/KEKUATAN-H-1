import Product from "../components/Product";
import { useParams } from "react-router-dom";
import DataCategory from "../assets/JSON/category.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const ProductByCategory = () => {
    const {slug} = useParams();
    const DetailCategory = DataCategory.find((Category) => Category.slug == slug);

    return(
        <div className="mt-36">
            <div className="w-full flex justify-center md:justify-start">
                <a href="/" className="text-white bg-blue-800 rounded-2xl py-2 px-4 hover:bg-blue-950"><FontAwesomeIcon icon={faArrowCircleLeft} className="me-3"/> Kembali Ke Dashboard</a>
            </div>
            <h2 className="mt-7 font-bold text-black text-center content-container text-3xl">Kategori {DetailCategory.nama}</h2>
            <Product Category_id={DetailCategory.id}/>
        </div>
    )
}

export default ProductByCategory;