import { useState } from "react";

function Cart({ cart, setCart }) {

    const [showPayment, setShowPayment] = useState(false);

    function removeItem(index) {
        const updated = [...cart];
        updated.splice(index, 1);
        setCart(updated);
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    function placeOrder() {
        alert("Payment Successful 🎉 Order Placed!");
        setCart([]);
        setShowPayment(false);
    }

    return (
        <div>

            <h1 className="page-title">Shopping Cart 🛒</h1>

            {cart.length === 0 ? (
                <h3 style={{ textAlign: "center" }}>
                    Cart is empty
                </h3>
            ) : (
                <>
                    <div className="card-container">

                        {cart.map((item, index) => (
                            <div className="card" key={index}>

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img"
                                />

                                <h3>{item.title}</h3>

                                <p>₹ {item.price}</p>

                                <button onClick={() => removeItem(index)}>
                                    Remove
                                </button>

                            </div>
                        ))}

                    </div>

                    <h2 style={{ textAlign: "center" }}>
                        Total: ₹ {total.toFixed(2)}
                    </h2>

                    <div style={{ textAlign: "center" }}>

                        <button
                            onClick={() => setShowPayment(true)}
                            style={{
                                padding: "10px 20px",
                                background: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer"
                            }}
                        >
                            Proceed to Pay 💳
                        </button>

                    </div>
                </>
            )}

            {/* PAYMENT BOX */}
            {showPayment && (
                <div style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <div style={{
                        background: "white",
                        padding: "30px",
                        borderRadius: "10px",
                        textAlign: "center",
                        width: "300px"
                    }}>

                        <h2>Payment</h2>

                        <p>Total Amount: ₹ {total.toFixed(2)}</p>

                        <button
                            onClick={placeOrder}
                            style={{
                                background: "blue",
                                color: "white",
                                padding: "10px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginTop: "10px"
                            }}
                        >
                            Pay Now
                        </button>

                        <br /><br />

                        <button
                            onClick={() => setShowPayment(false)}
                            style={{
                                background: "red",
                                color: "white",
                                padding: "8px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
}

export default Cart;