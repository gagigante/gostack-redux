import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return (
    <h1>catalog</h1>
  );
}

export default Catalog;