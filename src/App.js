import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import VillagerGrid from './components/VillagerGrid';

const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get all AC characters
  useEffect(() => {
    const fetchVillagers = async () => {
      const result = await axios(`http://acnhapi.com/v1/villagers`);

      // Object.entries(result.data).map(item => {
      //   console.log(item);
      //   console.log(item[1]);
      //   console.log(item[1]["name"]["name-USen"]);
      // });

      setVillagers(result.data);
    };
    fetchVillagers();
  }, []);

  console.log(villagers);
  Object.entries(villagers).map(item => {
    console.log(item);
    console.log(item[1]);
    console.log(item[1]['name']['name-USen']);
  });

  return (
    <div className='container'>
      <VillagerGrid villagers={villagers} />
    </div>
  );
};

export default App;
