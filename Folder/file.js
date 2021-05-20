import * as React from "react";
import { render } from "react-dom";

import zz








import ControlArea from "./ControlArea/ControlArea";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ControlArea />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
