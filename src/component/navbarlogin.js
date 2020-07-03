import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

import Appbar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { Menu,MenuItem } from '@material-ui/core';




  
class navbarlogin extends Component {
    
     render(){
  
         return(
             <Appbar>
                 <Toolbar>
                    <Button color ="inherit" component ={Link} to="/">ตลาดซื้อขายและประมูลโคออนไลน์</Button>
                    <Button color ="inherit" component ={Link} to = "/login" >ลงทะเบียนสินค้า</Button>
                 </Toolbar>
             </Appbar>

         )
     }
 }
 export default navbarlogin;