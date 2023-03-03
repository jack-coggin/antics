import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Grid = () => {
  const rows = 40;
  const cols = 40;

  const [ant, setAnt] = useState({
    x: 20,
    y: 20,
  });

  const [antDirection, setAntDirection] = useState(0);
  const [onBlackSquare, setOnBlackSquare] = useState(false);

  const rotateToLeft = () => {
    let newDirection = (4 + antDirection - 1) % 4;
    setAntDirection(newDirection);
  };

  const rotateToRight = () => {
    let newDirection = (antDirection + 1) % 4;
    setAntDirection(newDirection);
  };

  const updateAnt = () => {
    console.log("updateAnt", ant);
    if (onBlackSquare) {
      if (antDirection === 1) {
        setAnt({
          x: ant.x + 1,
          y: ant.y,
        });
      } else if (antDirection === 2) {
        setAnt({
          x: ant.x,
          y: ant.y + 1,
        });
      } else if (antDirection === 3) {
        setAnt({
          x: ant.x - 1,
          y: ant.y,
        });
      } else if (antDirection === 0) {
        setAnt({
          x: ant.x,
          y: ant.y - 1,
        });
      }
    } else {
      if (antDirection === 1) {
        setAnt({
          x: ant.x + 1,
          y: ant.y,
        });
      } else if (antDirection === 2) {
        setAnt({
          x: ant.x,
          y: ant.y + 1,
        });
      } else if (antDirection === 3) {
        setAnt({
          x: ant.x - 1,
          y: ant.y,
        });
      } else if (antDirection === 0) {
        setAnt({
          x: ant.x,
          y: ant.y - 1,
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateAnt();
    }, 1000);
    return () => clearInterval(interval);
  }, [antDirection]);

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 20px)`,
      }}
    >
      {Array(rows)
        .fill()
        .map((_, i) => (
          <div className="row" key={i}>
            {Array(cols)
              .fill()
              .map((_, j) => (
                <Cell
                  key={`{i}{j}{_}`}
                  x={i}
                  y={j}
                  ant={ant}
                  setOnBlackSquare={setOnBlackSquare}
                  rotateToLeft={rotateToLeft}
                  rotateToRight={rotateToRight}
                />
              ))}
          </div>
        ))}
    </div>
  );
};

export default Grid;
