import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails(props)
{
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data));

    }, [id]);

    if(!product)
    {
        return <h2>Loading...</h2>;
    }

    return (

        <div className="details-box">

            <button onClick={() => navigate(-1)}>
                Back
            </button>

            <img
                src={product.image}
                alt="product"
                className="details-img"
            />

            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <h3>
                ₹ {product.price}
            </h3>

            <button
                onClick={() => props.addToCart(product)}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductDetails;