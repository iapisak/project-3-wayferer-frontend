import React from 'react';
import { Link } from 'react-router-dom';
import City from './City';
import './City.css';

const CityList = (props) => {
  return(
    <div className="city-list">
      {props.cities.map(city => {
        return (
          <Link to={`/${city.slug}`} key={city._id}>
            <City city={city} />
          </Link>
        )
      })}
    </div>
  )
}

export default CityList;
