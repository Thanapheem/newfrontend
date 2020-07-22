import React ,{Component} from 'react'
//material
import Navbar from '../../component/navbar'
import propt from 'prop-types'
import withstyles from '@material-ui/core/styles/withStyles';
import { Grid,  TextField, Button, CircularProgress, Card, CardHeader, CardContent, } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import MovieIcon from '@material-ui/icons/Movie';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import AssignmentIcon from '@material-ui/icons/Assignment';
//redux
import {upCow} from '../../redux/Action/dataAct';
import {connect} from 'react-redux'

//หน้าที่ก๊อปหน้าลงทะเบียนโคมายังไม่ได้เเก้ หลังบ้านเลย 

const style ={
    form : {
        marginLeft : 20,
        minWidth : 700


    },
    card : {
        marginTop : 70,
        textAlign : "left"
        
        
    },
    labe : {
       
        marginTop : 20,
        textAlign : "right"
    },

  

    Button : {
        margin : '10px auto 10px auto',
        position : 'relative'
    },
    spin : { 
        position : 'absolute'
    }
   
}
class Uploadauction extends Component{
    state = {
        name : '',
        detail : '',
        type : '',
        cattleid : '',
        weight : '',
        gender : '',
        spicies : '',
        price : '',
        birthdate : '',
        age : '',
        dadname : '',
        momname :'',
        errors : {}
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.upCow({
            name : this.state.name,
            detail : this.state.detail,
            type : this.state.type,
            cattleid : this.state.cattleid,
            weight : this.state.weight,
            gender : this.state.gender,
            spicies : this.state.spicies,
            price :this.state.price,
            birthdate : this.state.birthdate,
            age : this.state.age,
            dadname : this.state.dadname,
            momname : this.state.momname
        })

    }
   
