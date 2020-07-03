import React ,{Component} from 'react';
import '../App.css';
import Navbar from '../component/navbarlogin';
class homelogin extends Component {
    render(){
        return(
            
            <div >
                   <Navbar/>
                <div className = "container">
                
                    <h1>หน้าแรกหลังล็อกอิน</h1>

                </div>
            </div>
        )
    }
}
export default homelogin;