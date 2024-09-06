import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchCryptos } from './utils/api';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import CryptoDetails from './components/CryptoDetails';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const data = await fetchCryptos();
      setCryptos(data);
    };
    fetchCryptoData();
  }, []);

  const toggleFavorite = (cryptoId) => {
    let updatedFavorites;
    if (favorites.includes(cryptoId)) {
      updatedFavorites = favorites.filter(id => id !== cryptoId);
    } else {
      updatedFavorites = [...favorites, cryptoId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <h1>Tableau de Bord des Cryptomonnaies</h1>
        <Routes>
          <Route path="/" element={<Home cryptos={cryptos} toggleFavorite={toggleFavorite} favorites={favorites} />} />
          <Route path="/favorites" element={<Favorites cryptos={cryptos} favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="/details/:id" element={<CryptoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
