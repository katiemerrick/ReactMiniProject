// import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "../index.css";
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function DictionarySelector({ setTag }) {
  const [dictionaries, setDictionaries] = useState([]);

  useEffect(() => {
    fetch(
      "https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multi-details"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.dictionaries);
        setDictionaries(data.dictionaries);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Please Select a Dictionary
      </h1>
      {dictionaries.map((dictionary, index) => (
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          key={index}
          onClick={() => setTag(dictionary.tags[0])}
        >
          {dictionary.title}{" "}
        </button>
      ))}
    </div>
  );
}

export default DictionarySelector;
