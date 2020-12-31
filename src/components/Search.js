import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = q => {
    setText(q);
    getQuery(q);
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Audie...'
        value={text}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
};

export default Search;
