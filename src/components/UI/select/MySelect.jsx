import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({handleChangeSort, value}) => {

  const onSelectChange = (evt) => {
    handleChangeSort(evt.target.value)
  }

  return (
    <div>
    <h2>Sort</h2>
      <select className={classes.mySelect} onChange={onSelectChange} value={value}>
        <option value="title">By title</option>
        <option value="description">By task</option>
        <option value="id">By date</option>
      </select>
    </div>
  );
};

export default MySelect;
