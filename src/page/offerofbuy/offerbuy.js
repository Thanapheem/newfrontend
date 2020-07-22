import React from "react";
import {Button} from 'react-bootstrap';
import "../../page/styleWebpage.css";
import Navbar from "../../component/navbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import './styleAbor.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FormLabel from 'react-bootstrap';
import Form from 'react-bootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';





class accessories extends React.Component{
    render(){
        return(
            <div>
                
                <Navbar/>
                     <div className='row ' style={{backgroundColor:"#ffffff",marginTop:"20px", marginLeft:"10%",marginRight:"10%"}}><button type="button" class="btn btn-success"><h5>เสนอซื้อสินค้า</h5></button></div> 
                     <div className='row  'style={{backgroundColor:"#F2F2F2", marginLeft:"10%",marginRight:"9.5%" , height: "740px"}}> 
                        <div className="col-6"> 
                        
                        <div className="row container-fluid r2-c4 " style={{ marginTop:"5px"}}> ข้อมูลเสนอซื้อสินค้า</div>
                        <Grid container spacing={3} className="pad-10" style={{backgroundColor:"#ffffff", marginTop:"18px",height: "640px"}} >
                                             
                                              

                                           
                                     <div className="" ><Grid item xs={20} >
                                                
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                                    
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                <FormControl>
                                                    <InputLabel >ประเภทสินค้า</InputLabel>
                                                    <Select
                                                    className="textField-width"
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                            
                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl> </Grid></div>
                                    <div className=""style={{ marginTop:"5px"}}><Grid item xs={20}>
                                                    <TextField
                                                    className="textField-width"
                                                    id="outlined-multiline-static"
                                                    label="รายละเอียดสินค้า"
                                                    multiline
                                                    rows={3}
                                                    
                                                    variant="outlined"
                                                    />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="จำนวนสินค้า"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                                 <TextField
                                                     className="textField-width"
                                                     id="outlined1"
                                                    label="ชนิดสินค้าที่ต้องการซื้อ"
                                                    size="small" />
                                              </Grid></div>
                                    <div className=""style={{ marginTop:"5px"}}><Grid item xs={20}>
                                    <TextField
                                                    className="textField-width"
                                                    id="outlined-multiline-static"
                                                    label="วิธีการจัดส่งสินค้า"
                                                    multiline
                                                    rows={3}
                                                    
                                                    variant="outlined"
                                                    />
                                              </Grid></div>
                                    <div className=""><Grid item xs={20}>
                                    <FormControl>
                                                    <InputLabel >การรับประกันสินค้า</InputLabel>
                                                    <Select
                                                    className="textField-width"
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                            
                                                    >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    </FormControl>
                                              </Grid></div>

                                              <div className=""style={{ marginTop:"10px"}}><Grid item xs={20}>รูปตัวอย่างสินค้า
                                              <div class="ml-2 col-sm-6">
                                                    <img src="https://placehold.it/80x80" id="preview" class="img-thumbnail"></img>
                                                    </div>
                                              <div class="ml-2 col-sm-6">
                                                   
                                                    <div id="msg"></div>
                                                    <form method="post" id="image-form">
                                                        <input type="file" name="img[]" class="file" accept="image/*"></input>
                                                        
                                                    </form>
                                                    </div>
                                                    
                                              </Grid></div>
                                              
                        </Grid>
                        <Button type="submit" className="btn btn-primary"style={{ marginLeft:"280px",margintop:"200px"}}  column sm ={2}>บันทึก</Button>
                                                <Button type="reset" className="btn btn-danger">ยกเลิก</Button></div>
                    
                        <div className="col-6  r2-c4"> รายการเสนอซื้อ  
                        
                                                 <TextField className="textField-width2  " style={{backgroundColor:"#F0F8FF",marginLeft:"63.5%", marginTop:"2px"}}
                                                     id="outlined1"
                                                    label="ค้นหาชื่อสินค้า"
                                                    size="small" /> 
                                                    
                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"#F0F8FF", marginTop:"0px"}}>
                                                    <SearchIcon  />
                                                   </IconButton>
                        <div> <Table className aria-label="simple table" style={{backgroundColor:"#ffffff", marginTop:"0px"}}>
                                
                                <TableHead >
                                
                                <TableRow >
                                    <TableCell align="left">ลำดับ</TableCell>
                                    <TableCell align="center">หัวเรื่อง</TableCell>
                                    <TableCell align="center">ประเภทสินค้า</TableCell>
                                    <TableCell align="center">จำนวนที่ต้องการ</TableCell>
                                    <TableCell align="center">จัดการสินค้า</TableCell>
                                     
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                 
                                    <TableRow >
                                    
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">เนื้อโค</TableCell>
                                    <TableCell align="center">M@A</TableCell>
                                    <TableCell align="center">145</TableCell>
                                    
                                
                                    
                                    <TableCell align="center"> 
                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <AssignmentIcon  />
                                                   </IconButton>

                                                   <IconButton color="secondary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <DeleteForeverIcon />
                                                   </IconButton>
                                                   
                                                   
                                                   </TableCell>
                                
                                    </TableRow>
                               
                                </TableBody> 
                                <TableBody>
                                 
                                    <TableRow >
                                    
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">เนื้อโค</TableCell>
                                    <TableCell align="center">M@A</TableCell>
                                    <TableCell align="center">145</TableCell>
                                    
                                
                                    
                                    <TableCell align="center"> 
                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <AssignmentIcon  />
                                                   </IconButton>

                                                   <IconButton color="secondary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <DeleteForeverIcon />
                                                   </IconButton>
                                                   
                                                   
                                                   </TableCell>
                                
                                    </TableRow>
                               
                                </TableBody>
                                <TableBody>
                                 
                                    <TableRow >
                                    
                                    <TableCell align="center">1</TableCell>
                                    <TableCell align="center">เนื้อโค</TableCell>
                                    <TableCell align="center">M@A</TableCell>
                                    <TableCell align="center">145</TableCell>
                                    
                                
                                    
                                    <TableCell align="center"> 
                                                    <IconButton color="primary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <AssignmentIcon  />
                                                   </IconButton>

                                                   <IconButton color="secondary" aria-label="upload picture" component="span" size="Large " style={{backgroundColor:"White", marginTop:"0px"}}>
                                                    <DeleteForeverIcon />
                                                   </IconButton>
                                                   
                                                   
                                                   </TableCell>
                                
                                    </TableRow>
                               
                                </TableBody>  </Table> </div></div></div>
                        
                
                 
                 
               
            </div>
        );
    }
}
export default accessories;