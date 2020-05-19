import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import AuthPage from './AuthPage.js';
import './App.css';
import AboutUs from './AboutUs.js';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage.js';
import ListPage from './ListPage.js';

export default class App extends Component {

  state = { token: localStorage.getItem("TOKEN")}

  handleTokenChange = (myToken) => { 
    this.setState({ token: myToken});
    localStorage.setItem("TOKEN", myToken);
  }

  render() {
      return (
          
          <div className="container">
              <Router>

                  <Switch>
                      <Route 
                          path="/" 
                          exact
                          render={(routerProps) => <HomePage {...routerProps} />} 
                      />
                      <Route 
                          path="/auth" 
                          exact
                          render={(routerProps) => <AuthPage handleTokenChange={this.handleTokenChange}{...routerProps} />} 
                      />
                      <Route 
                          path="/aboutus" 
                          exact
                          render={(routerProps) => <AboutUs {...routerProps} />} 
                      />
                      <Route 
                          path="/list" 
                          exact
                          render={(routerProps) => <ListPage {...routerProps} />} 
                      />
                      <Route 
                          path="/detail" 
                          exact
                          render={(routerProps) => <DetailPage {...routerProps} />} 
                      />
                     
                      
                      
                  </Switch>
              </Router>
          </div>
      )
  }
}

