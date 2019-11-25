import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import PostDetail from '../components/PostDetail/PostDetail';
import CitiesContainer from "../components/City/CitiesContainer";

export default ({ currentUser }) => (
  <Switch>
      <Route path="/profile" render={() => (
        <Profile currentUser={currentUser}/>
      )}
      />
      <Route path="/posts/:post_id" component={PostDetail} />
      <Route
        path="/"
        component={currentUser ? CitiesContainer : Home}
      />
  </Switch>
);
