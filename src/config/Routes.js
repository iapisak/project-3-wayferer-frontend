import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import PostDetail from '../components/PostDetail/PostDetail';
import Cities from '../components/City/Cites'

export default ({ currentUser }) => (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/cities' component={Cities}/>
      <Route path="/profile" render={() => (
        <Profile currentUser={currentUser}/>
      )}
      />
      <Route path="/posts/:post_id" component={PostDetail} />
  </Switch>
);
