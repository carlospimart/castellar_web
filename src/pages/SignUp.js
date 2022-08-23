import React from "react";
//import "./CSS/SignUp.css"
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          first_name: "",
          last_name: "",
          date_of_birth: "",
          email: "",
          phone_number: null,
          password:"",
    
        }
        this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleDOBChange=this.handleDOBChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);  
        this.handlePhoneChange=this.handlePhoneChange.bind(this); 
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
    handlePasswordChange(event){
       this.setState({
       password: event.target.value,
    });

    }

    handleClick() {
        
        alert("You submitted");
    }

    

  render(){
  return (
  <div> 
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
    Password: 
    <input type="password" value= {this.state.password} name="password"
      onChange={this.handlePasswordChange}
    /> 
    </p>
    <button onClick={() => this.handleClick()}>Submit</button>
    </>
  </div>
  );
}
    }
export default SignUp;