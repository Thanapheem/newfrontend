import React ,{Component} from 'react';
import '../App.css';
import Navbar from '../component/navbar';
class home extends Component {
    render(){
        return(
            
            <div >
                   <Navbar/>
                <div className = "container">
                
                    <h1>หน้าแรก</h1>

                </div>
            </div>
        )
    }
}
export default home;