import "./App.css";
import { Router, navigate } from "@reach/router";
import NewGame from "./views/Home/NewGame";
import Table from "./views/Table/Table";

const buildDeck = () => {
  let deck = [];
  let suits = ["H", "D", "C", "S"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "J",
    "Q",
    "K",
  ];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);
    }
  }
  return deck;
};

const shuffleDeck = (deck) => {
  let shuffledDeck = [];
  for (let i = 0; i < 52; i++) {
    let index = Math.floor(Math.random() * Math.floor(deck.length));
    shuffledDeck.push(deck[index]);
    deck.splice(index, 1);
  }
  return shuffledDeck;
};
const getValue = (card) => {
  let value = card[0];
  if (value === "0" || value === "K" || value === "Q" || value === "J") {
    value = 10;
  } else if (value === "A") {
    value = 11;
  }
  return parseInt(value);
};

let deck = buildDeck();
let shuffledDeck = shuffleDeck(deck);
console.log(getValue(shuffledDeck[0]));

function App() {
  const clickHandler = () => {
    navigate("/play");
  };

  return (
    <div className="App">
      <Router>
        <NewGame path="/" clickHandler={clickHandler} />
        <Table deck={shuffledDeck} path="/play" />
      </Router>
    </div>
  );
}

export default App;
