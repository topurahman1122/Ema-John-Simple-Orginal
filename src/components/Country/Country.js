import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country.area)
    console.log(props.country);

    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>

            <p>Population: {props.country.population}</p>
            <p><small>Area: {props.country.area}</small></p>
            <p><small>Region:{props.country.region}</small></p>

        </div>
    );
};

export default Country;