    render(){
      const {errors} = this.state;
      const {classes,UI : {loading}} = this.props
     
        return(
            <div container   className = {classes.form}>
            <Navbar/> 
            <form noValidate onSubmit= {this.handleSubmit } >
            <Card className = {classes.card} >
                <CardHeader title ="ลงทะเบียนโคประมูลมีชีวิต"/>
                <Grid container spacing = {2}>
                    <Grid item xs = {6}>
                      <Card className = {classes.card1}>
                      <Grid style={{backgroundColor:"#ffffff",height:"160px", marginTop:"18px",marginLeft:"10px",marginRight:"15"}} >
                                <p  style={{color:"red",marginLeft:"5px" }}>อัพโหลดรูปภาพ 4 รูป ประกอบด้วย ด้านหน้า หลัง ซ้ายและขวา ขนาดรูปภาพไม่เกิน100MB</p>
                                <div style={{marginLeft:"10px" ,marginTop:"20px" }}> <h8> 
                                    <Button variant="contained" 
                                     color="primary"
                                     size="small"
                                     style={{outline:"none"}}
                                    startIcon={<AddPhotoAlternateIcon/>}
                                >
                                    เลือกรูปภาพ 0/4
                                     </Button></h8></div>    
                                        <div style={{marginLeft:"10px" ,marginTop:"20px" }}> <h8> <Button variant="contained" 
                                     color="primary"
                                     size="small"
                                     style={{outline:"none"}}
                                    startIcon={<MovieIcon/>}
                                >
                                    เลือกวีดีโอ
                                     </Button></h8></div>
                                        </Grid>
                                        <hr width="100%" color="#F5F5F5"></hr>
                          <CardContent container className = {classes.content}>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชื่อโค</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "name"
                                          name = "name"
                                          type = "name"
                                          label = "ชื่อโค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.name}
                                          onChange = {this.handleChange}
                                          helperText= {errors.name}
                                          errors={errors.name ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >หมายเลขประจำตัวสัตว์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "cattleid"
                                          name = "cattleid"
                                          type = "cattleid"
                                          label = "หมายเลขประจำตัวสัตว์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.cattleid}
                                          onChange = {this.handleChange}
                                          helperText= {errors.cattleid}            
                                          errors={errors.cattleid ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชนิดโค</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "type"
                                          name = "type"
                                          type = "type"
                                          label = "ชนิดโค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.type}
                                          onChange = {this.handleChange}
                                          helperText= {errors.type}
                                          errors={errors.type ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >น้ำหนัก</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "weight"
                                          name = "weight"
                                          type = "weight"
                                          label = "น้ำหนัก"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.weight}
                                          onChange = {this.handleChange}
                                          helperText= {errors.weight}
                                          errors={errors.weight ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >เพศโค</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "gender"
                                          name = "gender"
                                          type = "gender"
                                          label = "ประเภทโค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.gender}
                                          onChange = {this.handleChange}
                                          helperText= {errors.gender}
                                          errors={errors.gender? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >สายพันธุ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "spicies"
                                          name = "spicies"
                                          type = "spicies"
                                          label = "สายพันธุ์โค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.spicies}
                                          onChange = {this.handleChange}
                                          helperText= {errors.spicies}
                                          errors={errors.spicies ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >อายุโค</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "อายุโค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ความสูง</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "ความสูง"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ความยาวลำตัว </label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "ความยาวลำตัว"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชื่อพ่อพันธุ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "ชื่อพ่อพันธุ์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชื่อเเม่พันธุ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "ชื่อแม่พันธุ์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ระยะเวลาเริ่มต้นประมูล/ปิดประมูล </label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "เริ่มต้นประมูล/ปิดประมูล "
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ราคาต่อ1บิต</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "age"
                                          name = "age"
                                          type = "age"
                                          label = "ราคาต่อ1บิต"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.age}
                                          onChange = {this.handleChange}
                                          helperText= {errors.age}
                                          errors={errors.age ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <div style={{marginTop:"10px" ,marginLeft:"141px"}}><Button variant="contained" style={{marginLeft:"10px" }}
                                                                                            color="primary"
                                                                                            size="small"
                                                                                            style={{outline:"none"}}
                                                                                            startIcon={<AssignmentIcon/>}
                                                                                        >
                                                                                            กรอกใบพันธุ์ประวัติ
                                                                                            </Button>
                                                                                            
                                                                                           
                                    </div>                
                             
                          </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs ={6}>
                    
                    <div className="col-12" style={{backgroundColor:"#F2F2F2",}}> 
                    <div className='row  '> 
                    <div className="col-6"> <div className="row container-fluid "> *ข้อมูลการผสมพันธุ์<Fab color="primary" aria-label="add" size="small "   style={{marginLeft:"392px"}}>
                                                                     <AddIcon />
                                                                 </Fab>
                            </div> </div>
                                </div>
                              <Grid>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำการผสมพันธุ์</TableCell>
                                        <TableCell align="center">ชื่อพ่อพันธุ์/น้ำเชื้อที่ใช้</TableCell>
                                        <TableCell align="center">ประเภทการผสมพันธุ์</TableCell>
                                        <TableCell align="center">ท้องที่(ครั้งที่ตั้งท้อง)</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            
                            </Grid>  
                        </div>

                        <div className="col-12" style={{backgroundColor:"#F2F2F2", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการทำวัคซีน<Fab color="primary" aria-label="add" size="small "   style={{marginLeft:"395px"}}>
                                                                     <AddIcon />
                                                                 </Fab>
                            </div> </div>
                                </div>
                              <Grid>
                                  <Table>
                              <TableRow className="col-12">
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำวัคซีน</TableCell>
                                        <TableCell align="center">ชุดการผลิต</TableCell>
                                        <TableCell align="center">ชนิดวัคซีน</TableCell>
                                        <TableCell align="center">ผู้ดำเนินการทำวัคซีน</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                    
                            </Table>
                            <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Grid>  
                        </div>

                        <div className="col-12" style={{backgroundColor:"#F2F2F2", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการรักษา<Fab color="primary" aria-label="add" size="small "   style={{marginLeft:"415px"}}>
                                                                     <AddIcon />
                                                                 </Fab>
                            </div> </div>
                                </div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่รักษา</TableCell>
                                        <TableCell align="center">วิธีการรักษา</TableCell>
                                        <TableCell align="center">ยาที่ใช้รักษา</TableCell>
                                        <TableCell align="center">ผู้รักษา</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                   
                            </Table>
                            <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Grid>  
                        </div>
                        <div className="col-12" style={{backgroundColor:"#F2F2F2", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการทดสอบโรค<Fab color="primary" aria-label="add" size="small "   style={{marginLeft:"375px"}}>
                                                                     <AddIcon />
                                                                 </Fab>
                            </div> </div>
                                </div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำการทดสอบ</TableCell>
                                        <TableCell align="center">ชื่อโรค</TableCell>
                                        <TableCell align="center">ผลการทดสอบ</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                 
                            </Table>
                            <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Grid>  
                        </div>
                        <div className="col-12" style={{backgroundColor:"#F2F2F2", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการถ่ายพยาธิ<Fab color="primary" aria-label="add" size="small "   style={{marginLeft:"388px"}}>
                                                                     <AddIcon />
                                                                 </Fab>
                            </div> </div>
                                </div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">วันที่ทำถ่ายพยาธิ</TableCell>
                                        <TableCell align="center">ชื่อยาถ่ายพยาธิ</TableCell>
                                        <TableCell align="center">ผู้ดำเนินการ</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                    </TableRow>
                                   
                            </Table>
                            <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Grid>  
                        </div>
                        <div className="col-12" style={{backgroundColor:"#F2F2F2", marginTop:"10px"}}> 
                            <div className='row  '> 
                            <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> *ข้อมูลการได้รับรางวัล<Fab color="primary" aria-label="add" size="small "   style={{marginLeft:"377px"}}>
                                                                     <AddIcon />
                                                                 </Fab>
                            </div> </div>
                                </div>
                              <Grid>
                              <Table>
                              <TableRow >
                                        <TableCell align="left">ลำดับ</TableCell>
                                        <TableCell align="center">ประเภทการจัดกิจกรรม</TableCell>
                                        <TableCell align="center">ผู้จัดกิจกรรม</TableCell>
                                        <TableCell align="center">รางวัลที่ได้</TableCell>
                                        <TableCell align="center">จัดการ</TableCell>
                                        <hr></hr>
                                        
                                    </TableRow>
                                   
                                </Table>
                                <center><p  style={{color:"red",marginTop:"10px" }}>ไม่มีข้อมูล</p></center>
                            </Grid>  
                        </div>
                        
                       
                    </Grid>
                </Grid>
                

            </Card>
              <Grid container item xs = {12}>
              <Button 
                  type = "submit" 
                  variant = "contained" 
                  color="primary" 
                  disabled = {loading}
                  className={classes.Button}>
                  ยืนยัน
                  {loading && ( <CircularProgress size = {30} className = {classes.spin}/>)}
                  </Button>
              </Grid> 
              </form>
        </div>
        )
    }
}
Uploadauction.propt = {
    UploadCow : propt.func.isRequired,
    UI : propt.object.isRequired
}
const mapState = (state) =>({
    UI : state.UI
})
export default connect(mapState,{upCow})(withstyles(style)(Uploadauction));