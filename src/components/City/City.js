import React from 'react'

const City = (props) => {
   
    return(
        <div onClick = {e => {props.displayPosts(props.city._id) }}className="city-card">
            <div className="city-icon" style ={{ backgroundImage:`url(${props.city.photo})`}}/>
            <h3>{props.city.name}</h3>
        </div>
    )
}

export default City