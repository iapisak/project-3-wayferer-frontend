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
        return(
        <>
        {this.state.expanded ? this.state.content:this.state.content.substring(0,1000)}
        <button onClick={e => {this.setState({expanded:!this.state.expanded})}}>{this.state.expanded ? 'See Less':'See More'}</button> 
        </>)
    }
}

export default PostContent