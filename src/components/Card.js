import React from "react";
import cards from "../CardImgs";

const Card = ({ card, height, width }) => {
  let ourCard = cards.card;

  const myStyles = {
    container: {
      background: `url(${ourCard})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop: "15px",
      marginLeft: "0px",
      height: `${height}vh`,
      width: `${width}vh`,
      color: "black",
    },
  };
  return (
    <div className="card-container">
      <div className="ui grid">
        <div style={myStyles.container}></div>
      </div>
    </div>
  );
};
export default Card;
