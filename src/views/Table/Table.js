import React from "react";
import background from "./images/table.jpeg";

const Table = () => {
  const myStyles = {
    container: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100vw",
    },
    card: {
      height: "400px",
      textAlign: "center",
    },
  };
  return (
    <div>
      <div style={myStyles.container}>
        <div class="ui centered grid">
          <div style={myStyles.card} className="three wide red column">
            <div>Card 1</div>
          </div>
          <div className="one wide column"></div>
          <div style={myStyles.card} className="four wide blue column">
            Card 2
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
