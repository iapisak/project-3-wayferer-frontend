import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import PostDetail from '../components/PostDetail/PostDetail';
import CitiesContainer from "../components/City/CitiesContainer";

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
      <Route path="/users/:username" render={() => (
        <Profile
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      />
      <Route path="/posts/:post_id">
        <PostDetail currentUser={currentUser} />
      </Route>
      <Route path="/">
        {
          currentUser
          ?
          <CitiesContainer currentUser={currentUser}/>
          :
          <Home />
        }
      </Route>
  </Switch>
);
