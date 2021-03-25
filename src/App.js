import "./App.css";
import { Router, navigate } from "@reach/router";
import NewGame from "./views/Home/NewGame";
import Table from "./views/Table/Table";

const buildDeck = () => {
  let deck = [];
  let suits = ["H", "D", "C", "S"];
  let values = [
    "A",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
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

const drawFromDeck = (deck) => {
  let drawnCard = deck[0];
  deck.splice(0, 1);
  return drawnCard;
};

let deck = buildDeck();
let shuffledDeck = shuffleDeck(deck);
function App() {
  const clickHandler = () => {
    navigate("/play");
  };

  return (
    <div className="App">
      <Router>
        <NewGame path="/" clickHandler={clickHandler} />
        <Table deck={shuffledDeck} drawFromDeck={drawFromDeck} path="/play" />
      </Router>
    </div>
  );
}

export default App;
