import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const change = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search Characters'
          value={text}
          onChange={(e) => change(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
