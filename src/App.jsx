import { useState } from "react";
import "./App.css";
import Routing from "./Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routing />
      {/* <Footer /> */}
    </>
  );
}

export default App;
