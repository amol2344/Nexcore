import React, { useState, useMemo, useCallback, memo } from 'react';

const PRODUCTS = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: 'Product ' + i,
  price: (i * 37) % 1000,
}));

const Row = memo(function Row({ product, onSave }) {
  console.log('Row rendered:', product.id);
  return (
    <li>
      {product.name} - ${product.price}{' '}
      <button onClick={() => onSave(product.id)}>Save</button>
    </li>
  );
});

export default function Products() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState([]);

  const filtered = useMemo(() => {
    console.log('Filtering...');
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 50);
  }, [search]);

  
  const handleSave = useCallback((id) => {
    setSaved((prev) => [...prev, id]);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />{' '}
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      <p>Saved: {saved.length}</p>

      <ul>
        {filtered.map((p) => (
          <Row key={p.id} product={p} onSave={handleSave} />
        ))}
      </ul>
    </div>
  );
}
