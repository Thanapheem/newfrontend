import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

import Appbar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';




class navbar extends Component {
   
     render(){
  
         return(
             <Appbar>
                 <Toolbar>
                    <Button color ="inherit" component ={Link} to="/">ตลาดซื้อขายและประมูลโคออนไลน์</Button>
                    <Button color ="inherit" component ={Link} to = "/login">Login</Button>
                 </Toolbar>
             </Appbar>

         )
     }
 }
 export default navbar;