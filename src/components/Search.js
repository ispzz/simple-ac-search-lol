import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <form>
      <input
        type='text'
        placeholder='Audie...'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
};

export default Search;
