import React from 'react';

function Searchbar({ setSearchInput }) {
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value, 'hi');
    setSearchInput(e.target.value.toLowerCase());
  };
  return (
    <div className='searchbar-container'>
      <input type='text' onChange={handleChange}></input>
    </div>
  );
}

export default Searchbar;
