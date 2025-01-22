// Bringing in the required import from 'react-router-dom'
import { useState } from 'react';

import DictionarySelector from './components/DictionarySelector';
import RandomWord from './components/RandomWord';

function App() {
  const [tag, setTag]= useState('')
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>

      <DictionarySelector setTag={setTag} />
      {tag}
      <br />
      <br />
      <RandomWord tag= {tag} />

      <div>
 
      </div>
    </>
  );
}

export default App;

