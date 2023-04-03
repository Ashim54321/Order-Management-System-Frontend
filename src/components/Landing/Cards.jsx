import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Chip, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

export default function Cards(props) {
  const navigate = useNavigate();
 
  const handleClick = () => {
    alert("added to cart");
  };
  return (
    <Card>
      <CardActionArea className="h-auto w-full" disableRipple>
        <section className="flex w-full justify-end absolute z-10 ">
          <Tooltip title="Add to Favorite">
            <button>
              <AiOutlineHeart className="text-white m-4 text-2xl " />
            </button>
          </Tooltip>
        </section>
        <CardMedia
          component="img"
          image={props.img}
          alt="cards"
          className="h-64"
        />
        <section className="flex  items-start ">
          <CardContent className="w-10/12 h-auto ">
            <Chip
              label={props.gender}
              variant="outlined"
              color="success"
              style={{ size: "0.5rem", height: "1.5rem" }}
            />

            <h1 className="text-xl font-black font-sans text-black-500 p-2">
              {props.name}
            </h1>
            <section className="flex items-center">
              <h5 className="p-2">Sizes:</h5>
              <button onClick={handleClick}>
                <h1 className="p-1 border w-8 text-center h-6 text-xs mx-1">
                  6
                </h1>
              </button>
              <h1 className="p-1 border w-8 text-center h-6 text-xs mx-1">
                6.5
              </h1>
              <h1 className="p-1 border w-8 text-center h-6 text-xs mx-1">7</h1>
              <h1 className="p-1 border w-8 text-center h-6 text-xs mx-1">8</h1>
              <h1 className="p-1 border w-8 text-center h-6 text-xs mx-1">
                11
              </h1>
              <h1 className="p-1 border w-8 text-center h-6 text-xs">12</h1>
            </section>
            <section className="flex items-center">
              <h5 className="p-2">Colors:</h5>
              <h1 className="p-1 border w-4 text-center h-4 text-xs mx-1 bg-red-500 rounded-full"></h1>
              <h1 className="p-1 border w-4 text-center h-4 text-xs mx-1 bg-orange-500 rounded-full"></h1>
              <h1 className="p-1 border w-4 text-center h-4 text-xs mx-1 bg-green-500 rounded-full"></h1>
              <h1 className="p-1 border w-4 text-center h-4 text-xs mx-1 bg-gray-500 rounded-full"></h1>
              <h1 className="p-1 border w-4 text-center h-4 text-xs mx-1 bg-blue-500 rounded-full"></h1>
            </section>
          </CardContent>
          <Tooltip title="Add to cart">
            <button
              className="p-4 rounded-full hover:bg-gray-100"
              onClick={handleClick}
            >
              <AiOutlineShoppingCart className="w-6 h-6" />
            </button>
          </Tooltip>
        </section>
      </CardActionArea>
    </Card>
  );
}
