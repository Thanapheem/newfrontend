import React from "react";
import {Button} from 'react-bootstrap';
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import Grid from "@material-ui/core/Grid";
import './styleAbor.css';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import acc1 from "../../Img/acc1.jpg";
import RoomIcon from '@material-ui/icons/Room';
import AssignmentIcon from '@material-ui/icons/Assignment';




class offerbyDetails extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                    
                     <div className=' 'style={{backgroundColor:"#F2F2F2", marginRight:"20%", marginLeft:"20%", height: "900px", marginTop:"20px"}}> 
                        <div className="col-11"> 
                        
                        <div className="row " style={{ marginTop:"5px"}}>  
                                                <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <ShoppingCartIcon />
                                                   </IconButton> <h5 style={{ marginTop:"12px"}}>รายละเอียดเสนอซื้อสินค้า</h5>  </div>
                                        <div container spacing={3}  style={{backgroundColor:"#ffffff",height:"260px", marginTop:"18px",marginLeft:"30px",marginRight:"-55px"}} >
                                            <div style={{ marginLeft:"20px"}}><h6>ราคา :</h6></div> 
                                            <div style={{ marginLeft:"20px"}}><h6>ประเภทสินค้า :</h6></div> 
                                            <div style={{ marginLeft:"20px"}}><h6>วันที่ลงขาย :</h6></div> 
                                            <div style={{ marginLeft:"20px"}}><h6>วันที่ผลิต :</h6></div> 
                                            <div style={{ marginLeft:"20px"}}><h6>วันที่หมดอายุ :</h6></div>
                                            <div style={{ marginLeft:"20px"}}><h6>ราต่อชิ้น :</h6></div>
                                            <div style={{ marginLeft:"20px"}}><h6>จำนวน :</h6></div>
                                            <div style={{ marginLeft:"20px"}}><h6>ผู้ลงขาย :</h6></div>
                                            <div style={{ marginLeft:"20px"}}><h6>เบอร์โทร :</h6></div>
                                        </div>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"300px", marginTop:"18px",marginLeft:"30px",marginRight:"15"}} >
                                            <div className="text-center" style={{marginLeft:"45%",marginTop:"10px"}}>รูปเสนอซื้อสินค้า</div>
                                        </Grid>
                                        <Grid container spacing={3}  style={{backgroundColor:"#ffffff",height:"200px", marginTop:"18px",marginLeft:"30px",marginRight:"15"}} >
                                        <div class="container">
                                        <div class="post-comments">

                                            <form>
                                            <div class="form-group">
                                                <label for="comment">เเสดงความคิดเห็น</label>
                                                <textarea name="comment" class="form-control" rows="3"></textarea>
                                            </div>
                                            <Button variant="success">ส่ง</Button>
                                            </form>

                                            
                                            
                                        </div></div>

                                        </Grid>
                                        
                                        
                                        </div>
                    
                    
                </div>
                     
                <Footer/>
            </div>
        );
    }
}
export default offerbyDetails;