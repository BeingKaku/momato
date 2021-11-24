import React, { useState } from "react";
import {
  DominoCover,
  DominoCover1,
  DominoCover2,
  DominoCover3,
} from "../../utils/FoodImage";
import Header from "../Header/Header";
import "./Brand.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Pizza } from "../../utils/Images";
import { BiRupee } from "react-icons/bi";
import { data } from "../../services/Api";
import { useHistory } from "react-router";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

console.log(data, "--------data---------");

export default function Brand(props) {
  // const [data, setData] = useState([]);
  const history = useHistory();
  console.log(history.location.pathname);
  let itemName = props.match.params.item;
  // console.log(props.match.params.item, "----props");
  data.map((item) => {
    // console.log(data, "--------data---------");
    return item;
  });
  const value = 3.5;
  return (
    <div>
      <div className="container">
        <Header />
        <hr />
        {data &&
          data.map((item) =>
            item.RestaurantName === itemName ? (
              <>
                <div className="gallery-main">
                  <div className="bigcover">
                    <img src={DominoCover1} />
                  </div>
                  <div className="smallcover">
                    <div>
                      <img src={DominoCover} />
                    </div>
                    <div>
                      <img src={DominoCover2} />
                    </div>
                    <div>
                      <img src={DominoCover3} />
                    </div>
                    <div className="img-wrap">
                      <span>View Gallery</span>
                      <img src={DominoCover1} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="Brand-detail">
                    <h1>{item.RestaurantName}</h1>
                    <span>{item.RestaurantRating}</span>
                  </div>
                  <p className="Brand-detailPara">
                    {/* Pizza, Fast Food, Desserts, Beverages */}
                    {item.RestaurantCategory}
                  </p>
                  <p className="Brand-detailPara1">
                    Open <span> - {item.RestaurantTiming}</span>
                  </p>
                </div>
                <div className="Order">
                  <h1>Order Online</h1>
                  <hr />
                  <p>Recommended</p>

                  {item.RestaurantMenu.length > 0 &&
                    item.RestaurantMenu.map((el) => (
                      <div className="OrderSection">
                        <div className="OrderSection-photo">
                          <img src={el.FoodImage} alt=""></img>
                        </div>
                        <div className="Ordersection-details">
                          <div style={{ display: "flex" }}>
                            <h2>{el.FoodName} </h2>
                            {el.Veg === true ? (
                              <p className="Veg">
                                <p></p>
                              </p>
                            ) : (
                              <p className="Non-Veg">
                                <p></p>
                              </p>
                            )}
                          </div>
                          <div style={{ display: "flex" }}>
                            <Rating
                              name="text-feedback"
                              value={el.FoodRating}
                              readOnly
                              precision={0.5}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="inherit"
                                />
                              }
                            />
                            <Box sx={{ ml: 2 }}>{labels[el.FoodRating]}</Box>
                          </div>
                          <p>
                            <BiRupee
                              style={{ width: "25px", height: "25px" }}
                            />
                            {el.FoodPrice}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
}
