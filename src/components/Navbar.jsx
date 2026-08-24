

import React, { useState, useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import carticon from "../assets/carticon.png";
import searchicon from "../assets/searchicon.png";
import profileicon from "../assets/profileicon.png";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    setVisible(false);
   navigate("/signin");
  };

  const { cart } = useContext(CartContext);


  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="container-fluid px-4">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-brand fw-bold fs-3"
        >
          SM WEGON
        </Link>

        {/* MENU */}
        <div className="d-flex align-items-center">
          <ul className="d-flex align-items-center gap-4 list-unstyled mb-0 fw-bold">

            <li>
              <NavLink
                to="/"
                className="text-decoration-none text-dark"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="text-decoration-none text-dark"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="text-decoration-none text-dark"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/collection"
                className="text-decoration-none text-dark"
              >
                Collection
              </NavLink>
            </li>

          </ul>
        </div>

        {/* ICONS */}
        <div className="d-flex align-items-center gap-4">

          {/* SEARCH */}
          <img
            src={searchicon}
            alt="search"
            style={{
              width: "22px",
              height: "22px",
              cursor: "pointer",
            }}
          />

          {/* CART */}
          <Link to="/cart">
            <img
              src={carticon}
              alt="cart"
              style={{
                width: "22px",
                height: "22px",
                cursor: "pointer",
              }}
            />

            {cart.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {cart.length}
              </span>
            )}
          </Link>

          {/* PROFILE */}
          <div className="position-relative">

            <img
              src={profileicon}
              alt="profile"
              onClick={() => setVisible(!visible)}
              style={{
                width: "22px",
                height: "22px",
                cursor: "pointer",
              }}
            />

            {/* DROPDOWN */}
            {visible && (
              <div
                className="position-absolute bg-white border rounded shadow"
                style={{
                  right: 0,
                  top: "35px",
                  width: "180px",
                  zIndex: 1000,
                }}
              >

                {!isLoggedIn ? (
                  <NavLink
                    to="/signin"
                    className="d-block text-dark text-decoration-none px-3 py-2"
                    onClick={() => setVisible(false)}
                  >
                    Sign In
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to="/profile"
                      className="d-block text-dark text-decoration-none px-3 py-2"
                      onClick={() => setVisible(false)}
                    >
                      My Profile
                    </NavLink>

                    <NavLink
                      to="/orders"
                      className="d-block text-dark text-decoration-none px-3 py-2"
                      onClick={() => setVisible(false)}
                    >
                      Orders
                    </NavLink>

                    <button
                      onClick={logout}
                      className="w-100 text-start border-0 bg-white text-danger px-3 py-2"
                    >
                      Logout
                    </button>
                  </>
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;