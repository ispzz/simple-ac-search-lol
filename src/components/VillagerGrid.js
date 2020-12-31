import React from 'react';
import VillagerItem from './VillagerItem';

const VillagerGrid = ({ villagers, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {villagers.map(villager => (
        <VillagerItem key={villager[1].id} villager={villager}></VillagerItem>
      ))}
    </div>
  );
};

export default VillagerGrid;
