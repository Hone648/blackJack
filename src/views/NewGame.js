import React from "react";
import "./NewGame.css";

const NewGame = () => {
  return (
    <div>
      <div className="ui centered grid container">
        <div className="five wide column"></div>
        <div className="six wide column">
          <div className="header">
            <h2 class="ui large center aligned blue icon header">
              <i class="circular wheelchair blue icon"></i>
              <p>BlackJack</p>
            </h2>
          </div>
        </div>
        <div className="five wide column"></div>
        <div className="row">
          <div className="two wide centered column">
            <button className="ui blue button">New Game</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewGame;
