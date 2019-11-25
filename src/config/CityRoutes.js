import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CityDetail from '../components/City/CityDetail';

export default (props) => {
  return (
    <Switch>
      <Route
        path="/:city_slug"
        render={() => (
          <CityDetail
            city={props.city}
          />
        )}
      />
      <Route>
        <h3>Please select a city</h3>
      </Route>
    </Switch>
  );
};
