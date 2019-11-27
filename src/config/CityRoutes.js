import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CityDetail from '../components/City/CityDetail';

export default (props) => {
  return (
    <Switch>
      <Redirect exact from='/' to='/san-francisco' />
      <Route
        path="/:city_slug"
        render={() => (
          <CityDetail
            city={props.city}
            cities={props.cities}
            currentUser={props.currentUser}
          />
        )}
      />
      <Route>
        <h3>Please select a city</h3>
      </Route>
    </Switch>
  );
};
