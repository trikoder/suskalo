import React from 'react';
import { Listing } from './types';

export const ListingItem = ({ item }: { item: Listing }) => {
  return (
    <div>
      <p><strong>{item.title}</strong></p>
      <p>{item.description}</p>
      <p>Cijena: {item.price}€</p>
      <p>Kategorija: {item.category}</p>
    </div>
  );
};