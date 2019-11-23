import React, {Component} from 'react'
// import { thisExpression } from '@babel/types'
import axios from 'axios'

class CreatePost extends Component{
    state={
        user: '',
        data : [],
        ajaxLoaded : false,
        city: '',
        slug : '',
        title : '',
        content : '',
       
    }

        dropDownItemHandler = (e)=>{
        const slug = e.target.value;
        this.setState({slug : slug})
    }
            
                
    postContentHandler=(e)=>{
        e.preventDefault();
        this.setState({content: e.target.value})
    }
            
              
            
    postTitleHandler=(e)=>{
        e.preventDefault()
        this.setState({title: e.target.value})
    }
                
                
    submitHandler=(e)=>{
        const userId = localStorage.getItem('uid');
        const {title,content,city,slug} = this.state
        axios.post(
            `${process.env.REACT_APP_API_URL}/cities/${slug}/posts/new`,{
                title,
                content,
                city,
                user :userId
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