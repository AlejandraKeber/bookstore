import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
