import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
