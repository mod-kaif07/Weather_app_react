import { useState } from "react";

import "./App.css";

import Weather_app from "./Weather_app";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Weather Api Project + React</h2>
      <Weather_app/>
    </>
  );
}

export default App;
