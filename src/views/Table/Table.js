import React from "react";
import background from "./images/table.jpeg";

const cardHeight = 24;
const cardWidth = cardHeight * 0.7142;

const myStyles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "103vh",
    width: "100vw",
  },
  cardContainer: {
    marginTop: "20vh",
  },
  card: {
    margin: "5px",
    height: `${cardHeight}vh`,
    width: `${cardWidth}vh`,
    backgroundColor: "green",
  },
};

const Table = () => {
  return (
    <div>
      <div style={myStyles.container}>
        <div class="ui stackable centered relaxed grid">
          <div style={myStyles.cardContainer} className="two wide column">
            <div style={myStyles.card}>Card 1 XXXXXXXXXXXX</div>
          </div>
          <div className="one wide column"></div>
          <div style={myStyles.cardContainer} className="two wide column">
            <div style={myStyles.card}>card 2 XXXXXXXXXXXX</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
