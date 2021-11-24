import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import { useHistory } from "react-router-dom";
export default function CatCard(props) {
  const history = useHistory();

  const viewdetail = (category, data) => {
    history.push(`/card/${category}`);
    // localStorage.setItem("viewcard", JSON.stringify(data));
  };
  return (
    <div onClick={() => viewdetail(props.itemData.category, props.itemData)}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.itemData.image}
            alt="Food Items. Yummy!"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.itemData.foodname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.itemData.detail}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
