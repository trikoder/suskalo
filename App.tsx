import React, { useState } from 'react';
import { Listings } from './components/Listings';
import { ListingForm } from './components/ListingForm';
import { FilterBar } from './components/FilterBar';

function App() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'title'>('price');

  return (
    <div>
      <h1>Šuškalo - Mini oglasnik</h1>
      <FilterBar search={search} setSearch={setSearch} sortBy={sortBy} setSortBy={setSortBy} />
      <ListingForm />
      <Listings search={search} sortBy={sortBy} />
    </div>
  );
}

export default App;