import React from 'react'
import CityPosts from './CityPosts'

const CityDetail = (props) => {
const {city,posts} = props
  return(
  <>
    <div className ="top-banner">
      <div className = "city-title">
        <h2>{city.name}</h2>
        <p>{city.desciption}</p>
      </div>
      <img src={city.image}/>
    </div>
    <CityPosts posts={posts}/>
  </>

  )
}



export default CityDetail