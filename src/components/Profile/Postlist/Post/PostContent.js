import React, { Component } from 'react';
import '../Post/Post.css'

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
      <div className="post-content">
          <p>
            {this.state.expanded
            ?
            content
            :
            content.substring(0,1000)}
          </p>
          {content.length > 1000 && <button onClick={this.handleClick} className="see-toggle">
            {this.state.expanded ? 'Show Less' : 'Show More'}
          </button>}
      </div>
    )
  }
}

export default PostContent;
