import React, { useState } from "react";
import Card from "../../components/Card";

const cardHeight = 27;
const cardWidth = cardHeight * 0.741;

const myStyles = {
  container: {
    backgroundImage: `url("https://www.wallpapertip.com/wmimgs/206-2060747_cool-green-photos-without-background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "103vh",
    width: "100vw",
  },
  cardContainer: {
    marginTop: "20vh",
    minWidth: "22vh",
    maxWidth: "200px",
  },
};

const Table = ({ shuffledDeck }) => {
  const [cardOne, setCardOne] = useState({
    suit: "S",
    face: "J",
    value: 10,
  });
  const [cardTwo, setCardTwo] = useState({
    suit: "D",
    face: "A",
    value: 11,
  });
  return (
    <div>
      <div style={myStyles.container}>
        <div className="ui stackable centered grid">
          <div style={myStyles.cardContainer} className="two wide column">
            <Card card={cardOne} height={cardHeight} width={cardWidth} />
          </div>
          <div style={myStyles.cardContainer} className="two wide column">
            <Card card={cardTwo} height={cardHeight} width={cardWidth} />
          </div>
          <div style={myStyles.cardContainer} className="two wide column">
            <Card card={cardTwo} height={cardHeight} width={cardWidth} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
