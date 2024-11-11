import React from "react";
import PlayerList from "./components/PlayerList";
const App = () => {
  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <h1>FIFA Player Cards</h1>
      <PlayerList />
    </div>
  );
};

export default App;
