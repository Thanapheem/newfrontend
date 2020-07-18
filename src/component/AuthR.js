import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propt from 'prop-types'
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );

const mapSate = (state) =>({
  authenticated: state.user.authenticated
})
AuthRoute.propt = {
  user : propt.object.isRequired
}
export default connect(mapSate)(AuthRoute);