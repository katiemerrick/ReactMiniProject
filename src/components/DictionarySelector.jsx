// import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function DictionarySelector() {
    const [dictionaries, setDictionaries] = useState([]);
    const [topics, setTopics] = useState('');
    useEffect(() => {
        fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multi-details')
        .then(response=> response.json())
        .then ((data) => {
            console.log(data.dictionaries)
            setDictionaries(data.dictionaries)
        })
    }, [])

    return (
        //TODO: When the button is clicked (onClick) we want to store the prop in useState
        <div>
            <h1>Please select a dictionary</h1>
            {dictionaries.map((dictionary , index) => (
                    <div>
                        <div>{dictionary.title}</div>
                        <div>{dictionary.tags}</div>
                        <div>{index}</div>
                    </div>
            ))}
        </div>

    );
}

export default DictionarySelector;