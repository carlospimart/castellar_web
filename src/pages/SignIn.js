import React from "react";
import {Link} from "react-router-dom";
import "./CSS/SignIn.css"
import Logo from './images_pages/Sign_In.png';
import { useNavigate, useParams } from "react-router-dom";

const username="carlospimart";
const password="bonpassdemot";
class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Pass: "",
      msg_logged: "",
      msg_error: "",

    };
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handlePassChange=this.handlePassChange.bind(this);
    
  }
  

  handleTextChange(event){
    this.setState({
      User: event.target.value
    });

  }

  handlePassChange(event){
    this.setState({
      Pass: event.target.value
    });
  }
  handleClick() {
    if(this.state.User==username && this.state.Pass==password){
    this.setState({
      msg_logged: "You logged in successfully",
      msg_error: "",
    })
    let navigate = Navigate()
    navigate("/Profile")
    }else{this.setState({
      msg_logged: "",
      msg_error: "Incorrect Password or Username"
    })}
    
  }
  render() {
    
   
  return (
  <>
  <div class="SignIn">
  <img class='Logo1' src={Logo} alt=''/>
    <h1>Sign in</h1>
    <p>
    <input class='form' type="text" value= {this.state.User} name="username"
     placeholder="Username"
      onChange={this.handleTextChange}
    />
    </p>
    <p>
    <input class='form' type="password" value={this.state.Pass} name="password"
    placeholder="Password"
    onChange={this.handlePassChange}
    />
    </p>
    <p>
    <button id = 'submit_button' 
     onClick={() => this.handleClick()}>Sign In</button>
    </p>
    <p>
    <div id='logged'>{this.state.msg_logged}</div>
    <div id='error'>{this.state.msg_error}</div>
    </p>
    <label>
       <a id='question'>You don't have an account?  <Link id='link_sing_up' to="/SignUp">Create an account</Link> </a>    
      
    </label>
  </div>
  </>
  );
 }
 
}
function Navigate() {
  
  
  let navigate = useNavigate();
  return (
    navigate
  )
}
export default SignIn;