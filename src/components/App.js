import React from "react";
import "../App.css";
import Overview from "./overview";

function App() {
  return (
    <div className="App">
      <h1>
        Rules Editor <small>React</small>
      </h1>
      <Overview />
      <footer>
        <div>
          Rules Editor assignment: attempted by{" "}
          <a
            href="https://www.linkedin.com/in/vigneshrsharma/"
            title="LinkedIn"
          >
            @Vignesh.R
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
