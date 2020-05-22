import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import AuthPage from './AuthPage.js';
// import './App.css';
import AboutUs from './AboutUs.js';
import HomePage from './HomePage.js';
import ImageDetailPage from './ImageDetailPage.js';
import MoodButtonPage from './MoodButtonPage.js';
import FavoritesPage from './FavoritesPage.js';
import Footer from './Footer.js';


export default class App extends Component {

  state = { 
        token: localStorage.getItem("TOKEN"),
            user: ''
        }

  handleTokenChange = (myToken, user) => { 
    this.setState({ token: myToken, user: user });
    localStorage.setItem("TOKEN", myToken);
  }

  render() {
      return (
          
          <div className="container">
              {this.state.user}
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
                          render={(routerProps) => <MoodButtonPage {...routerProps} />} 
                      />
                      <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <ImageDetailPage {...routerProps}
                            token={this.state.token} />} 

                        />
                        <Route 
                            path="/favorites" 
                            exact
                            render={(routerProps) => <FavoritesPage {...routerProps}
                            token={this.state.token} />} 

                        />
                     
                      
                      
                  </Switch>
                  <Footer />
              </Router>
          </div>
      )
  }
}

