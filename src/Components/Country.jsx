import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Country = () => {
    const [country, setCountry] = useState([])
    const { name } = useParams()
    console.log(name)
    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${name}`
            )
            const country = await response.json()
            console.log(`https://restcountries.com/v3.1/name/${name}`)
            setCountry(country)
        }
        fetchCountryData()
        console.log(country)
    }, [])
    return (

        <>
{(country) ? (<section className="country">
                <Link to="/" className="btn btn Light">
                <FontAwesomeIcon icon={faArrowLeft} />
                    Back Home</Link>

                {country.map((c) => {
                    const { flags, name, nativeName, population, region, subregion, capital, topLevelDomain, borders } = c

                    return (
                        <article key={name}>
                            <div className="country-inner">
                                <div className="flag">
                                <img src={flags.png} />
                                </div>
                                <div className="country-details">

                                    <div>
                                        <h2>{name.common}</h2>
                                        <h5>Native Name: <span>{nativeName}</span></h5>
                                        <h5>Population: <span>{population}</span></h5>
                                        <h5>Region: {region}</h5>
                                        <h5>Sub-Region: {subregion}</h5>
                                        <h5>Capital: {capital}</h5>
                                    </div>
                                    <div>
                                        <h5>Top Level Domain: {topLevelDomain}</h5>
                                    </div>
                                </div></div>

                            <div>
                                <h3>Border Countries: </h3>
                                <div className="borders">
                                    {borders?.map((border) => {
                                        return (
                                            <ul key={border}>
                                                <li>{border}</li>
                                            </ul>
                                        )

                                    })}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section >) : (<p>Loading Country</p>)}  
            
        </>
    )
}

export default Country