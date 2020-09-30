import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Weather} />
    </BrowserRouter>
  );
}

export default App;
