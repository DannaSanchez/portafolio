import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Studies from './pages/Studies';
import Study from "./pages/Study";
import Proyect from "./pages/proyect";
import Proyects from './pages/Proyects.js';
import Error404 from './pages/Error404.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Studies' element={<Studies/>}></Route>
      <Route path='/Proyects' element={<Proyects/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path="/portafolio/" element={<Navigate replace to= {"/"}/>}></Route>
      <Route path="portafolio/" element={<Navigate replace to= {"/"}/>}></Route>
      <Route path='/Studies/:id' element={<Study/>}></Route>
      <Route path='/Proyects/:id' element={<Proyect/>}></Route>
    </Routes>
  </BrowserRouter>
);


