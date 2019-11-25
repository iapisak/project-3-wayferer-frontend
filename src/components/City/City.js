import React from 'react';

const City = (props) => {
    return(
        <div className="city-card">
            <img src={props.city.photo} className="city-icon" alt="" />
            <h2 className="city-list-name">{props.city.name}</h2>
        </div>
    );
};

export default City;
