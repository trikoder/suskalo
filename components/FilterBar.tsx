import React from 'react';

export const FilterBar = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
}: {
  search: string;
  setSearch: (val: string) => void;
  sortBy: 'price' | 'title';
  setSortBy: (val: 'price' | 'title') => void;
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Pretraži oglase..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select value={sortBy} onChange={e => setSortBy(e.target.value as 'price' | 'title')}>
        <option value="price">Po cijeni</option>
        <option value="title">Po nazivu</option>
      </select>
    </div>
  );
};