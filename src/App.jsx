import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';


const Products = lazy(() => import('./Products'));
const About = lazy(() => import('./About'));

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/about">About</Link>
      </nav>

     
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}
