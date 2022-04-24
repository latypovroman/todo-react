import React from 'react';

const Filter = ({ handleFilterChange, value }) => {

  const onInputChange = (evt) => {
    handleFilterChange(evt.target.value);
  }

  return (
    <div>
      <input
        placeholder="Find..."
        type="text"
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
};

export default Filter;
