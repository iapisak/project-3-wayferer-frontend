import React, { Component } from 'react';

class PostContent extends Component{
  state = {
      expanded: false,
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render(){
    const { content } = this.props;
    return(
      <div>
          <p>
            {this.state.expanded
            ?
            content
            :
            content.substring(0,1000)}
          </p>
          {content.length > 1000 && <button onClick={this.handleClick}>
            {this.state.expanded ? 'See Less' : 'See More'}
          </button>}
      </div>
    )
  }
}

export default PostContent;
