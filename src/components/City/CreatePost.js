import React, {Component} from 'react'
// import { thisExpression } from '@babel/types'
import axios from 'axios'

class CreatePost extends Component{
    state={
        user: '',
        data : [],
        ajaxLoaded : false,
        postContent : {
            city: '',
            slug : '',
            title : '',
            content : '',
        }
    }
    dropDownItemHandler = (e)=>{
        const slug = e.target.value;
        this.setState({
            postContent:{
                slug : slug,
                title : this.state.postContent.title,
                content: this.state.postContent.content,
            }
        })
    }
    postContentHandler=(e)=>{
        e.preventDefault();
        this.setState({
            postContent:{
                city : this.state.postContent.city,
                slug : this.state.postContent.slug,
                title : this.state.postContent.title,
                content: e.target.value,
            }
        })
    }
    postTitleHandler=(e)=>{
        e.preventDefault()
        this.setState({
            postContent:{
                city : this.state.postContent.city,
                slug : this.state.postContent.slug,
                title: e.target.value,
                content : this.state.postContent.content
            }
        })
    }
    submitHandler=(e)=>{
        const userId = localStorage.getItem('uid');
        axios.post(
            `${process.env.REACT_APP_API_URL}/cities/${this.state.postContent.slug}/posts/new`,{
                title : `${this.state.postContent.title}`,
                content : `${this.state.postContent.content}`,
                city : `${this.state.postContent.city}`,
                user : `${userId}`
            }
        ).then((res)=>{
            console.log(res)
        })
    }
    componentDidMount(){
        axios.get(
            `${process.env.REACT_APP_API_URL}/cities`,
            {withCredentials : true}
        ).then((res)=>{
            this.setState({
                data : res.data.data,
                ajaxLoaded: true
            })
        })
    }

    render(){
        return(
            <>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                +
                </button>

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">Create a New Post
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>

                            </div>
                            <div className="modal-body">
                                <div className="dropdown show" style={{margin: '10px 0 5px 10px'}}>
                                    <select onChange={this.dropDownItemHandler}>
                                        {this.state.ajaxLoaded && this.state.data.map(data=>{
                                            return <option value={data.slug} key={data._id}>{data.name}</option>
                                        })}
                                    </select>
                                </div>
                                <p style={{margin : '1px 0 0 10px'}}>
                                Title
                                </p>
                                <input onChange={this.postTitleHandler} type="text" style={{width:'200px', margin : '10px 0 0 10px'}}/>
                                <textarea style={{width:'450px', height: '200px',margin:"10px"}} onChange={this.postContentHandler}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.submitHandler}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreatePost