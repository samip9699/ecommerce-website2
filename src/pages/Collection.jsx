import React, { useContext } from "react";
import "../Home.css";
import { CartContext } from "../context/CartContext";
import burger_img from "../assets/burger_img.jpg";
import pizza_img from "../assets/pizza_img.jpg";
import sandwich_img from "../assets/sandwich_img.jpg";
import coffee_img from "../assets/coffee_img.jpg";
import pasta_img from "../assets/pasta_img.jpg";
import streetfood_img from "../assets/streetfood_img.jpg";
import chiken_img from "../assets/chiken_img.jpg";
import dersert_img from "../assets/dersert_img.jpg";

import salad_img from "../assets/salad_img.jpg";
import loadedburger_img from "../assets/loadedburger_img.jpg";
import loadedfries_img from "../assets/loadedfries_img.jpg";
import onionring_img from "../assets/onionring_img.jpg";


const Collection = () => {
  const { cart, setCart } = useContext(CartContext);

  const foodItems = [
    {
      id: 1,
      name: "Classic Burger",
      category: "Burger",
      price: 14.99,
      image: burger_img,
    },

    {
      id: 2,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 20.99,
      image: pizza_img,
    },

    {
      id: 3,
      name: "Chicken Sandwich",
      category: "Sandwich",
      price: 12.99,
      image: sandwich_img,
    },

    {
      id: 4,
      name: "Hot Coffee",
      category: "Coffee",
      price: 5.99,
      image: coffee_img,
    },

    {
      id: 5,
      name: "Truffle Mushroom Pasta",
      category: "Pasta",
      price: 13.99,
      image: pasta_img,
    },

    {
      id: 6,
      name: "Street Food Special",
      category: "Street Food",
      price: 10.99,
      image: streetfood_img,
    },

    {
      id: 7,
      name: "Nashville Hot Chicken",
      category: "Chicken",
      price: 13.99,
      image: chiken_img,
    },

    {
      id: 8,
      name: "Chocolate Cake",
      category: "Dessert",
      price: 8.99,
      image: dersert_img,
    },

    {
      id: 9,
      name: "Fresh Salad",
      category: "Salad",
      price: 9.99,
      image: salad_img,
    },

    {
      id: 10,
      name: "Loaded Burger",
      category: "Burger",
      price: 16.99,
      image: loadedburger_img,
    },

    {
      id: 11,
      name: "Loaded Fries",
      category: "Fries",
      price: 8.99,
      image: loadedfries_img,
    },

    {
      id: 12,
      name: "Crispy Onion Rings",
      category: "Sides",
      price: 7.99,
      image: onionring_img,
    },
  ];
  return (
    <div className="collection-page">
      <div className="title text-center">
        <h3> our collection</h3>
        <h1> we offer delicious food for you.</h1>
        <p>
          Explore our delicious selection of burgers, pizzas,
          pasta, desserts and more.
        </p>

      </div>
      <div className="container">
        <div className="row g-4">
          {foodItems.map((food) => (
            <div
              className="col-md-6 col-lg-4"
              key={food.id}
            >
              <div className="food-card">

                <img
                  src={food.image}
                  alt={food.name}
                  className="food-card-img"
                />

                <div className="food-card-body">

                  <span className="food-category">
                    {food.category}
                  </span>

                  <h2>
                    {food.name}
                  </h2>

                  <div className="food-bottom">

                    <h3>
                      ${food.price}
                    </h3>

                    <button onClick={() => setCart([...cart, food])}>
                      🛒 Add to Cart
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;