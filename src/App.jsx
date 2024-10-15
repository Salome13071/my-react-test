import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Container">
        <div className="cardContainer">
          <div className="cardContainer_main">
            <div className="cardContainer_main--1"></div>
            <div className="cardContainer_main--2"></div>
            <div className="cardContainer_main--3">
              <p className="namePart">
                Linda Smith <span className="namePart--span">26</span>
              </p>
              <p className="locationPart">London</p>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
