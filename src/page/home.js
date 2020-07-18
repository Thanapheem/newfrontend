import React, { Component } from "react";
import Navbar from '../component/navbar';
import Button from '@material-ui/core/Button';
import photo1 from "../component/Img/photo1.jpg";
import photo2 from "../component/Img/photo2.jpg";
import photo6 from "../component/Img/photo6.jpg";
import photo4 from "../component/Img/photo4.jpg";
import photo5 from "../component/Img/photo5.jpg";
import "./home.css";
import "./styleWebpage.css";
import GavelOutlinedIcon from '@material-ui/icons/GavelOutlined';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      param: "show"
    };
  }

  

  componentDidMount() {
    //const user=firebase.database//อะไรสักอย่าง
    /*axios
      .get("http://localhost:4000/"+this.state.param)
      .then(res => {
        const users = res.data;
        this.setState({ user:users });
      })
      .then(res => {
        console.log(this.state.user);
      });*/
  }

  render() {
    return (
      
          <Navbar />
         
          

          

    );
  }
}
export default Home;
/* */