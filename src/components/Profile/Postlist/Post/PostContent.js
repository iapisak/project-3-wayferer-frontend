import React,{Component} from 'react';

class PostContent extends Component{
    state = {
        content:"",
        expanded:false
    }
    
    componentDidMount(){
        this.setState({content:this.props.content})
    }
    render(){
        {expanded ? content:content.substring(1000)}
        <button onClick={this.setState({expanded:!expanded})}>See More</button>
    }
}

export default PostContent