import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CityDetail from '../components/City/CityDetail';

export default (props) => {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route
        path={`${match.path}/cities/:city_slug`}
        render={() => (
          <CityDetail
            city={props.activeCity}
            posts={props.posts}
            handleSubmit={props.handleCreateSubmit}
          />
        )}
      />
    </Switch>
  );
};
