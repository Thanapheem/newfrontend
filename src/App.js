// general
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//หน้าทั่วไป
import login from './page/user/login';
import signup from './page/user/sigup';
import home from './page/home';
import AuthRoute from './component/AuthR';
//หน้าอัพโหลด
import uploadcattle from './page/uploadproduct/uploadcow';
import uploadauction from './page/uploadproduct/uploadauction';
import uploadacc from './page/uploadproduct/uploadacc';
import uploadprd from './page/uploadproduct/uploadproduct';
//หน้าจัดการสินค้า
import managesale from './page/mangeproduct/managesale';
import mangeauction from './page/mangeproduct/manageauction';
import mangeproduct from './page/mangeproduct/manageproduct';
import manageaccess from './page/mangeproduct/manageaccess';

//หน้าเสนอซื้อสินค้า 
import offerbuy from './page/offerofbuy/offerbuy';






// redux&blbl
import {Provider} from 'react-redux';
import store from './redux/store'
import {SET_AUTHENTICATED} from './redux/type';
import {logout,getuser} from './redux/Action/userAct';
import Axios from 'axios';
import jwt from 'jwt-decode';
import uploadproduct from './page/uploadproduct/uploadproduct';
    const token = localStorage.FBIdToken;
    if(token){
      const decodedToken = jwt(token)
      
      if(decodedToken.exp * 1000 < Date.now()){
        store.dispatch(logout)
        window.location.href = '/login'

      }
      else {
        store.dispatch({type : SET_AUTHENTICATED});
        Axios.defaults.headers.common['Authorization']=token;
        store.dispatch(getuser());
      }
      
    }

    class App extends Component {
      render(){
        return (
          <Provider store ={store}>
            <Router>
      
             <div className = 'container'>
             <Switch>
                <Route exact path = "/" component = {home}/>
                <AuthRoute exact path = "/login" component={login} />
                <AuthRoute exact path = "/signup" component= {signup} /> 
                <Route exact path = '/home' component = {home} />
                //หน้าอัพโหลด
                <Route exact path = '/uploadaccessorries' component = {uploadacc}/>
                <Route exact path = '/uploadsalecow' component ={uploadcattle}/>
                <Route exact path = '/uploadproduct' component = {uploadproduct}/>
                <Route exact path = '/uploadauction' component = {uploadauction}/>
                //หน้าจัดการ
                <Route path = "/manage/salecattle" component = {managesale}/>
                <Route path = "/manage/auction" component = {mangeauction}/>
                <Route path = "/manage/product" component = {mangeproduct}/>
                <Route path = "/mange/access" component = {manageaccess}/>
                //หน้าเสนอซื้อสินค้า
                <Route path = "/offer/offerbuy" component = {offerbuy}/>
             
                
              </Switch>

             </div>
            </Router>
            </Provider>

          
      
        );
      }
    }

    export default App;
