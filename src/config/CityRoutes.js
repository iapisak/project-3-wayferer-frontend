import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CityDetail from '../components/City/CityDetail';

export default (props) => {
  // let match = useRouteMatch();
  return (
    <Switch>
      <Route
        path="/:city_slug"
        render={() => (
          <CityDetail
            city={props.city}
            posts={props.posts}
            handleSubmit={props.handleSubmit}
          />
        )}
      />
      <Route>
        <h3>Please select a city</h3>
      </Route>
    </Switch>
  );
};
