import React, { useState, useEffect } from 'react';
import './App.css';

function CountrySelector() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countriesList = data.map(country => ({
          label: country.name.common,
          value: country.cca2
        }));
        setCountries(countriesList);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="country-selector">
      <h1>Select a Country</h1>
      <select
        value={selectedCountry}
        onChange={e => setSelectedCountry(e.target.value)}
      >
        <option value="">--Please choose a country--</option>
        {countries.map(country => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelector;
