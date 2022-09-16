import React, {useState} from "react";
import PropTypes from 'prop-types'
import axios from 'axios';
import loginUser from "./loginUser";
import {Link} from "react-router-dom";
import "../CSS/SignIn.css"
import Logo from '../images_pages/Sign_In.png';
import { useNavigate} from "react-router-dom";
import useToken from "../../useToken";
/*var interval = null;
var count=0;*/

var username_2 = "";
var password_2 = "";
var first_name_2 = "";
var last_name_2 = "";
var email_2 = "";
var user_data = "";
var pass_data = "";

class LogeIn extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Pass: "",
      msg_logged: "",
      msg_error: "",
      users: []

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
  
  async handleClick(e){
    e.preventDefault();
    this.state.users.forEach((user) => {
      if(user.username == username_2 && user.password == password_2){
          user_data = user.username;
          pass_data = user.password; 
      }
    });

    const token = await loginUser({
      username_2,
      password_2
    });
    
    
    if(password_2 == pass_data && username_2 == user_data){
      this.setState({
        msg_logged: "You logged in successfully",
        msg_error: "",
      })
      alert("Going to your profile")
      
    
    this.props.setToken(token);
    
    }else{this.setState({
      msg_logged: "",
      msg_error: "Incorrect Password or Username"
    })}
  }
  
  

  
  /*handleClick() {
    
    //interval = setInterval(()=>{
    //  alert(counter())},1000)
    

    if(this.state.User==username_2 && this.state.Pass==password_2){
   
    //this.props.navigate("/Profile/:" + username_2)
    
  }*/
  componentDidMount(){
    axios.get('http://localhost:1000/Homepage/AllUsers').then(res =>{
        console.log(res);
        this.setState({ users : res.data })
    });
  }
  
  render() {  
    password_2 = this.state.Pass
    username_2 = this.state.User
    
    const rows = [];
    rows.push()

    this.state.users.forEach((user_2) => {

        if (user_2.username == username_2 ) {
              first_name_2 = user_2.first_name
              last_name_2 = user_2.last_name
              email_2 = user_2.email
            
          }
        });
  //data1 =<LogeInData username_data={username}
  //password_data={password}/>
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
       onClick={(e) => this.handleClick(e)}>Sign In</button>
      </p>
      <p>
      <div id='logged'>{this.state.msg_logged}</div>
      <div id='error'>{this.state.msg_error}</div>
      </p>
      <label>
         <a id='question'>You don't have an account?  <Link id='link_sing_up' to="/SignUp">Create an account</Link>   </a>  
        
      </label>
    </div>
    </>

  );
 }
 
}
/*export function LogeIn2(props) {

  const navigate = useNavigate();
  return <LogeIn navigate={navigate}></LogeIn> 
  
}*/

export function data_value() {

  const value = [username_2, password_2, first_name_2, last_name_2, email_2];

  return {value}
  
}

LogeIn.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default LogeIn;