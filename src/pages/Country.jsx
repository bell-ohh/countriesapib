import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        name
          ? `https://restcountries.com/v3.1/name/${name}` // Fetch by country name
          : `https://restcountries.com/v3.1/all` // Default fetch (for home page, or no name)
      );
      const countryData = await response.json();

      if (!name && countryData.length > 0) {
        // If no name in URL (home page), navigate to first country
        navigate(`/country/${countryData[0].name.common}`);
      } else {
        setCountry(countryData);
      }
    };

    fetchCountryData();
  }, [name, navigate]);

  return (
    <div>
      {country.length > 0 ? (
        <div>
          <h1>{country[0].name.common}</h1>
          <p>Population: {country[0].population}</p>
          {/* Other country details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Country;
