import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Nav/NavBar';
import NavItem from './components/Nav/NavItem';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";

import { NavItemsArray } from './components/Partials/NavItemsArray';
import './sass/app.scss';

const App = () => {
  return (
    <Router>
      <header>
        <Navbar>
          {NavItemsArray.map((e, i) => (
            <NavItem 
              key={i}
              title={e.title}
              cName={e.cName}
              url={e.url}
            />
          ))}
        </Navbar>
      </header>

      <Switch>
        <Route 
          path="/"  
          render={() => <Home />}
        />
      </Switch>
      
      <Footer />
    </Router>
    
  );
}

export default App;
