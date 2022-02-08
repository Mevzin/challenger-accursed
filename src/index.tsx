import * as React from "react";
import { render } from "react-dom";
import { Home } from "./pages/Home";

function App() {
  return <Home />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
