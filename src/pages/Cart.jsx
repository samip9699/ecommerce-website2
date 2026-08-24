import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: (item.quantity || 1) + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: (item.quantity || 1) - 1,
          };
        }

        return item;
      })
      .filter((item) => (item.quantity || 1) > 0);

    setCart(updatedCart);
  };

  // Calculate Grand Total
  const getCartAmount = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <h3 className="text-center text-muted">
          Your Cart is Empty
        </h3>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((food) => (
              <div
                className="col-md-6 col-lg-4"
                key={food.id}
              >
                <div className="card h-100">
                  
                  <img
                    src={food.image}
                    alt={food.name}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body">
                    <h5>
                      {food.name}
                    </h5>

                    <p className="text-muted">
                      {food.category}
                    </p>

                    {/* Price */}
                    <h4 className="text-danger">
                      ₹{food.price}
                    </h4>

                    {/* Quantity */}
                    <div className="d-flex align-items-center gap-2 my-3">
                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() =>
                          decreaseQuantity(food.id)
                        }
                      >
                        −
                      </button>

                      <span className="fw-bold">
                        {food.quantity || 1}
                      </span>

                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() =>
                          increaseQuantity(food.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <h5>
                      Total: ₹
                      {(
                        food.price *
                        (food.quantity || 1)
                      ).toFixed(2)}
                    </h5>

                    {/* Remove Button */}
                    <button
                      className="btn btn-danger w-100 mt-3"
                      onClick={() =>
                        removeFromCart(food.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grand Total */}
          <div className="text-end mt-5">
            <h3>
              Grand Total:{" "}
              <span className="text-danger">
                ₹{getCartAmount().toFixed(2)}
              </span>
            </h3>

            <Link to="/place-order">
              <button className="btn btn-dark mt-3">
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;