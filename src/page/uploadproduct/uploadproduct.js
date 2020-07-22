import React ,{Component} from 'react'
//material
import Navbar from '../../component/navbar'
import propt from 'prop-types'
import withstyles from '@material-ui/core/styles/withStyles';
import { Grid,  TextField, Button, CircularProgress, Card, CardHeader, CardContent, } from '@material-ui/core'

//redux
import {UpACC} from '../../redux/Action/dataAct';
import {connect} from 'react-redux'



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
class Uploadproduct extends Component{
    state = {
        aName : '',
        acctype : '',
        adate : '',
        detail : '',
        Weight : '',
        amount : '',
        errors : {}
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.UpACC({
            aName : this.state.aName,
            acctype : this.state.acctype,
            adate : this.state.adate,
            detail : this.state.detail,
            Weight : this.state.Weight,
            amount : this.state.amount

        })
       
    }
   
    render(){
      const {errors} = this.state;
      const {classes,UI : {loading}} = this.props
     
        return(
            <div container   className = {classes.form}>
            <Navbar/> 
            <form noValidate onSubmit= {this.handleSubmit } >
            <Card className = {classes.card}>
                <CardHeader title ="ลงทะเบียนขายผลิคภัณฑ์จากโค"/>
                <Grid container spacing = {2}>
                    <Grid item xs = {6}>
                      <Card className = {classes.card1}>
                          <CardHeader title ="ข้อมูลสินค้า"/>
                          <CardContent container className = {classes.content}>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชื่อผลิตภัณฑ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "aName"
                                          name = "aName"
                                          type = "aName"
                                          label = "ชื่อผลิตภัณฑ์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.aName}
                                          onChange = {this.handleChange}
                                          helperText= {errors.aName}
                                          errors={errors.aName ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชนิดผลิตภัณฑ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "acctype"
                                          name = "acctype"
                                          type = "acctype"
                                          label = "ชนิดผลิตภัณฑ์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.acctype}
                                          onChange = {this.handleChange}
                                          helperText= {errors.acctype}            
                                          errors={errors.acctype ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >วันที่ผลิต/หมดอายุ</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "adate"
                                          name = "adate"
                                          type = "adate"
                                          label = "วันที่ผลิต/หมดอายุ"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.adate}
                                          onChange = {this.handleChange}
                                          helperText= {errors.adate}
                                          errors={errors.adate ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >จำนวน</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "amount"
                                          name = "amount"
                                          type = "amount"
                                          label = "จำนวน"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.amount}
                                          onChange = {this.handleChange}
                                          helperText= {errors.amount}
                                          errors={errors.amount ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ราคา</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "Weight"
                                          name = "Weight"
                                          type = "Weight"
                                          label = "ราคา"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.Weight}
                                          onChange = {this.handleChange}
                                          helperText= {errors.Weight}
                                          errors={errors.Weight? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >รายละเอียดสินค้า</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "detail"
                                          name = "detail"
                                          type = "detail"
                                          label = "สายพันธุ์โค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.detail}
                                          onChange = {this.handleChange}
                                          helperText= {errors.detail}
                                          errors={errors.detail ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >เนื้อสัตว์อนามัย</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "detail"
                                          name = "detail"
                                          type = "detail"
                                          label = "ไม่มี"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.detail}
                                          onChange = {this.handleChange}
                                          helperText= {errors.detail}
                                          errors={errors.detail ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ปศุสัตว์ OK</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "detail"
                                          name = "detail"
                                          type = "detail"
                                          label = "ไม่มี"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.detail}
                                          onChange = {this.handleChange}
                                          helperText= {errors.detail}
                                          errors={errors.detail ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >อย.</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "detail"
                                          name = "detail"
                                          type = "detail"
                                          label = "ไม่มี"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.detail}
                                          onChange = {this.handleChange}
                                          helperText= {errors.detail}
                                          errors={errors.detail ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ฮาลาน</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "detail"
                                          name = "detail"
                                          type = "detail"
                                          label = "ไม่มี"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.detail}
                                          onChange = {this.handleChange}
                                          helperText= {errors.detail}
                                          errors={errors.detail ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  
                                  
                             
                          </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs ={6}>
                    
                        
                        <div className="col-12" style={{backgroundColor:"#F2F2F2", }}> 
                           <div className='row  '> 
                           <div className="col-6"> ข้อมูลพื้นฐานของผู้ผลิต
                            </div>
                               <div className="col-6 text-right "></div></div>
                             <Grid>
                             <div style={{ marginLeft:"20px"}}><h4>ชื่อเกษตกร :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>นามสกุล :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>หมายเลขบัตรประชาชน :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>เบอร์โทรติดต่อ :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>ที่อยู่ตามสำเนาทะเบียนบ้าน :</h4></div>
                             <div style={{ marginLeft:"20px"}}><h4> ตำบล :</h4></div>
                             <div style={{ marginLeft:"20px"}}><h4>อำเภอ :</h4></div>
                             <div style={{ marginLeft:"20px"}}><h4>จังหวัด  :</h4></div>
                             
                           
                           </Grid>  
                       </div>

                       <div className="col-12" style={{backgroundColor:"#F2F2F2", marginTop:"18px",height:"380px"}}> 
                           <div className='row  '> 
                           <div className="col-6"> <div className="row container-fluid  "style={{marginTop:"12px"}}> ข้อมูลฟาร์ม
                           </div> </div>
                               <div className="col-6 text-right "></div></div>
                             <Grid>
                             <div style={{ marginLeft:"20px"}}><h4>ชื่อฟาร์ม/ชื่อสถานที่ผลิต :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>วัตถุประสงค์ในการเลี้ยงโค :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>ที่ตั้งฟาร์ม/สถานที่ผลิต :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>ละติจุด :</h4></div> 
                             <div style={{ marginLeft:"20px"}}><h4>ลองติจุด:</h4></div>
                             
                             
                           
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
Uploadproduct.propt = {
    UploadAcc : propt.func.isRequired,
    UI : propt.object.isRequired
}
const mapState = (state) =>({
    UI : state.UI
})
export default connect(mapState,{UpACC})(withstyles(style)(Uploadproduct));