import { useState } from "react";
import "./App.css";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Header /> */}
      <Routing />
      <Footer />
    </>
  );
}

export default App;
