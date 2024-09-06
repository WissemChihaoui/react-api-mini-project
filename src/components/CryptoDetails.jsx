import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCryptoDetails } from '../utils/api';
import CryptoChart from './CryptoChart';
import './CryptoDetails.css';

function CryptoDetails() {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchCryptoDetails(id);
      setCrypto(data);
    };
    fetchDetails();
  }, [id]);

  if (!crypto) return <p>Chargement...</p>;

  return (
    <div className="crypto-details">
      <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
      <img src={crypto.image.large} alt={crypto.name} className="crypto-icon" />
      <p>Prix actuel : ${crypto.market_data.current_price.usd}</p>
      <p>Capitalisation boursière : ${crypto.market_data.market_cap.usd}</p>
      <p>Classement : {crypto.market_cap_rank}</p>
      <p>Description : {crypto.description.en || "Aucune description disponible."}</p>
      <CryptoChart cryptoId={crypto.id} />
    </div>
  );
}

export default CryptoDetails;
