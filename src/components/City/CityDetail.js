import React from 'react'
import CityPosts from './CityPosts'

const CityDetail = (props) => {
const {city,posts} = props
  return(
  <div className="city-detail">
    <div className ="city-top-banner">
      <img src={city.photo} className="city-photo" alt=""/>
      <div className = "city-title">
        <h2>{city.name}</h2>
        <p>A description goes here...</p>
      </div>
    </div>
    <CityPosts
      posts={posts}
      handleSubmit={props.handleSubmit}
    />
  </div>

  )
}



export default CityDetail