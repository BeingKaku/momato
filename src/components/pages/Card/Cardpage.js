import React from "react";
import CatCard from "./CatCard";
import "./Cardpage.css";
import {
  Pizza,
  Fries,
  Noodles,
  Burger,
  Dosa,
  Biryani,
  Donuts,
  Smoothie,
} from "../../utils/Images";
export default function Cardpage() {
  const data = [
    {
      category: "Pizza",
      image: Pizza,
      foodname: "Pizza",
      detail: "Pizza is not a 'trend' it's a way of life",
      id: "100",
    },
    {
      category: "French Fries",
      image: Fries,
      foodname: "French fries",
      detail: "Keep your friends close and your fries closer",
      id: "101",
    },
    {
      category: "Noodles",
      image: Noodles,
      foodname: "Noodles",
      detail: "Whatever , I'M Getting Noods",
      id: "102",
    },
    {
      category: "Burger",
      image: Burger,
      foodname: "Burger",
      detail: "The only bad burger is the one you didn't eat.",
      id: "103",
    },
    {
      category: "Dosa",
      image: Dosa,
      foodname: "Dosa",
      detail: "What is a Masala Dosa? Its a potato wrapped in love.",
      id: "104",
    },
    {
      category: "Biryani",
      image: Biryani,
      foodname: "Biryani",
      detail:
        "You are a BIRYANI my friend, Don't let anyone treat you like a chawal",
      id: "105",
    },
    {
      category: "Donuts",
      image: Donuts,
      foodname: "Donuts",
      detail:
        "you can't buy happiness but you can buy donuts. And that's kind of the same things.",
      id: "106",
    },
    {
      category: "Smoothie",
      image: Smoothie,
      foodname: "Smoothie",
      detail: "Start your morning with Smoothie.",
      id: "107",
    },
  ];

  return (
    <div className="Cardmain ">
      {data && data.map((item, i) => <CatCard itemData={item} key={i} />)}
    </div>
  );
}
