import React from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import "./CSS/SignIn.css"
import Logo from './images_pages/Sign_In.png';
import { useNavigate} from "react-router-dom";
import {useEffect} from "react";
var interval = null;
var count=0;
var username_2="";
var password_2="";
class SignIn extends React.Component{
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
  handleClick(e) {
    
    //interval = setInterval(()=>{
    //  alert(counter())},1000)
    e.preventDefault();
    this.state.users.forEach((user) => {
      if(user.username == this.state.User && user.password == this.state.Pass){
          username_2 = user.username;
          password_2 = user.password; 
      }
    });
    
    if(this.state.User==username_2 && this.state.Pass==password_2){
    this.setState({
      msg_logged: "You logged in successfully",
      msg_error: "",
    })
    this.props.navigate("/Profile/:" + username_2)
    }else{this.setState({
      msg_logged: "",
      msg_error: "Incorrect Password or Username"
    })}
  }
  componentDidMount(){
    axios.get('http://localhost:1000/Homepage/AllUsers').then(res =>{
        console.log(res);
        this.setState({ users : res.data })
    });
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
     onClick={(e) => this.handleClick(e)}>Sign In</button>
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
export function SignIn2(props) {

  const navigate = useNavigate();
  return <SignIn navigate={navigate}></SignIn> 
  
}
function counter(){
  
  count = count +1
  if(count==1){
    clearInterval(interval);
  }
  return count;
}

export default SignIn;