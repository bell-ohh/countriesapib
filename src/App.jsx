import React from "react";
import { Routes, Route } from "react-router-dom";
import Country from "./pages/Country";
import SavedCountries from "./pages/SavedCountries";
import "/src/index.css"; 

const App = () => {
  return (
    <Routes>
      {/* Define the routes for the homepage, country page, and saved countries page */}
      <Route path="/" element={<Country />} />  {/* Set Country page as homepage */}
      <Route path="/country/:name" element={<Country />} /> {/* Country page for each country */}
      <Route path="/saved-countries" element={<SavedCountries />} /> {/* Saved countries page */}
    </Routes>
  );
};

export default App;
