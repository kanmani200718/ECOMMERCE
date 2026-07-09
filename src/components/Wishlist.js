function Wishlist({ wishlist, removeFromWishlist }) {

    return (
        <div>

            <h1 className="page-title"><i>KANMANI'S</i> Wishlist ❤️</h1>

            {wishlist.length === 0 ? (
                <h3 style={{ textAlign: "center" }}>
                    Wishlist is empty
                </h3>
            ) : (
                <div className="card-container">

                    {wishlist.map(item => (
                        <div className="card" key={item.id}>

                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img"
                            />

                            <h3>{item.title}</h3>

                            <p>₹ {item.price}</p>

                            <button onClick={() => removeFromWishlist(item.id)}>
                                Remove
                            </button>

                        </div>
                    ))}

                </div>
            )}

        </div>
    );
}

export default Wishlist;