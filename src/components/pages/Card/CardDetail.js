import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import "./CardDetail.css";
import { Domino, BurgerKing } from "../../utils/Images";
import { res } from "./res";
import { useHistory } from "react-router-dom";

export default function CardDetail(props) {
  console.log(props, "/////");
  const [data, setData] = useState([]);
  let category = props.match.params.category;
  // console.log(category);
  var dataObj = [];

  const sorteddata = () => {
    res.map((item) =>
      item.RestaurantCategory.filter((el) => {
        if (el.includes(category)) {
          dataObj.push(item);
          console.log(item, "-------yes!----");
        }
      })
    );
    dataObj.length > 0 && setData(dataObj);
    console.log("dataObj", dataObj);
  };
  useEffect(() => {
    sorteddata();
  }, []);

  const history = useHistory();

  const Ordernow = (item) => {
    history.push(`/card/${category}/${item}`);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <hr />
        <div className="delivery">
          <MdOutlineDeliveryDining style={{ width: "50px", height: "50px" }} />
          <h1>Delivery</h1>
        </div>
        <h1>
          {category} <IoFastFoodOutline />
        </h1>

        <p className="delivery-text">Delivery Restaurants in Delhi NCR</p>
        <div className="body1">
          <div className="container1">
            {data.map((item) => (
              <div className="swapcard">
                <div className="swapcard-img">
                  <img src={item.RestaurantImage}></img>
                </div>
                <div className="content-cardDt">
                  <div className="rating-oncard">
                    <span
                      style={{
                        padding: "2px",
                      }}
                    >
                      {item.RestaurantRating}
                    </span>
                    <span>
                      <AiOutlineStar style={{ margin: "0px 0 0 0 " }} />
                    </span>
                  </div>
                  <div className="timing-oncard">
                    <p>
                      <span>Open now </span> - {item.RestaurantTiming}
                    </p>
                  </div>
                  <h2 style={{ margin: "0px" }}>{item.RestaurantName}</h2>
                  <div className="cuisine-oncard">
                    <p>The best cuisine we serve you</p>
                    <ul style={{ margin: "-10px 0px 0px 0px" }}>
                      <li>{item.RestaurantCategory[0]}</li>
                      <li>{item.RestaurantCategory[1]}</li>
                      <li>{item.RestaurantCategory[2]}</li>
                      <li>{item.RestaurantCategory[3]}</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => Ordernow(item.RestaurantName)}
                    className="Orderbutt-oncard"
                  >
                    Order now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
