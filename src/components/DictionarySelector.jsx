// import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from react
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function DictionarySelector() {
    const [dictionaries, setDictionaries] = useState('');
    useEffect(() => {
        fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/multi-details')
        .then(response=> response.json())
        .then ((data) => {
            console.log(data.dictionaries)
            setDictionaries(data.dictionaries)
        })
    })

    return (
        <div>
            <h1>
                Please select a dictionary
            </h1>
            {
            dictionaries.map((dictionary , index) => (
                <button>
                    {dictionary.title}
                    {dictionary.tags}
                    {index}
                </button>
            ))
            }
        </div>

    );
}

export default DictionarySelector;