import React from 'react';
import CryptoCard from '../components/CryptoCard';

function Favorites({ cryptos, favorites, toggleFavorite }) {
  const favoriteCryptos = cryptos.filter(crypto => favorites.includes(crypto.id));

  return (
    <div>
      <h2>Mes Favoris</h2>
      <div className="crypto-list">
        {favoriteCryptos.map(crypto => (
          <CryptoCard
            key={crypto.id}
            crypto={crypto}
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
