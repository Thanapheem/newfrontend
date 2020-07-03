import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './page/user/login';
import signup from './page/user/sigup';
import home from './page/home';
import jwt from 'jwt-decode';
import AuthRoute from './component/AuthR';
import homel from './page/homelogin'

    let authenticated;
    const token = localStorage.FBIdToken;
    if(token){
      const decodedToken = jwt(token)
      if(decodedToken.exp * 1000 < Date.now()){
        window.location.href = '/login'
        authenticated = false;
      }
      else {
        authenticated = true;
      }
      
    }

    class App extends Component {
      render(){
        return (

            <Router>
              <Switch>
                <Route exact path = "/" component = {home}/>
                <AuthRoute exact path = "/login" component={login} authenticated ={authenticated}/>
                <AuthRoute exact path = "/signup" component= {signup} authenticated ={authenticated}/>
                <Route exact path = '/home' component = {homel} />
              </Switch>
            </Router>
            
          
      
        );
      }
    }

    export default App;
