import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import ProductosPage from './components/pages/ProductosPage';
import Navbar from './components/layout/Navbar';
// import { withAuthentication } from './session';
import PrivateRoute from './components/layout/PrivateRoute';
import * as ROUTES from './constants/routes';


const App = () => {
  
  return (

      <Router>
          <Navbar />
          <div className="container">
            
            <Switch>
              <Route exact path={ROUTES.HOME} component={ HomePage } />
              <Route exact path={ROUTES.LOGIN} component={ LoginPage } />
              <PrivateRoute path={ROUTES.PRODUCTS} component={ ProductosPage } />
            </Switch>

          </div>
    
      </Router>
  );
};

export default App