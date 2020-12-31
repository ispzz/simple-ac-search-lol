import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

import './App.css';
import VillagerGrid from './components/VillagerGrid';

const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  // Get all AC characters
  useEffect(() => {
    const fetchVillagers = async () => {
      const result = await axios(`http://acnhapi.com/v1/villagers`);

      let filteredResult = Object.entries(result.data).filter(villager =>
        villager[1]['name']['name-USen']
          .toLowerCase()
          .includes(query.toLowerCase())
      );

      if (filteredResult.length > 20) {
        filteredResult = filteredResult.splice(0, 20);
      }

      setVillagers(filteredResult);
      setIsLoading(false);
    };
    fetchVillagers();
  }, [query]);

  return (
    <div className='container'>
      <Search getQuery={q => setQuery(q)} />
      <VillagerGrid isLoading={isLoading} villagers={villagers} />
    </div>
  );
};

export default App;
