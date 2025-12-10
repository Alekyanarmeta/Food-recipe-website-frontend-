import { useState } from 'react'
import Home from './components/Homepage'
import Recipes from './components/recipes';

import './App.css';
import Recipeprocedure from './components/Recipeprocedure';
import Procedure from './components/procedure';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        
        <Route path="Recipeprocedure" element={<Recipeprocedure />}></Route>
        <Route path="/procedure" element={<Procedure />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
