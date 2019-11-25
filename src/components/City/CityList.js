import React from 'react';
import City from './City';
import './City.css';

const CityList = (props) => {
  return(
    <div className="city-list">
      {props.cities.map(city => {
        return (
          <City
            displayPosts={props.displayPosts}
            city={city}
            key={city._id}
          />
        )
      })}
    </div>
  )
}

export default CityList;
