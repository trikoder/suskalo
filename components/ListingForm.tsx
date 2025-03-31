import React, { useState } from 'react';
import { createListing } from '../utils/api';

export const ListingForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('općenito');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createListing({ title, description, price, category });
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('općenito');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Naslov" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Opis" />
      <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Cijena" />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="općenito">Općenito</option>
        <option value="tehnologija">Tehnologija</option>
        <option value="namještaj">Namještaj</option>
      </select>
      <button type="submit">Objavi oglas</button>
    </form>
  );
};