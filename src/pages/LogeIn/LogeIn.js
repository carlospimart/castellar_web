import React, {useState} from "react";
import PropTypes from 'prop-types'
import axios from 'axios';
import loginUser from "./loginUser";
import {Link} from "react-router-dom";
import "../CSS/SignIn.css"
import Logo from '../images_pages/Sign_In.png';
import { useNavigate} from "react-router-dom";
import useToken from "../../useToken";
import NavBar from "../../NavBar/NavBar";
import { Phone } from "@material-ui/icons";
/*var interval = null;
var count=0;*/

var username_2 = "";
var password_2 = "";
var first_name_2 = "";
var last_name_2 = "";
var gender_2="";
var DoB_2 = "";
var email_2 = "";
var address_2 ="";
var post_code_2 ="";
var city_2 ="";
var user_data = "";
var pass_data = "";
var phone_number_2 = "";
var users_id_2 = "";
class LogeIn extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      User: "",
      Pass: "",
      msg_logged: "",
      msg_error: "",
      users: [],

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
    if(username_2 == "" && password_2 == ""){
      username_2 = " ";
      password_2 = " ";
     }
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
      
      this.props.onSign_In("My account")
      this.props.setToken(token);
    
    }else{this.setState({
      msg_logged: "",
      msg_error: "Incorrect Password or Username"
    })}
  }
  
  

  
  /*handleClick() {
    
    //interval = setInterval(()=>{
    //  alert(counter())},1000)
    
    
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
              gender_2 = user_2.gender
              DoB_2 = user_2.dob
              email_2 = user_2.email
              address_2 = user_2.address
              post_code_2 = user_2.post_code
              city_2 = user_2.city
              phone_number_2 = user_2.phone_number
              users_id_2 = user_2.users_id
              
            
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
      <h1>{this.state.switcher_1}</h1>
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

  const value = [username_2, password_2, gender_2, DoB_2, first_name_2, last_name_2, email_2, address_2, 
                 post_code_2, city_2, phone_number_2, users_id_2];

  return {value}
  
}

LogeIn.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default LogeIn;