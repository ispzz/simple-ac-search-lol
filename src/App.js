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

      let test = Object.entries(result.data).filter(villager =>
        villager[1]['name']['name-USen']
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      // console.log(
      //   test.map(filteredVillager => filteredVillager[1]['name']['name-USen'])
      // );

      if (test.length > 20) {
        test = test.splice(0, 20);
      }

      console.log(test.map(filteredVillager => filteredVillager));

      setVillagers(test);
      setIsLoading(false);
    };
    fetchVillagers();
  }, [query]);

  // console.log(villagers);
  // Object.entries(villagers).map(item => {
  //   console.log(item);
  //   console.log(item[1]);
  //   console.log(item[1]['name']['name-USen']);
  //   console.log(item[1].id);
  // });

  // Object.entries(villagers)
  //   .filter(villager => villager.includes('Audie'))
  //   .map(filteredVillager => filteredVillager);

  // const test = Object.entries(villagers).filter(value =>
  //   value[1]['name']['name-USen'].includes('Audie')
  // );
  // console.log(
  //   test.map(filteredVillager => filteredVillager[1]['name']['name-USen'])
  // );

  return (
    <div className='container'>
      <Search getQuery={q => setQuery(q)} />
      <VillagerGrid isLoading={isLoading} villagers={villagers} />
    </div>
  );
};

export default App;
