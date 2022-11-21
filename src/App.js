import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImagesUpload from "./components/ImagesUpload";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>bezkoder.com</h3>
        <h4>Multiple Images Upload in React.js</h4>
      </div>

      <ImagesUpload />
    </div>
  );
}

export default App;
