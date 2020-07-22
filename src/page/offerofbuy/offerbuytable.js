import React from "react";
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
import "../../../component/styleWebpage.css";
import HeaderLogin from "../../../HeaderLogin.js";
import Navbar from "../../../Navbar";
import Footer from '../../../Footer';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

class offerbuytable extends React.Component{
    render(){
        return(
            <div>
                <HeaderLogin/>
                <Navbar/>
                        <div className='row  'style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"15%",marginRight:"15%"}}>
                            
                        </div>
                        
                        <div className='row  'style={{backgroundColor:"#e6e6e6",marginTop:"30px", marginLeft:"15%",marginRight:"15%"}}> 
                                 <div className="col-12"> <div className="row container-fluid r2-c4 "><table class="table table-bordered"> 
                                 
                                 <Button
                                    variant="contained"
                                    color="primary"
                                    size="Large "
                                     style={{outline:"none"}}
                                    startIcon={<LocalOfferOutlinedIcon />}
                                >
                                  <h5>รายการเสนอซื้อสินค้า</h5>   
                                </Button>  <TextField className="textField-width5  " style={{backgroundColor:"#e6e6e6",marginLeft:"65%"}}
                                                     id="outlined1"
                                                    label="ค้นหารายการนำเสนอ"
                                                    size="small" /> 

                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"5px"}}>
                                                    <SearchIcon  />
                                                   </IconButton>
                                 <div> <TableContainer component={Paper} style={{marginTop:"20px"}}>
                                
                                <Table className aria-label="simple table">
                                
                                    <TableHead >
                                    
                                    <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">ประเภทสินค้า</TableCell>
                                        <TableCell align="center">หัวเรื่อง</TableCell>
                                        <TableCell align="center">รายละเอียด</TableCell>
                                        <TableCell align="center">จำนวนที่ต้องการ</TableCell> 
                                        <TableCell align="center">รายละเอียดเสนอซื้อสินค้า</TableCell> 
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                     
                                        <TableRow style={{backgroundColor:"#e6e6e6"}} >
                                        
                                        <TableCell align="center">1</TableCell>
                                        <TableCell align="center">เนื้อโค</TableCell>
                                        <TableCell align="center">M@A</TableCell>
                                        <TableCell align="center">145</TableCell>
                                        <TableCell align="center">10</TableCell>
                                        <TableCell align="center"><a href="/offer/Details"><Button variant="contained" color="primary" href="#contained-buttons">  คลิก</Button></a> </TableCell>
                                    
                                        </TableRow>
                                   
                                    </TableBody>
                                    

                                
                                </Table>
                                </TableContainer></div>
                                
                                 </table>
                                 
                                 </div> </div>
                                 
                                 
                <Footer/>
            </div></div>
        );
    }
}
export default offerbuytable;


//<IconButton color="primary" aria-label="upload picture" component="span">
                                         //<ShoppingBasketIcon  />
                                       // </IconButton>