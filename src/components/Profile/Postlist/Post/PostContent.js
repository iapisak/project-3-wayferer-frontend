import React, { Component } from 'react';

class PostContent extends Component{
  state = {
      content: '',
      expanded: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  componentDidMount(){
    this.setState({content:this.props.content})
  }

  render(){
    return(
      <div>
          <p>
            {this.state.expanded
            ?
            this.state.content
            :
            this.state.content.substring(0,1000)}
          </p>
          {this.state.length > 1000 && <button onClick={this.handleClick}>
            {this.state.expanded ? 'See Less' : 'See More'}
          </button>}
      </div>
    )
  }
}

export default PostContent;
