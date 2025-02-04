import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'




const Countries = () => {



  const [countries, setCountries] = useState([])
  const fetchCountryData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    console.log(countries)
  }
  useEffect(() => {
    fetchCountryData()
  }, [])


  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { name, population, region, capital, flags } = country
          return <article key={name.official}>
            <img src={flags.png} />
            <div className="details">
              <h3>Official Name: </h3><span>{name.official}</span>
              <h4>Population: <span>{population}</span></h4>
              <h4>Region: <span>{region}</span></h4>
              <h4>Capital: <span>{capital}</span></h4>
              <div className="buttons"> <Link to={`countries/${name.common}`} className='btn'>Country Page</Link>
              </div>
            </div>
          </article>
        })}</section>
    </>
  )
}

export default Countries