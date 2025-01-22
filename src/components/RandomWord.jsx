import { useState } from "react";
import '../index.css';




const dictionaryUrl = 'https://1rnoszgn46.execute-api.us-east-1.amazonaws.com' ;

function RandomWord({tag}) {
const [data, setData] = useState({word: '', definition: '', startsWith: ''});
const {word, definition, startsWith} = data
  const fetchRandomWord = () => {
    fetch(`${dictionaryUrl}/random-word?tag=${tag}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch word");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching word:", error);
        setWord("Error fetching word");
      });
  };

  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">Random Word Generator</h1>
      <div className="word-box">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={fetchRandomWord}>Generate Word</button>
      <p>{word || "Click the button to generate a word!"}</p>
      <p>{definition}</p>
      </div>
    </div>
  );



}

export default RandomWord;