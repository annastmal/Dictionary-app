import "./App.css";
import React from "react";
import DictionarySearch from "./DictionarySearch";
import ParticlesBG from "./ParticlesBG";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <main>
          <DictionarySearch className="search"/>
          <ParticlesBG className="particles"/>
        </main>
      </header>
    </div>
  );
}

export default App;
