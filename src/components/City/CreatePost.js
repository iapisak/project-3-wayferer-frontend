import React, {Component} from 'react'
import { thisExpression } from '@babel/types'

class CreatePost extends Component{
    state={
        postContent : '',
        city: '',
        user: '',
        title: ''
    }
    dropDownItemHandler = (e)=>{
        e.preventDefault()
        console.log(e.target.text)
        this.setState({
            city : e.target.text
        })
    }
    postContentHandler=(e)=>{
        e.preventDefault();
        this.setState({
            postContent: e.target.value
        })
        console.log(e.target.value)
    }
    postTitleHandler=(e)=>{
        e.preventDefault()
        this.setState({
            title: e.target.value
        })
        console.log(e.target.value)
    }

    render(){
        return(
            <>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                +
                </button>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">Create a New Post
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                
                            </div>
                            <div className="modal-body">
                                <div class="dropdown show">
                                    <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:'200px', margin : '10px 0 0 10px', backgroundColor:'white', color:'black'}}>
                                        {this.state.city ? this.state.city : "Select City"}
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" onClick={this.dropDownItemHandler}>City 1</a>
                                        <a className="dropdown-item" onClick={this.dropDownItemHandler}>City 2</a>
                                        <a className="dropdown-item" onClick={this.dropDownItemHandler}>City 3</a>
                                        <a className="dropdown-item" onClick={this.dropDownItemHandler}>City 3</a>
                                        <a className="dropdown-item" onClick={this.dropDownItemHandler}>City 3</a>
                                        <a className="dropdown-item" onClick={this.dropDownItemHandler}>City 3</a>
                                    </div>
                                </div>
                                <p style={{margin : '1px 0 0 10px'}}>
                                Title
                                </p>
                                <input onChange={this.postTitleHandler} type="text" style={{width:'200px', margin : '10px 0 0 10px'}}/>
                                {/* <input type="text" style={{width:'400px', height:'200px', margin:'10px'}} /> */}
                                <textarea style={{width:'450px', height: '200px',margin:"10px"}} onChange={this.postContentHandler}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreatePost