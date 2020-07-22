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
class UploadAcc extends Component{
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
                                          <label >วันที่ผลิต</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "adate"
                                          name = "adate"
                                          type = "adate"
                                          label = "วันที่ผลิต"
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
                                          <label >เพศโค</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "Weight"
                                          name = "Weight"
                                          type = "Weight"
                                          label = "ประเภทโค"
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
UploadAcc.propt = {
    UploadAcc : propt.func.isRequired,
    UI : propt.object.isRequired
}
const mapState = (state) =>({
    UI : state.UI
})
export default connect(mapState,{UpACC})(withstyles(style)(UploadAcc));