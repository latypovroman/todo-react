import React from 'react';
import MySelect from "./UI/select/MySelect";
import Filter from "./Filter";

const FilterBar = ({sort, sortPosts, filter, filterPosts}) => {
  return (
    <div>
      <MySelect value={sort} handleChangeSort={sortPosts} />
      <Filter value={filter} handleFilterChange={filterPosts}/>
    </div>
  );
};

export default FilterBar;
