import "./App.css";
import { Router, navigate } from "@reach/router";
import NewGame from "./views/NewGame/NewGame";
import Table from "./views/Table/Table";
function App() {
  const clickHandler = () => {
    navigate("/play");
  };

  return (
    <div className="App">
      <Router>
        <NewGame path="/" clickHandler={clickHandler} />
        <Table path="/play" />
      </Router>
    </div>
  );
}

export default App;
