import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Country App!</h1>
      <p>Select a country or view saved countries.</p>
      <Link to="/saved-countries" className="btn btn-light">Go to Saved Countries</Link>
    </div>
  );
};

export default HomePage;
