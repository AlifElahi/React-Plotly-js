import React from 'react';
import { Route, Switch } from "react-router-dom";
import landing from './screens/landing';
import Barchart from './screens/barchart';
import Splom from './screens/splom';
const Main = () => {

  return (
    <main>
      <Switch>
        <Route exact path='/' component={landing} />
        <Route exact path='/barchart' component={Barchart} />
        <Route exact path='/splomchart' component={Splom} />
      </Switch>
    </main>
  );
};

export default Main;