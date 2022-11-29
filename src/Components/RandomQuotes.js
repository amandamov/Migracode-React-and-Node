import React from "react";

const RandomQuotes = () => {
    fetch("http://localhost:5000/quotes/random")
    .then((response) => response.json())
    .then((data) => {
        console.log(JSON.stringify(data))
    })
}

export default RandomQuotes;