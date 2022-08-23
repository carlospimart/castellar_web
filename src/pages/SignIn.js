import React from "react";
import {Link} from "react-router-dom";
import "./CSS/SignIn.css"
import Logo from '../images/user-login-3057.svg';

const username="carlospimart";
const password="bonpassdemot";
class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Pass: "",
      msg_logged: "",
      msg_error: ""

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
      msg_error: ""
    })
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
    <h1>Time To Sign in</h1>
    <p>
    <input type="text" value= {this.state.User} name="username"
      onChange={this.handleTextChange}
    /> Username
    </p>
    <p>
    <input type="password" value={this.state.Pass} name="password"
    onChange={this.handlePassChange}
    /> Password
    </p>
    <p>
    <button onClick={() => this.handleClick()}>Submit</button>
    </p>
    <p>
    <div id='logged'>{this.state.msg_logged}</div>
    <div id='error'>{this.state.msg_error}</div>
    </p>
    <label>
       You don't have an account?    <Link to="/SignUp">Create an account</Link> 
    </label>
  </div>
  </>
  );
 }
}
export default SignIn;