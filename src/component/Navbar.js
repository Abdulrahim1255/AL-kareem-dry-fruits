import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";


const Navbar = () => {


  const item = useSelector((state)=>state.cart)
  

  return (
    <div>
      <nav className="nav">
        <span className="logo">
          <h2>Al'Kareem Dry Fruits</h2>
        </span>
        <div className="navbar">
          <ul className="menu">
            <li className="menu-list">
              {" "}
              <Link className="menu-list" to="/login">
                Login
              </Link>{" "}
            </li>
            <li className="menu-list">
              {" "}
              <Link className="menu-list" to="/register">
                Register
              </Link>{" "}
            </li>
            <li className="menu-list">
              {" "}
              <Link className="menu-list" to="/home">
                Home
              </Link>{" "}
            </li>
            <li className="menu-list">
              {" "}
              <Link className="menu-list" to="/cart">
                Cart { item?.length}
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
