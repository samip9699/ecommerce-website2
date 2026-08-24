import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PlaceOrder from "./pages/PlaceOrder";
import CartProvider from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Place-Order" element={<PlaceOrder/>}/>
          <Route path="/collection" element={<Collection />} />
            <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;