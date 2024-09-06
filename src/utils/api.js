import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptos = async () => {
  const response = await axios.get(`${API_BASE_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false
    }
  });
  return response.data;
};

export const fetchCryptoHistory = async (id, days) => {
  const response = await axios.get(`${API_BASE_URL}/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days
    }
  });
  return response.data;
};

export const fetchCryptoDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/coins/${id}`);
  return response.data;
};
