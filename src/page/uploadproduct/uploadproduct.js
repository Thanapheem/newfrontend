import React ,{Component} from 'react'
//material
import Navbar from '../../component/navbar'
import propt from 'prop-types'
import withstyles from '@material-ui/core/styles/withStyles';
import { Grid,  TextField, Button, CircularProgress, Card, CardHeader, CardContent, } from '@material-ui/core'

//redux
import {UpPRD} from '../../redux/Action/dataAct';
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
class UploadPRD extends Component{
    state = {
        prdname : '',
        prdtype : '',
        prddate : '',
        expdate : '',
        prdweight : '',
        prdamount : '',
        prddetail : '',
        errors : {}
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.UpPRD({
            prdname : this.state.prdname,
            prdtype : this.state.prdtype,
            prddate : this.state.prddate,
            expdate : this.state.expdate,
            prddetail : this.state.prddetail,
            prdweight : this.state.prdweight,
            prdamount : this.state.prdamount

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
                <CardHeader title ="ลงทะเบียนสมาชิก"/>
                <Grid container spacing = {2}>
                    <Grid item xs = {6}>
                      <Card className = {classes.card1}>
                          <CardHeader title ="ข้อมูลส่วนตัว"/>
                          <CardContent container className = {classes.content}>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชื่อผลิตภัณฑ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "prdname"
                                          name = "prdname"
                                          type = "prdname"
                                          label = "ชื่อผลิตภัณฑ์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.prdname}
                                          onChange = {this.handleChange}
                                          helperText= {errors.prdname}
                                          errors={errors.prdname ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชนิดผลิตภัณฑ์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "prdtype"
                                          name = "prdtype"
                                          type = "prdtype"
                                          label = "ชนิดผลิตภัณฑ์"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.prdtype}
                                          onChange = {this.handleChange}
                                          helperText= {errors.prdtype}            
                                          errors={errors.prdtype ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >วันที่ผลิต</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "prddate"
                                          name = "prddate"
                                          type = "prddate"
                                          label = "วันที่ผลิต"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.prddate}
                                          onChange = {this.handleChange}
                                          helperText= {errors.prddate}
                                          errors={errors.prddate ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >จำนวน</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "prdamount"
                                          name = "prdamount"
                                          type = "prdamount"
                                          label = "จำนวน"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.prdamount}
                                          onChange = {this.handleChange}
                                          helperText= {errors.prdamount}
                                          errors={errors.prdamount ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >เพศโค</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "prdweight"
                                          name = "prdweight"
                                          type = "prdweight"
                                          label = "ประเภทโค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.prdweight}
                                          onChange = {this.handleChange}
                                          helperText= {errors.prdweight}
                                          errors={errors.prdweight? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >รายละเอียดสินค้า</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "prddetail"
                                          name = "prddetail"
                                          type = "prddetail"
                                          label = "สายพันธุ์โค"
                                          variant = "outlined"
                                          className = {classes.textt}
                                          value = {this.state.prddetail}
                                          onChange = {this.handleChange}
                                          helperText= {errors.prddetail}
                                          errors={errors.prddetail ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  
                                  
                             
                          </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs ={6}>
                        <h2>dasd</h2>
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
UploadPRD.propt = {
    UploadPRD : propt.func.isRequired,
    UI : propt.object.isRequired
}
const mapState = (state) =>({
    UI : state.UI
})
export default connect(mapState,{UpPRD})(withstyles(style)(UploadPRD));