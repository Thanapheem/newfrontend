import React ,{Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import propt from 'prop-types'
import {connect} from 'react-redux'
import Appbar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import "./styleNavbar.css";


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
                                        <div className="dropbtn">หน้าหลัก</div>
                                    </Link>
                                    </div>

                                    

                                    <div className="dropdown">
                                    <div className="dropbtn">ลงทะเบียนสินค้า</div>
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
                                            <div className="dropbtn">จัดการสินค้า</div>
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
                                        <div className="dropbtn">เสนอซื้อสินค้า</div>
                                    </Link>
                                    </div>

                                    <div className="dropdown">
                                    <Link to="/calfmanage">
                                        <div className="dropbtn">รายงาน</div>
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
                                        <div className="dropbtn">คู่มือการใช้งาน</div>
                                    </Link>
                                    </div>

                                    <div className="dropdown">
                                    <Link to="/calfmanage">
                                        <div className="dropbtn">ตั้งค่า</div>
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