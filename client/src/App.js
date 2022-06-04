import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards'
import './App.css';

function App() {

  let [fetchedData, setFetchedData] = useState([]);
  
  useEffect(() => {
    
    (async () => {
      let data = await fetch('http://localhost:3001/dogs').then(res => res.json())
      setFetchedData(data);
    })()

  }, [])
  console.log(fetchedData)
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Cards fetchedData={fetchedData} />
    </div>
  );
}

export default App;
