import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import "../../page/styleWebpage.css";
import Navbar from "../../component/navbar";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Grid from "@material-ui/core/Grid";
import './manage.css';
import SearchIcon from '@material-ui/icons/Search';






class manageaccess extends React.Component{
    render(){
        return(
            <div>
                
                <Navbar/>
                        
                        
                        
                                 <div className="xs=12" style={{ marginLeft:"10%"}}> <div className="row container-fluid r2-c4 "><table class="table table-bordered"> 
                                 
                                 
                                 <div> <TableContainer component={Paper} style={{marginTop:"20px"}}>
                                     <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                     style={{outline:"none"}}
                                    startIcon={<ShoppingBasketIcon  />}
                                >
                                  <h4>จัดการสินค้าเบ็ดเตล็ด </h4>   
                                </Button>  <TextField className="textField-width1  " style={{backgroundColor:"White",marginLeft:"59%", marginTop:"2px"}}
                                                     id="outlined1"
                                                    label="ค้นหาชื่อสินค้า"
                                                    size="small" /> 

                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <SearchIcon  />
                                                   </IconButton>
                                 <div className="text-header-checkup" style={{ marginTop:"10px"}}><a href="/listproduct/auction"style={{ marginLeft:"0%"}}>รายการโคที่กำลังวางขาย</a> <a href="/listproduct/auction" style={{ marginLeft:"2%"}}>รายการโคที่ยังไม่วางขาย</a> <a href="/listproduct/auction" style={{ marginLeft:"2%"}}>รายการสินค้าที่หมดเวลาขาย</a> <a href="/listproduct/auction" style={{ marginLeft:"2%"}}>ประวัติการขายที่เสร็จสิ้น</a>
                                 
                                                 
                                              </div>
                                <h3><Table className aria-label="simple table">
                                
                                    <TableHead >
                                    
                                    <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">ประเภทสินค้า</TableCell>
                                        <TableCell align="center">ชื่อสินค้า</TableCell>
                                        <TableCell align="center">ราคา(บาท)</TableCell>
                                        <TableCell align="center">จำนวน</TableCell>
                                        <TableCell align="center">วันที่ลงขาย</TableCell>
                                        <TableCell align="center">เวลาที่เหลือ</TableCell>
                                        <TableCell align="center">ดูรายละเอียด</TableCell>
                                        <TableCell align="center">ตัวเลือก</TableCell> 
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                     
                                        <TableRow >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center">11/11/2019</TableCell>
                                        <TableCell align="center">15/11/2019</TableCell>
                                        <TableCell align="center"> -</TableCell>
                                        
                                        <TableCell align="center"> <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                style={{outline:"none"}}
                                    startIcon={<SaveIcon />}
                                >
                                    จัดการสินค้า
                                </Button></TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>

                                    
                                </Table></h3>
                                </TableContainer></div>
                                 </table>
                                 <div className='col-12 text-right 'style={{backgroundColor:"#ffffff", marginLeft:"%",marginRight:"25%"}}>
                           
                        </div>
                                 </div> </div>
                                 
                                 
                
            </div>
        );
    }
}
export default manageaccess;

