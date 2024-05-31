import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

export function App() {
  return (
    <BrowserRouter basename='/chirp'>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
