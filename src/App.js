import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';

import './App.css';
import VillagerGrid from './components/VillagerGrid';

const App = () => {
  const [villagers, setVillagers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get all AC characters
  useEffect(() => {
    const fetchVillagers = async () => {
      const result = await axios(`http://acnhapi.com/v1/villagers`);

      const test = Object.entries(result.data).filter(villager =>
        villager[1]['name']['name-USen'].includes('Au')
      );
      // console.log(
      //   test.map(filteredVillager => filteredVillager[1]['name']['name-USen'])
      // );

      console.log(test.map(filteredVillager => filteredVillager));

      setVillagers(test);
      setIsLoading(false);
    };
    fetchVillagers();
  }, []);

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
      <Search />
      <VillagerGrid isLoading={isLoading} villagers={villagers} />
    </div>
  );
};

export default App;
