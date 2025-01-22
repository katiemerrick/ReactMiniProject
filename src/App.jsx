// Bringing in the required import from 'react-router-dom'
import { useState } from 'react';

import DictionarySelector from './components/DictionarySelector';
import RandomWord from './components/RandomWord';

function App() {
  const [tag, setTag]= useState('geology')
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <DictionarySelector setTag={setTag} />
      <RandomWord tag= {tag} />
      <div>
        {tag}
      </div>
    </>
  );
}

export default App;
