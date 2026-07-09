import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import About from "./components/About";

import "./App.css";

function App() {

    // 🛒 CART STATE
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart([...cart, product]);
    }

    // ❤️ WISHLIST STATE
    const [wishlist, setWishlist] = useState([]);

    function addToWishlist(product) {
        const exists = wishlist.find(item => item.id === product.id);

        if (!exists) {
            setWishlist([...wishlist, product]);
        }
    }

    function removeFromWishlist(id) {
        setWishlist(wishlist.filter(item => item.id !== id));
    }

    return (
        <BrowserRouter>

            {/* HEADER */}
            <Header
                cartCount={cart.length}
                wishlistCount={wishlist.length}
            />

            <Routes>

                {/* HOME */}
                <Route path="/" element={<Home />} />

                {/* PRODUCTS */}
                <Route
                    path="/products"
                    element={
                        <Products
                            addToCart={addToCart}
                            addToWishlist={addToWishlist}
                        />
                    }
                />

                {/* PRODUCT DETAILS */}
                <Route
                    path="/products/:id"
                    element={<ProductDetails addToCart={addToCart} />}
                />

                {/* CART */}
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            setCart={setCart}
                        />
                    }
                />

                {/* ❤️ WISHLIST PAGE */}
                <Route
                    path="/wishlist"
                    element={
                        <Wishlist
                            wishlist={wishlist}
                            removeFromWishlist={removeFromWishlist}
                        />
                    }
                />

                {/* ABOUT */}
                <Route path="/about" element={<About />} />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;