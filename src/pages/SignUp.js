import React from "react";
import "./CSS/SignUp.css"
import axios from "axios";

const url= "http://localhost:1000/Homepage/AddUsers?username="

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          first_name: "",
          last_name: "",
          Radio: "",
          date_of_birth: "",
          email: "",
          phone_number: null,
          username:"",
          password:"",

        }
        this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleRadio=this.handleRadio.bind(this);
        this.handleDOBChange=this.handleDOBChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);  
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);  
        this.handlePasswordChange=this.handlePasswordChange.bind(this);       
    };

    handleFirstNameChange(event){
        this.setState({
          first_name: event.target.value,
        });
    
      }
    handleLastNameChange(event){
    this.setState({
      last_name: event.target.value,
    });
   }
   handleRadio(R){
    this.setState({
      Radio:R
    })

  }
    handleDOBChange(event){
      this.setState({
        date_of_birth: event.target.value,
    });
    }
    handleEmailChange(event){
        this.setState({
          email: event.target.value,
    });

   }
    handlePhoneChange(event){
      this.setState({
      phone_number: event.target.value,
    });

   }

   handleUserNameChange(event){
    this.setState({
    username: event.target.value,
   });
   
   }

    handlePasswordChange(event){
       this.setState({
       password: event.target.value,
    });

    }

    handleClick(e) {
        
        alert("You submitted");

        e.preventDefault();
        axios.post(url+this.state.username+
        "&password="+this.state.password,{
		    username: this.state.username,
		    password: this.state.password,
     	}).then(res =>{console.log(res.data)})
    }

    

  render(){
    
  return (
  <div class="SignUp"> 
  <h1>Sign Up</h1>
  <>
    <p>
    First Name: 
    <input type="text" value= {this.state.first_name} name="first_name"
    onChange={this.handleFirstNameChange}
    /> 
    </p>
    <p>
    Last Name: 
    <input type="text" value= {this.state.last_name} name="last_name"
      onChange={this.handleLastNameChange}
    /> 
    </p>
    <p>
    
    <input type="radio" value="Male" name="Filter"
        onChange={(e)=>this.handleRadio}/>Male
    
    <input type="radio" value="Female" name="Filter"
        onChange={(e)=>this.handleRadio}/>Female
    </p>
    <p>
    Date of Birth: 
    <input type="date" value= {this.state.date_of_birth} name="date_of_birth"
      onChange={this.handleDOBChange}
    /> 
    </p>
    <p>
    Email: 
    <input type="text" value= {this.state.email} name="email"
      onChange={this.handleEmailChange}
    /> 
    </p>
    <p>
    Phone number: 
    <input type="number" value= {this.state.phone_number} name="phone"
      onChange={this.handlePhoneChange}
    /> 
    </p>
    <p>
    Username: 
    <input type="text" value= {this.state.username} name="username"
      onChange={this.handleUserNameChange}
    /> 
    </p>
    <p>
    Password: 
    <input type="password" value= {this.state.password} name="password"
      onChange={this.handlePasswordChange}
    /> 
    </p>
    <button onClick={(e) => this.handleClick(e)}>Submit</button>
    </>
    
  </div>
  );
}
    }
export default SignUp;