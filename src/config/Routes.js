import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import PostDetail from '../components/PostDetail/PostDetail';
import CitiesContainer from "../components/City/CitiesContainer";
import create from '../components/City/CreatePost'

export default ({ currentUser }) => (
  <Switch>
      <Route
        exact path="/"
        component={currentUser ? CitiesContainer : Home}
      />
      <Route path ='/city/create' component={create} />
      <Route path="/profile" render={() => (
        <Profile currentUser={currentUser}/>
      )}
      />
      <Route path="/posts/:post_id" component={PostDetail} />
  </Switch>
);
