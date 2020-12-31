import React from 'react';

const VillagerGrid = ({ villagers }) => {
  return (
    <div>
      {Object.entries(villagers).map(villager => (
        <p>{villager[1]['name']['name-USen']}</p>
      ))}
    </div>
  );
};

export default VillagerGrid;
