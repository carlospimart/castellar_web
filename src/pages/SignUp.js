import React from "react";
import "./CSS/SignUp.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url= "http://localhost:1000/Homepage/AddUsers?first_name=";
var flag = false;
class SignUp_child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: "",
          first_name: "",
          last_name: "",
          gender: "",
          date_of_birth: "",
          email: "",
          address:"",
          postcode:"",
          city:"",
          phone_number: null,
          username:"",
          password:"",
          gender: ""
        }
        this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleRadio=this.handleRadio.bind(this);
        this.handleDOBChange=this.handleDOBChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleAddressChange=this.handleAddressChange.bind(this);  
        this.handlePostcodeChange=this.handlePostcodeChange.bind(this);  
        this.handleCityChange=this.handleCityChange.bind(this);  
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handleUserNameChange=this.handleUserNameChange.bind(this);  
        this.handlePasswordChange=this.handlePasswordChange.bind(this);       
    };

    componentDidMount(){
      axios.get('http://localhost:1000/Homepage/AllUsers').then(res =>{
          console.log(res);
          this.setState({ users : res.data })
      });
    }

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
   handleRadio(event){
    this.setState({
      gender:event.target.value,
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
    handleAddressChange(event){
      this.setState({
        address: event.target.value,
    });
    }
    handlePostcodeChange(event){
      this.setState({
        postcode: event.target.value,
      });
    }
    handleCityChange(event){
      this.setState({
        city: event.target.value,
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
      e.preventDefault();
        if(this.state.username=="" || this.state.password=="" || this.state.first_name=="" 
           || this.state.last_name==""|| this.state.email==""){
            this.setState({
               error: "The value with * can not be blank"
            })
        
        
        }else{
              flag = false;
              this.setState({
                  error: ""
              })
        
              this.state.users.forEach((user_2) => {

                  if (user_2.username == this.state.username ) {
                     flag=true;
                     this.setState({
                         error: "This username already exist"
                     })
                  }
              });

              if(flag == false){
                axios.post(url+this.state.first_name+"&last_name="+this.state.last_name+"&gender="+this.state.gender+
                     "&dob="+this.state.date_of_birth+"&email="+this.state.email+"&username="+this.state.username+
                     "&password="+this.state.password+"&city="+this.state.city+"&address="+this.state.address+
                     "&post_code="+this.state.postcode+"&phone_number="+this.state.phone_number,{
		                  username: this.state.username,
		                  password: this.state.password,
     	                }).then(res =>{console.log(res.data)})
          
             this.props.navigate("/");
            
            }
        }
        
        }

    

  render(){
  
  return (
  <div class="SignUp"> 
  <h1 class="header">Sign Up</h1>
  <div class="form_box">
    <p class="form_title">
    First Name
    </p>
    <input class = "form_sign_up" type="text" value= {this.state.first_name} name="first_name"
    onChange={this.handleFirstNameChange}
    /> 
    <p class="form_title">
    Last Name
    </p>
    <input class = "form_sign_up" type="text" value= {this.state.last_name} name="last_name"
      onChange={this.handleLastNameChange}
    /> 
    
    <p>
    <span class="form_title"> 
    Gender &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Date of Birth
    </span>
    <div class="genderDoB">
    <input type="radio" value="Male" name="Filter"
        onChange={this.handleRadio}/><span class="gender">Male</span>
    
    <input type="radio" value="Female" name="Filter"
        onChange={this.handleRadio}/><span class="gender">Female</span>
    &nbsp; &nbsp;
    <input type="date" value= {this.state.date_of_birth} name="date_of_birth"
      onChange={this.handleDOBChange}
    /> 
    </div>
    </p>
    <p class="form_title">Email 
    </p>
    <input class = "form_sign_up" type="text" value= {this.state.email} name="email"
      onChange={this.handleEmailChange}
    /> 
    
    <p class="form_title">
    Address
    </p>
    <input class = "form_sign_up" type="text" value= {this.state.address} name="address"
      onChange={this.handleAddressChange}
    /> 
    <p class="form_title">
    Postcode
    </p>
    <input class = "form_sign_up" type="text" value= {this.state.postcode} name="postcode"
      onChange={this.handlePostcodeChange}
    /> 
    <p class="form_title">
    City&nbsp;
    </p> 
    <input class = "form_sign_up" type="text" value= {this.state.city} name="city"
      onChange={this.handleCityChange}
    /> 
    <p class="form_title">
    Phone number
    </p>
    <input class = "form_sign_up" type="number" value= {this.state.phone_number} name="phone"
      onChange={this.handlePhoneChange}
    /> 
    
    <p class="form_title">
    Username 
    </p>
    <input class = "form_sign_up" type="text" value= {this.state.username} name="username"
      onChange={this.handleUserNameChange}
    /> 
    <p class="form_title">
    Password
    </p> 
    <input class = "form_sign_up" type="password" value= {this.state.password} name="password"
      onChange={this.handlePasswordChange}
    /> 
    <p>&nbsp;</p>
    </div>
    <button class="submit_sign_up" value="value" onClick={(e) => this.handleClick(e)}>Submit</button>
    <p class="error">{this.state.error}</p>
    <p>&nbsp;</p>
  </div>
  );
 }
 
}
export function SignUp() {
  
  let navigate = useNavigate();
  
  return <SignUp_child navigate={navigate}/>
         
  
}
export default SignUp_child;