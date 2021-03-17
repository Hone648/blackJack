import "./App.css";
import NewGame from "./views/NewGame";

function App() {
  return (
    <div className="App">
      <div className="ui grid container">
        <div className="five wide column"></div>
        <div className="six wide column">
          <div className="header">
            <h2 class="ui large center aligned blue icon header">
              <i class="circular wheelchair blue icon"></i>
              <p className="header-content">BlackJack</p>
            </h2>
          </div>
        </div>
        <div className="five wide column"></div>
        <div className="play-area">
          <NewGame />
        </div>
      </div>
    </div>
  );
}

export default App;
