import React ,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import propt from 'prop-types'
import {connect} from 'react-redux'
import Appbar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import "./styleNavbar.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Icon } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
class navbar extends Component {
   
     render(){
        const {authenticated} = this.props;
         return(
             <Appbar>
                    <Toolbar className = "nav=container">
                    {authenticated ? (
                        
                             <nav className="row">
                                    <div className="dropdown">
                                    <Link to="/home">
                                        {" "}
                                        <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <HomeIcon style={{ color: lightBlue[50] }} />
                                                            </Badge>หน้าหลัก</div>
                                    </Link>
                                    </div>

                                    

                                    <div className="dropdown">
                                    <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <AssignmentIcon  style={{ color: lightBlue[50] }} />
                                                            </Badge>ลงทะเบียนสินค้า</div>
                                    <div className="dropdown-content">
                                        <Link to="/uploadsalecow">
                                        <div>ลงทะเบียนขายโคมีชีวิต</div>
                                        </Link>
                                        <Link to="/induction">
                                        <div>ลงทะเบียนโคประมูลมีชีวิต</div>
                                        </Link>
                                        <Link to="/upload/cattleproduct">
                                        <div>ลงทะเบียนขายผลิตภัณฑ์จากโค</div>
                                        </Link>
                                        <Link to="/upload/accesscow">
                                        <div>ลงทะเบียนสินค้าเบ็ดเตล็ด</div>
                                        </Link>
                                        
                                    </div>
                                    </div>

                                    <div className="dropdown">
                                            <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <StoreIcon  style={{ color: lightBlue[50] }} />
                                                            </Badge>จัดการสินค้า</div>
                                            <div className="dropdown-content">
                                                <Link to="/manage/salecattle">
                                                <div>จัดการซื้อขายโคมีชีวิต</div>
                                                </Link>
                                                <Link to="/manage/auction">
                                                <div>จัดการประมูลโคมีชีวิต</div>
                                                </Link>
                                                <Link to="/manage/product">
                                                <div>จัดการผลิตภัณฑ์จากโค</div>
                                                </Link>
                                                <Link to="/mange/accessories">
                                                <div>จัดการสินค้าเบ็ดเตล็ด</div>
                                                </Link>
                                            </div>
                                            </div>

                                    <div className="dropdown">
                                    <Link to="/offer/offerbuy">
                                        <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <LocalOfferIcon style={{ color: lightBlue[50] }} />
                                                            </Badge>เสนอซื้อสินค้า</div>
                                    </Link>
                                    </div>

                                    <div className="dropdown">
                                    <Link to="/calfmanage">
                                        <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <EqualizerIcon   style={{ color: lightBlue[50] }} />
                                                            </Badge>รายงาน</div>
                                        <div className="dropdown-content">
                                                <Link to="/stat/sell">
                                                <div>สถิติขายโคมีชีวิต</div>
                                                </Link>
                                                <Link to="/stat/auction">
                                                <div>สถิติการประมูลโคมีชีวิต</div>
                                                </Link>
                                                <Link to="/stat/product">
                                                <div>สถิติการขายผลิตภัณฑ์จากโค</div>
                                                </Link>
                                                <Link to="/stat/access">
                                                <div>สถิติการขายสินค้าเบ็ดเตล็ด</div>
                                                </Link>
                                            </div>
                                    </Link>
                                    </div>

                                

                                    

                                    <div className="dropdown">
                                    <Link to="/instructionmanualn">
                                        <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <MenuBookIcon style={{ color: lightBlue[50] }} />
                                                            </Badge>คู่มือการใช้งาน</div>
                                    </Link>
                                    </div>

                                    <div className="dropdown">
                                    <Link to="/calfmanage">
                                        <div className="dropbtn"><Badge color="secondary" size="Large ">
                                                                <SettingsIcon style={{ color: lightBlue[50] }} />
                                                            </Badge>ตั้งค่า</div>
                                        <div className="dropdown-content">
                                                <Link to="/stat/sell">
                                                <div>แก้ไขข้อมูลส่วนตัว</div>
                                                </Link>
                                                <Link to="/li/list">
                                                <div>รายการรับเรื่อง</div>
                                                </Link>
                                                
                                                <Link to="/login">
                                                <div >ออกจากระบบ</div>
                                                </Link>
                                            </div>
                                    </Link>

                                    
                                    </div>
                                    <div style ={{float:"right"}} >
                                        <Badge badgeContent={4} color="secondary" size="Large "style={{ marginTop:"10px",marginRight:"20px"}}>
                                        <MailIcon style={{ color: lightBlue[50] }} />
                                    </Badge>

                                    <StyledBadge style={{ marginRight:"0px"}}
                                        overlap="circle"
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                        
                                        }}
                                        variant="dot"
                                    >
                                        <Avatar   alt="Remy Sharp" src=""/>
                                    </StyledBadge>
 
                                        </div>
                                    </nav>
                                   
                        
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