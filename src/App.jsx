import React, { useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Home from './Home';
import Login from './Login';
import AddSeller from './AddSeller';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Addseller" element={<AddSeller />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
