import React, { useState } from "react";
import Card from "../../components/Card";
import getValue from "../../GetValue";

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

const Table = ({ deck, drawFromDeck }) => {
  return (
    <div>
      <div style={myStyles.container}>
        <div className="ui stackable centered grid">
          <div style={myStyles.cardContainer} className="two wide column">
            <Card
              card={drawFromDeck(deck)}
              height={cardHeight}
              width={cardWidth}
            />
          </div>
          <div style={myStyles.cardContainer} className="two wide column">
            <Card
              card={drawFromDeck(deck)}
              height={cardHeight}
              width={cardWidth}
            />
          </div>
          <div style={myStyles.cardContainer} className="two wide column">
            <Card card="none" height={cardHeight} width={cardWidth} />
          </div>
          <div style={myStyles.cardContainer} className="two wide column">
            <Card card="none" height={cardHeight} width={cardWidth} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
