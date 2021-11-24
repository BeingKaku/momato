import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import CatCard from "../Card/CatCard";
import "./Landing.css";
import Cardpage from "../Card/Cardpage";
import { Smoke } from "../../utils/Images";
import { styled } from "@mui/system";

export default function Landing() {
  return (
    <>
      <div className="headerback">
        <div className="container">
          <header>
            <div className="links">
              <Link className="Signlinks" to="/signup">
                SignUp
              </Link>
              <Link className="Loginlinks" to="/login">
                LogIn
              </Link>
            </div>
            <div className="banner-content">
              <h1 className="MomatoName">Momato</h1>
              <p className="Tagline">
                Discover the best food & drinks by Momato
              </p>

              <input
                className="search"
                placeholder="Search for restaurant, cuisine or a dish"
              ></input>
            </div>
          </header>
          <div>
            <Cardpage />
          </div>
          <div className="Location">
            <h1 className="Location-heading">
              Location <span> Cities We Deliver To</span>
            </h1>
            <ul className="Citesname">
              <li>New Delhi</li>
              <li>Mumbai</li>
              <li>Indore</li>
              <li>Jaipur</li>
              <li>Bengaluru</li>
              <li>Dehradun</li>
              <li>Kolkate</li>
              <li>Hyderabad</li>
              <li>Goa</li>
              <li>Shimla</li>
              <li>Pune</li>
              <li>Mussorie</li>
              <li>Chandigarh</li>
              <li>Manali</li>
              <li>Kota</li>
              <li>Surat</li>
              <li>Leh</li>
            </ul>
          </div>
          <div className="topRestaurant">
            <h1 className="topRestaurant-heading">
              Top Restaurant
              <span> Chains</span>
            </h1>
            <ul className="topChains">
              <li>Bikanervala</li>
              <li>Biryani Blues</li>
              <li>BTW</li>
              <li>Burger King</li>
              <li>Burger Singh</li>
              <li>Domino's</li>
              <li>Dunkin' Donuts</li>
              <li>Haldiram's</li>
              <li>KFC</li>
              <li>Krispy Kreme</li>
              <li>McDonald's</li>
              <li>Moti Mahal Delux</li>
              <li>Om Sweets & Snacks</li>
              <li>Paradise Biryani</li>
              <li>Pizza Hut</li>
              <li>Sagar Ratna</li>
              <li>Subway</li>
              <li>WOW! Momo</li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <h1 className="MomatoName1">Momato</h1>
            <div style={{ display: "flex", color: "white" }}>
              <img src={Smoke} />
              <ul className="footer-company">
                COMPANY
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
              <ul className="footer-company">
                FOR FOODIES
                <li>Code of Conduct</li>
                <li>Community</li>
                <li>Blogger Help</li>
                <li>Mobile Apps</li>
              </ul>
            </div>
            <div className="vapour">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <h1 className="footer-lastline">We happy to Feed you! ;) </h1>
              <div style={{ color: "white", margin: "auto" }}>
                <BsInstagram
                  style={{ width: "30px", height: "30px", margin: "10px" }}
                />
                <BsFacebook
                  style={{ width: "30px", height: "30px", margin: "10px" }}
                />
                <BsTwitter
                  style={{ width: "30px", height: "30px", margin: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
