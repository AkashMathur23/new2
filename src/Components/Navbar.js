import React from "react";
import {
  FaSistrix,
  FaUserCircle,
  FaBookmark,
  FaShoppingBag,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-left">
          {" "}
          <a href="">TANN TRIM </a>
        </div>

        <div className="icons-right">
          <div className="icons">
            <a href="">
              <FaSistrix />
            </a>
          </div>
          <div className="icons">
            <a href="">
              <FaUserCircle />
            </a>
          </div>
          <div className="icons">
            <a href="">
              <FaBookmark />
            </a>
          </div>
          <div className="icons">
            <a href="">
              <FaShoppingBag />
            </a>
          </div>
        </div>
      </div>

      <div className="categories">
      <div className="categories-bottom">
        <a href="/">
          <h2>Bags</h2>
        </a>
        <a href="/">
          <h2>Travels</h2>
        </a>
        <a href="/">
          <h2>Accesories</h2>
        </a>
        <a href="/">
          <h2>Gifting</h2>
        </a>
        <a href="/">
          <h2>Jewelery</h2>
        </a>
      </div>
      </div>

      <div className="container-product">
        <div>
          <a href="img">
            <img src="/img/allbag.jpg" alt="error" />
            <h3>All Bags</h3>
          </a>
        </div>
        <div>
          <a href="img">
            <img src="/img/dufflebag.jpg" alt="error" />
            <h3>Duffle Bags</h3>
          </a>
        </div>
        <div>
          <a href="img">
            <img src="/img/handbag.jpg" alt="error" />
            <h3>Hand Bags</h3>
          </a>{" "}
        </div>
        <div>
          <a href="img">
            <img src="/img/laptopsleeve.jpg" alt="error" />
            <h3>Laptop Sleeve</h3>
          </a>
        </div>
        <div>
          <a href="img">
            <img src="/img/messengerbag.jpg" alt="error" />
            <h3>Messenger Bags</h3>
          </a>
        </div>
        <div>
          <a href="img">
            <img src="/img/slingsbag.jpg" alt="error" />
            <h3>Slings Bags</h3>
          </a>
        </div>
        <div>
          <a href="img">
            <img src="/img/totebag.jpg" alt="error" />
            <h3>Tote Bags</h3>
          </a>
        </div>
        <div>
          <a href="img">
            <img src="/img/vanitypouch.jpg" alt="error" />
            <h3>Vanity Pouch</h3>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
