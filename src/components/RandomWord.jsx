import { useState } from "react";





const dictionaryUrl = 'https://1rnoszgn46.execute-api.us-east-1.amazonaws.com' ;

function RandomWord({tag}) {
const [word, setWord] = useState(null);
  const fetchRandomWord = () => {
    fetch(`${dictionaryUrl}/random-word?tag=${tag}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch word");
        }
        return response.json();
      })
      .then((data) => {
        // Update this based on your API's response structure
        setWord(data.word || "No word found");
      })
      .catch((error) => {
        console.error("Error fetching word:", error);
        setWord("Error fetching word");
      });
  };

  return (
    <div className="app">
      <h1>Random Word Generator</h1>
      <div className="word-box">
        <p>{word || "Click the button to generate a word!"}</p>
      </div>
      <button onClick={fetchRandomWord}>Generate Word</button>
    </div>
  );



}

export default RandomWord;