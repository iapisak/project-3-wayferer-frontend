import React, { Component } from 'react';

import Post from './Post/Post';

class Postlist extends Component {
  state = {
    posts: [
      {
        title: 'fake1',
        content: 'fake content'
      },
      {
        title: 'fake2',
        content: 'fake content'
      },
      {
        title: 'fake3',
        content: 'fake content'
      },
    ],
  }

  getPosts = () => {
    // axios.get(

    // ).then((res) => {
    //   this.setState({
    //     posts: res.data,
    //   });
    // }).catch((err) => {
    //   console.log(err);
    // });
  };

  render() {
    return (
      <div className="postlist">
        <h2>Posts</h2>
        {this.state.posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    );
  }
}

export default Postlist;
