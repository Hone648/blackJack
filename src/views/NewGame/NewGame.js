import React from "react";
import Blackjack from "./images/jackOfSpades.jpeg";
import background from "./images/background.jpeg";

const NewGame = ({ clickHandler }) => {
  const myStyles = {
    container: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100vw",
    },
    header: {
      color: "red",
      marginTop: "10vh",
    },
    image: {
      height: "25%",
      width: "30%",
    },
  };

  return (
    <div style={myStyles.container}>
      <div className="ui centered grid">
        <div className="row">
          <h1 style={myStyles.header}>BlackJack</h1>
        </div>
        <img style={myStyles.image} src={Blackjack} alt="blackjack" />
        <div className="row">
          <button className="ui blue button" onClick={() => clickHandler()}>
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewGame;
