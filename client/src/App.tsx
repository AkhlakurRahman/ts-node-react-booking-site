import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Listings from './components/Listings/Listings';
import Listing from './components/Listings/Listing/Listing';
import Home from './components/Home/Home';
import Host from './components/Host/Host';
import NotFound from './components/NotFound/NotFound';
import User from './components/User/User';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/host' component={Host} />

          <Route exact path='/listing/:id' component={Listing} />

          <Route exact path='/listings/:location?' component={Listings} />

          <Route exact path='/user/:id' component={User} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
