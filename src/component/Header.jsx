import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag } from "react-icons/fa";

const Header = ({ cart }) => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="img" />
      </Link>

      <div className="addcart_profile">
        <ul>
          <div class="dropdown">
            <button
              type="button"
              className="btn py-1 "
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <li>
                <FaUser />
              </li>
              <li>Profile</li>
            </button>
            <form
              className="dropdown-menu p-4  "
              style={{ width: "250px", height: "250px" }}
            >
              <div className="mb-3">
                <h4>Hello User</h4>
                <h6>To access your account</h6>
              </div>
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
              <hr />
              <button type="submit" class="btn">
                <span>
                  <FaShoppingBag />
                </span>
                <b>My Order</b>
              </button>
            </form>
          </div>
        </ul>
        <ul>
          <Link to="/Cart">
            <button type="button" className=" btn position-relative py-1">
              <li>
                <FaShoppingBag />
              </li>
              <li>Cart</li>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
