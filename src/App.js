import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import React, { useState } from "react";

function App() {
  let firstIsland = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  };
  const [island, setIsland] = useState(firstIsland);

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList island={island} setIsland={setIsland} />
        <IslandForm island={island} />
      </div>
    </div>
  );
}
export default App;
