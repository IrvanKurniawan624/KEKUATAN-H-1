import DataKategori from '../assets/JSON/category.json'

const Category = () => {
    return (
        <div className="category-section my-5">
            <h2 className="font-bold text-black text-3xl">Kategori Produk</h2>
            <ul className="list-none grid grid-cols-5 mt-7 gap-8">
                {DataKategori.map((Kategori, index) => (
                    <li key={index} >
                        <a href={`/category/${Kategori.slug}`}>
                            <div className="flex flex-col justify-center align-middle gap-2 content-container h-56 transition hover:cursor-pointer hover:bg-slate-300">
                                <div className="img-content w-32 m-auto">
                                    <img src={`/images/element/${Kategori.img}`} className="w-full" alt={Kategori.nama} />
                                </div>
                                <h6 className="text-center text-xl text-black font-semibold">{Kategori.nama}</h6>
                            </div>
                        </a>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export default Category;