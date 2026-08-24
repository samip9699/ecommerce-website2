import burger_img from "../assets/burger_img.jpg";
import pizza_img from "../assets/pizza_img.jpg";
import chiken_img from "../assets/chiken_img.jpg";
import wrap_img from "../assets/wrap_img.jpg";
import dersert_img from "../assets/dersert_img.jpg";
import pasta_img from "../assets/pasta_img.jpg";
import salad_img from "../assets/salad_img.jpg"
import loadedburger_img from "../assets/loadedburger_img.jpg"
import loadedfries_img from "../assets/loadedfries_img.jpg"
import onionring_img from "../assets/onionring_img.jpg"
import sandwich_img from "../assets/sandwich_img.jpg";
import coffee_img from "../assets/coffee_img.jpg";
import streetfood_img from "../assets/streetfood_img.jpg";


const products = [
    {
         id: 1,
    name: "Classic Smash Burger",
    category: "Burger",
    price: 14.99,
    image: burger_img,
    rating: 4.5,
    description: "Double smashed patty with cheddar cheese and special sauce."
    },

    {
        id: 2,
        name: "Margherita Royale",
        Category: "pizza",
        prize: 20.99,
        image: pizza_img,
        rating: 4.8,
        description:"Fresh mozzarella, tomato sauce and basil on a crispy base."
    },
    {
        id: 3,
        name:"Nashville Hot Chicken",
        Category:"chicken",
        price: 13.99,
        image:chiken_img,
        rating:4.6,
        description:"Extra crispy chicken with our signature spicy sauce."
        
    },
    
    {
        id: 4,
        name:"Loaded Fajita Wrap",
        category:"wrap",
        price: 14.99 ,
        image: wrap_img,
        rating:4.4,
        description:"Grilled chicken, vegetables, cheese and special sauce."
    },
     {
        id: 5,
        name:" Dabu Chocolate Cake",
        category:"dessert",
        price:20.99 ,
        image:dersert_img,
        rating:5.0,
        description:" Warm chocolate cake with a delicious chocolate center."
    },
     {
        id: 6,
        name:"Truffle Mushroom Pasta",
        category:"pasta",
        price:13.99 ,
        image:pasta_img,
        rating:4.7,
        description:" Creamy mushroom pasta with premium truffle sauce"
    },

{
  id: 7,
  name: "Loaded Cheese Burger",
  category: "Burger",
  price: 17.99,
  image: loadedburger_img,
  rating: 4.8,
  description:
    "Juicy beef patty loaded with melted cheese, crispy onions and special burger sauce."
},

{
  id: 8,
  name: "Loaded Fries",
  category: "Fries",
  price: 10.99,
  image: loadedfries_img,
  rating: 4.6,
  description:
    "Crispy golden fries topped with melted cheese, sauces and delicious toppings."
},

{
  id: 9,
  name: "Crispy Onion Rings",
  category: "Sides",
  price: 7.99,
  image: onionring_img,
  rating: 4.4,
  description:
    "Golden crispy onion rings served with our creamy signature dipping sauce."
},
{
  id: 10,
  name: "Fresh Garden Salad",
  category: "Salad",
  price: 8.99,
  image: salad_img,
  rating: 4.5,
  description:
    "Fresh vegetables, crispy lettuce, tomatoes, cucumber and our special dressing."
},
{
  id: 11,
  name: "Cheese Grilled Sandwich",
  category: "Sandwich",
  price: 9.99,
  image: sandwich_img,
  rating: 4.5,
  description:
    "Crispy grilled bread filled with melted cheese and fresh vegetables."
},

{
  id: 12,
  name: "Classic Cappuccino",
  category: "Coffee",
  price: 6.99,
  image: coffee_img,
  rating: 4.6,
  description:
    "Rich espresso with steamed milk and creamy milk foam."
},

{
  id: 13,
  name: "Loaded Street Food",
  category: "Street Food",
  price: 11.99,
  image: streetfood_img,
  rating: 4.4,
  description:
    "A delicious combination of crispy street food and our special sauces."
},
   
];
export default products;