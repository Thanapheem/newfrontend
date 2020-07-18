import React ,{Component} from 'react'
//material
import Navbar from '../../component/navbar'
import propt from 'prop-types'
import withstyles from '@material-ui/core/styles/withStyles';
import { Grid,  TextField, Button, CircularProgress, Card, CardHeader, CardContent, } from '@material-ui/core'

//redux
import {upCow} from '../../redux/Action/dataAct';
import {connect} from 'react-redux'



const style ={
    form : {
        marginLeft : 20

    },
    card : {
        marginTop : 70,
        textAlign : "left"
    },
    labe : {
       
        marginTop : 20,
        textAlign : "right"
    },
    formc : {
        minWidth : 580
    },
    Button : {
        margin : '10px auto 10px auto',
        position : 'relative'
    },
    spin : { 
        position : 'absolute'
    }
   
}
class UploadCow extends Component{
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
            <Card className = {classes.card}>
                <CardHeader title ="ลงทะเบียนสมาชิก"/>
                <Grid container spacing = {2}>
                    <Grid item xs = {6}>
                      <Card className = {classes.card1}>
                          <CardHeader title ="ข้อมูลส่วนตัว"/>
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
UploadCow.propt = {
    UploadCow : propt.func.isRequired,
    UI : propt.object.isRequired
}
const mapState = (state) =>({
    UI : state.UI
})
export default connect(mapState,{upCow})(withstyles(style)(UploadCow));