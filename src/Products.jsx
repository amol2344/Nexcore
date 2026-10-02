import React, { useState, useMemo, useCallback, memo } from 'react';
import './Products.css';
const PRODUCTS = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: 'Product ' + i,
  price: (i * 37) % 1000,
}));

const Row = memo(function Row({ product, onSave }) {
  console.log('Row rendered:', product.id);
  return (
    <li className="product-row">
      <span>
        <span className="product-name">{product.name}</span>
        <span className="product-price">${product.price}</span>
      </span>
      <button className="btn btn-small" onClick={() => onSave(product.id)}>
        Save
      </button>
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
    <div className="products">
      <h1>Products</h1>

      <div className="toolbar">
        <input
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products"
        />
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>

      <p className="saved-count">Saved: {saved.length}</p>

      {filtered.length === 0 ? (
        <p className="empty">No products match "{search}".</p>
      ) : (
        <ul className="product-list">
          {filtered.map((p) => (
            <Row key={p.id} product={p} onSave={handleSave} />
          ))}
        </ul>
      )}
    </div>
  );
}