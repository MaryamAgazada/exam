import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './pages/home/Home';
import Add from './pages/add/Add';
import WishList from './pages/wishlist/WishList';
import Search from './pages/search/Search';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="add" element={<Add />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="search" element={<Search />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
