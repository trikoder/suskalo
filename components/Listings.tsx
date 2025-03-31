import React, { useEffect, useState } from 'react';
import { fetchListings } from '../utils/api';
import { Listing } from './types';
import { ListingItem } from './ListingItem';

export const Listings = ({ search, sortBy }: { search: string; sortBy: 'price' | 'title' }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchListings().then(data => {
      setListings(data);
      setLoading(false);
    });
  }, []);

  const filtered = listings
    .filter(l => l.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortBy === 'price' ? a.price - b.price : a.title.localeCompare(b.title)));

  return (
    <div>
      <h2>Aktualni oglasi</h2>
      {loading && <p>Učitavanje...</p>}
      {filtered.map((item, index) => (
        <ListingItem key={index} item={item} />
      ))}
    </div>
  );
};