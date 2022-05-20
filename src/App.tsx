import React from "react";
import Show from "./pages/Show";
import "./App.css";
import InputWS from "./pages/Input"
function App() {
  return (
    <div className="App">
     <InputWS />
     <Show id={21395462}/>
    </div>
  );
}

export default App;
