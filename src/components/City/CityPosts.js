import React, {Component} from 'react'
import axios from 'axios'
import Post from '../Profile/Postlist/Post/Post'
class CityPosts extends Component{
    state = {
        posts:[{
            
        }],
        ajaxLoaded:false
    }

    // componentDidMount(){
    //     axios.get(`${process.env.REACT_APP_API_URL}/city/${this.props.cityId}/posts`)
    //     .then(posts => {
    //         this.setState({posts,ajaxLoaded:true})
    //     })
    // }

    render(){
        
        return(
            <>
            {ajaxLoaded  && this.state.posts.map(post => {
                return <Post post={post} key={post._id}/>
            })}
            </>
        )
    }
    
}