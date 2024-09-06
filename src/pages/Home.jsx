import React, { useState } from 'react';
import CryptoCard from '../components/CryptoCard';
import './Home.css';

function Home({ cryptos, toggleFavorite, favorites }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher une cryptomonnaie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="crypto-list">
        {filteredCryptos.map(crypto => (
          <CryptoCard
            key={crypto.id}
            crypto={crypto}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(crypto.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
