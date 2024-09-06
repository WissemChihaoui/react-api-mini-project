import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCryptoHistory } from '../utils/api';

function CryptoChart({ cryptoId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const history = await fetchCryptoHistory(cryptoId, 7);
      const formattedData = history.prices.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price
      }));
      setData(formattedData);
    };

    fetchData();
  }, [cryptoId]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CryptoChart;
