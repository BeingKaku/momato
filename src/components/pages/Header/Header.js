import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="header-top">
        <h3 className="MomatoName-header">Momato</h3>
        <div className="search-box">
          <input
            className="search-txt"
            placeholder="Search for restaurant, cuisine or a dish"
          ></input>
          <a className="search-btn" href="#">
            <BiSearchAlt />
          </a>
        </div>

        <Link className="Signlinks-header" to="/signup">
          Signup
        </Link>
        <Link className="Loginlinks-header" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
