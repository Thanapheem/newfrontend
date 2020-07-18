import React ,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import propt from 'prop-types'
import {connect} from 'react-redux'
import Appbar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';




class navbar extends Component {
   
     render(){
        const {authenticated} = this.props;
         return(
             <Appbar>
                    <Toolbar className = "nav=container">
                    {authenticated ? (
                        <Fragment>
                             <Button color ="inherit" component ={Link} to="/">ตลาดซื้อขายและประมูลโคออนไลน์</Button>
                             <Button color ="inherit" component ={Link} to = "/uploadcow">ลงทะเบียนขายโค</Button>
                        </Fragment>
                    ) : (
                        <Fragment>
                        <Button color ="inherit" component ={Link} to="/">ตลาดซื้อขายและประมูลโคออนไลน์</Button>
                        <Button color ="inherit" component ={Link} to = "/login">Login</Button>
                    </Fragment>
                    )}
                    
                   
               
                 </Toolbar>
             </Appbar>

         )
     }
 }
 navbar.propt = {
     authenticated :propt.bool.isRequired
 };
 const mapstate = (state) =>({
     authenticated : state.user.authenticated
 })
 export default connect(mapstate)(navbar);