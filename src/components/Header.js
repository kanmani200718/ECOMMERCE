import { NavLink } from "react-router-dom";

function Header({ cartCount, wishlistCount }) {

    return (
        <ul className="navbar">

            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Products
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    About
                </NavLink>
            </li>

            {/* 🛒 CART */}
            <li>
                <NavLink
                    to="/cart"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Cart 🛒 ({cartCount})
                </NavLink>
            </li>

            {/* ❤️ WISHLIST */}
            <li>
                <NavLink
                    to="/wishlist"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Wishlist ❤️ ({wishlistCount})
                </NavLink>
            </li>

        </ul>
    );
}

export default Header;