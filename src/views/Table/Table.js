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
  };
  return (
    <div>
      <div style={myStyles.container}>
        <div class="ui center aligned grid">
          <div className="four wide red column">Card 1</div>
          <div className="four wide blue column">Card 2</div>
        </div>
      </div>
    </div>
  );
};
export default Table;
