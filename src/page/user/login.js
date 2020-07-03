import React ,{Component} from 'react'
//material
import Navbar from '../../component/navbar'
import propt from 'prop-types'
import withstyles from '@material-ui/core/styles/withStyles';
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core'
//
import axios from 'axios';
import { Link } from 'react-router-dom';
const style= {
    form : {
        textAlign :'center',
        margin : '300px auto 300px auto'
    },
    title : {
        margin : '20px auto 20px auto'
    },
    textt :{
        margin : '5px auto 5px auto',
        width : '400px'

    },
    Button : {
        margin : '10px auto 10px auto',
        position : 'relative'
    },
    spin : { 
        position : 'absolute'
    }
}

class login extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
            loading : false,
            errors: {}
        } 
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit= (event) =>{
        event.preventDefault();
        this.setState({
            loading : true
        });
        const userData = {
            email : this.state.email,
            password : this.state.password
        }
        axios
        .post('/login',userData)
        .then((res)=>{
            console.log(res.data);
            localStorage.setItem('FBidToken',`Bearer ${res.data.token}`); 
            this.setState({
                loading: false
            });
            this.props.history.push('/');
        })
        .catch(err=>{
            this.setState({
                errors : err.response.data,
                loading :false
            })
        })
    }
    render(){
        const {classes} = this.props
        const {errors,loading} = this.state;
        return(
            <Grid container className = {classes.form}> 
             <Navbar/>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant = "h4" className = {classes.title}>
                        ลงชื่อเข้าใช้
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField 
                            id = "email"
                            name = "email"
                            type = "email"
                            label = "Email"
                            className = {classes.textt}
                            value = {this.state.email}
                            onChange = {this.handleChange}
                            helperText= {errors.email}
                            errors={errors.email ? true : false}
                            fullWidth
                        /><br/>
                        <TextField 
                        id = "password"
                        name = "password"
                        type = "password"
                        label = "Password"
                        className = {classes.textt}
                        value = {this.state.password}
                        helperText= {errors.password}
                        errors={errors.password ? true : false}
                        onChange = {this.handleChange}
                        fullWidth
                        />
                        {errors.general &&(
                            <Typography variant = "body2" className ={classes.customError}>
                               {errors.general}
                            </Typography>
                        )}
                        <br/>
                        <Button 
                            type = "submit" 
                            variant = "contained" 
                            color="primary" 
                            disabled = {loading}
                            className={classes.Button}>
                            login
                            {loading && (
                                <CircularProgress size = {30} className = {classes.spin}/>
                            )}
                        </Button>
                        <br/>
                        <small>ลืมรหัสผ่าน | <Link to = "/signup"> สมัครสมาชิก</Link></small>

                        
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
           
        )
    }
}
login.propt = {
    classes : propt.object.isRequired
}
export default withstyles(style)(login);