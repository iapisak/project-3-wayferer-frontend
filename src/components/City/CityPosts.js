import React, {Component} from 'react'
import axios from 'axios'
import Post from '../Profile/Postlist/Post/Post'

const CityPosts = (props) => {
    return(
        <>
        {props.posts.map(post => {
            return <Post post={post} key={post._id}/>
        })}
        </>
    )
}
        

      

export default CityPosts