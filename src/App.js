import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";

function App() {
  const [results , setResults] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <SearchBar result={setResults} resultlist={results}/>
        <SearchResultList resultlist={results}/>
      </div>
    </div>
  );
}

export default App;
