import React from "react";
import "./NewGame.css";
import Blackjack from "./images/jackOfSpades.jpeg";

const NewGame = ({ clickHandler }) => {
  return (
    <div>
      <div className="ui centered grid container">
        <div className="six wide column">
          <div className="header">
            <h1 className="ui large black header">BlackJack</h1>
            <img src={Blackjack} />
          </div>
        </div>
        <div className="row">
          <div className="two wide centered column">
            <button className="ui blue button" onClick={() => clickHandler()}>
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewGame;
