import { useState } from "react";
import "./App.css";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import StateProvider,{useStateFromContext} from "./stateProvider/StateProvider";
import {reducer, initialState } from "./reducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <Header />
      <Routing />
      <Footer />
    </StateProvider>
  );
}

export default App;
