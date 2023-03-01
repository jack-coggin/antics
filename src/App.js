import React from "react";
import Grid from "./Grid";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid />
    </div>
  );
}

export default App;
