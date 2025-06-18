import React from 'react';
import Card from './Card';

const Product = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="flex flex-wrap gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Product;
