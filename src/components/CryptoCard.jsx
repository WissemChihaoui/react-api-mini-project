import React from 'react';
import { Link } from 'react-router-dom';
import './CryptoCard.css';

function CryptoCard({ crypto, toggleFavorite, isFavorite }) {
  return (
    <div className="crypto-card">
      <img src={crypto.image} alt={crypto.name} className="crypto-card-icon" />
      <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
      <p>Prix : ${crypto.current_price}</p>
      <p>Variation sur 24h : {crypto.price_change_percentage_24h}%</p>
      <p>Volume échangé : ${crypto.total_volume}</p>
      <button 
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={() => toggleFavorite(crypto.id)}
      >
        {isFavorite ? 'Retirer des Favoris' : 'Ajouter aux Favoris'}
      </button>
      <Link to={`/details/${crypto.id}`} className="details-link">Voir les détails</Link>
    </div>
  );
}

export default CryptoCard;
