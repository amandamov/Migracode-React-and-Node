import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';




function App() {

  const [randomQuotes, setRandomQuotes] = useState(
    {
      "quote":"to be or...",
      "author": "william"
    }
  )

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(function(){
    fetchRandomQuotes()
  }, [])

  const fetchRandomQuotes = () => {
    fetch("http://localhost:5000/quotes/random")
    .then((response) => response.json())
    .then((data) => {
        setRandomQuotes(data)
    })
}
  const searchQuote = () => {
    fetch(`http://localhost:5000/quotes/search?term=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      setSearchResult(data)
      console.log(data)
    })
  }

  const handleSearchInput = (event) => {
    console.log(event);
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <div className="random-quote">
        <p>Random Quote:</p>
        <p>" {randomQuotes.quote} "</p>
        <p>{randomQuotes.author}</p>
      </div>
      <div className="search-quote">
        <p>Search by:</p>
        <input value={searchTerm} onChange={handleSearchInput}></input>
        <button onClick={searchQuote}>Search</button>
        {searchResult.map(function(oneResult) {
          return <li>
            <p>{oneResult.quote}</p>
            <p>{oneResult.author}</p>
          </li>
        })}
      </div>
    </div>
  );
}

export default App;
