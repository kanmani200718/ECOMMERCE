import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products(props) {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data));
    }, []);

   const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
);

    return (
        <div>

            <h1 className="page-title">
                Products
            </h1>

            {/* 🔍 SEARCH */}
            <input
                type="text"
                placeholder="Search Product"
                className="search-box"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="card-container">

                {filteredProducts.map((p) => (
                    <div className="card" key={p.id}>

                        {/* 🖼 IMAGE */}
                        <img
                            src={p.image}
                            alt="product"
                            className="card-img"
                            onClick={() => navigate(`/products/${p.id}`)}
                        />

                        <h3>{p.title}</h3>

                        <p>₹ {p.price}</p>

                        {/* 🛒 ADD TO CART */}
                        <button onClick={() => props.addToCart(p)}>
                            Add to Cart
                        </button>
<br></br>
<br></br>

                        {/* ❤️ WISHLIST BUTTON (ADD THIS) */}
                        <button onClick={() => props.addToWishlist(p)}>
                            Wishlist ❤️
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Products;