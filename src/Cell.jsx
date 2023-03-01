import React, { useState, useEffect } from "react";

const Cell = ({ x, y, ant, rotateToLeft, rotateToRight }) => {
  const [backgroundBlack, setBackgroundBlack] = useState(false);
  const [antHere, setAntHere] = useState(false);

  useEffect(() => {
    if (x === ant.x && y === ant.y) {
      setAntHere(true);
      if (backgroundBlack) {
        rotateToRight();
      } else {
        rotateToLeft();
      }
      setBackgroundBlack(!backgroundBlack);
    } else {
      setAntHere(false);
    }
  }, [ant]);

  return (
    <>
      <div
        className="cell"
        style={{
          width: "20px",
          height: "20px",
          border: "1px solid",
          borderColor: "black",
          backgroundColor: antHere
            ? "red"
            : backgroundBlack
            ? "black"
            : "white",
        }}
      ></div>
    </>
  );
};

export default Cell;
