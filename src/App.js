import "./App.css";
import React from "react";
import DictionarySearch from "./DictionarySearch";
import ParticlesBG from "./ParticlesBG";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <main>
          <DictionarySearch className="search" />
          <ParticlesBG className="particles" />
        </main>
      </header>
      <footer className="footer">
        <p>
          Designed &{" "}
          <a href="https://github.com/annastmal/Dictionary-app" class="footer_text" target="blank">
            {" "}
            open-sourced coded
          </a>{" "}
          by Anna Malanchuk
        </p>
      </footer>
    </div>
  );
}

export default App;
