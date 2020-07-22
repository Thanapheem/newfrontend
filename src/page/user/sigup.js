import React ,{Component} from 'react'
//material
import Navbar from '../../component/navbar'
import propt from 'prop-types'
import withstyles from '@material-ui/core/styles/withStyles';
import { Grid,  TextField, Button, CircularProgress, Card, CardHeader, CardContent, } from '@material-ui/core'
import {connect} from 'react-redux'
import {sigupuser} from '../../redux/Action/userAct'
//



const style ={
    form : {
        marginLeft : 30,
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
class signup extends Component{
    constructor(){
        super();
        this.state ={
            email :'',
            username : '',
            password :'',
            confirmpassword : '',
            name : '',
            lastname : '',
            gender : '',
            idno : '',
            phone : '',
            address : '',
            birthdate : '',
            loading : false,
            errors : {}      
        };
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
          this.setState({ errors: nextProps.UI.errors });
        }
      }
      handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({
          loading :true
        });
        const newUser = {
          email : this.state.email,
          username : this.state.username,
          password : this.state.password,
          confirmpassword : this.state.confirmpassword,
          name : this.state.name,
          lastname : this.state.lastname,
          gender : this.state.gender  ,      
          idno : this.state.idno,
          phone : this.state.phone,
          address : this.state.address,
          birthdate : this.state.birthdate
        };
        this.props.sigupuser(newUser,this.props.history);
      };
      handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        });
      };
   
    render(){
        const {classes,UI:{loading}} = this.props
        const {errors  } = this.state;
     
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
                                          <label >ชื่อผู้ใช้</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "username"
                                          name = "username"
                                          type = "username"
                                          label = "ชื่อผู้ใช้"
                                          className = {classes.textt}
                                          value = {this.state.username}
                                          onChange = {this.handleChange}
                                          helperText= {errors.username}
                                          errors={errors.username ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >รหัสผ่าน</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "password"
                                          name = "password"
                                          type = "password"
                                          label = "รหัสผ่าน"
                                          className = {classes.textt}
                                          value = {this.state.password}
                                          onChange = {this.handleChange}
                                          helperText= {errors.password}
                                          errors={errors.password ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ยืนยันรหัสผ่าน</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "confirmpassword"
                                          name = "confirmpassword"
                                          type = "password"
                                          label = "ยืนยันรหัสผ่าน"
                                          className = {classes.textt}
                                          value = {this.state.confirmpassword}
                                          onChange = {this.handleChange}
                                          helperText= {errors.confirmpassword}
                                          errors={errors.confirmpassword ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >อีเมล</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "email"
                                          name = "email"
                                          type = "email"
                                          label = "อีเมล"
                                          className = {classes.textt}
                                          value = {this.state.email}
                                          onChange = {this.handleChange}
                                          helperText= {errors.email}
                                          errors={errors.email ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ชื่อ</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "name"
                                          name = "name"
                                          type = "name"
                                          label = "ชื่อ"
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
                                          <label >นามสกุล</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "lastname"
                                          name = "lastname"
                                          type = "lastname"
                                          label = "นามสกุล"
                                          className = {classes.textt}
                                          value = {this.state.lastname}
                                          onChange = {this.handleChange}
                                          helperText= {errors.lastname}
                                          errors={errors.lastname ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >เพศ</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "gender"
                                          name = "gender"
                                          type = "gender"
                                          label = "เพศ"
                                          className = {classes.textt}
                                          value = {this.state.gender}
                                          onChange = {this.handleChange}
                                          helperText= {errors.gender}
                                          errors={errors.gender ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >วันเกิด</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "birthdate"
                                          name = "birthdate"
                                          type = "birthdate"
                                          label = "เลชประจำตัวประชาชน"
                                          className = {classes.textt}
                                          value = {this.state.birthdate}
                                          onChange = {this.handleChange}
                                          helperText= {errors.birthdate}
                                          errors={errors.birthdate ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >เลชประจำตัวประชาชน</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "idno"
                                          name = "idno"
                                          type = "idno"
                                          label = "เลชประจำตัวประชาชน"
                                          className = {classes.textt}
                                          value = {this.state.idno}
                                          onChange = {this.handleChange}
                                          helperText= {errors.idno}
                                          errors={errors.idno ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >เบอร์โทรศัพท์</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "phone"
                                          name = "phone"
                                          type = "phone"
                                          label = "เบอร์โทรศัพท์"
                                          className = {classes.textt}
                                          value = {this.state.phone}
                                          onChange = {this.handleChange}
                                          helperText= {errors.phone}
                                          errors={errors.phone ? true : false}
                                          fullWidth/>
                                      </Grid>
                                  </Grid>
                                  <Grid container spacing = {3}>
                                      <Grid item xs = {3} className = {classes.labe}>
                                          <label >ที่อยู่</label>
                                      </Grid>
                                      <Grid item xs = {8}>
                                      <TextField 
                                          id = "address"
                                          name = "address"
                                          type = "address"
                                          label = "ที่อยู่"
                                          className = {classes.textt}
                                          value = {this.state.address}
                                          onChange = {this.handleChange}
                                          helperText= {errors.address}
                                          errors={errors.address ? true : false}
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
signup.propt = {
    classes:propt.object.isRequired,
    user : propt.object.isRequired,
    UI : propt.object.isRequired,
    sigupuser : propt.object.isRequired
}
const mapState = (state) =>({
    user : state.user,
    UI : state.UI
})
export default connect(mapState,{sigupuser})(withstyles(style)(signup));