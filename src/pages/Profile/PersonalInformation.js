import React,{ useState, useEffect } from "react";
import axios from "axios";

function PersonalInformation({value}) {
      
      var [message, setMessage]  = useState("")
      const url ="http://localhost:1000/Homepage/updateUser/"
      const handleUserName = (e)=>{
        e.preventDefault()
        setUsername(e.target.value)
      }
      const handlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
      }
      const handleName = (e)=>{
        e.preventDefault()
        setName(e.target.value)
      }
      const handleSurname = (e)=>{
        e.preventDefault()
        setSurname(e.target.value)
      }
      const handleGender = (e)=>{
        e.preventDefault()
        setGender(e.target.value)
      }
      const handleDoB = (e)=>{
        e.preventDefault()
        setDoB(e.target.value)
      }
      const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
      }
      const handleAddress = (e)=>{
        e.preventDefault()
        setAddress(e.target.value)
      }
      const handlePostcode = (e)=>{
        e.preventDefault()
        setPostcode(e.target.value)
      }
      const handleCity = (e)=>{
        e.preventDefault()
        setCity(e.target.value)
      }
      const handlePhoneNumber = (e)=>{
        e.preventDefault()
        setPhoneNumber(e.target.value)
      }
  
      function update(e){
        e.preventDefault();
        setMessage("")
        axios.put(url+value[11]+"?first_name="+name+"&last_name="+last_name+"&gender="+gender+"&dob="+DoB+"&email="+email+
        "&username="+username+"&password="+password+"&city="+city+"&address="+address+"&post_code="+postcode+
        "&phone_number="+phone_number,{
          username: username,
          password: password,
          })
          .then(res =>{
            console.log(res.data)
            setMessage(res.data)
          })
        } 
      var [username, setUsername] = useState(value[0])
      var [password, setPassword] = useState(value[1])
      var [name, setName] = useState(value[4])
      var [last_name, setSurname] = useState(value[5])
      var [gender, setGender] = useState(value[2])
      var [DoB, setDoB] = useState(value[3])
      var [email, setEmail] = useState(value[6])
      var [address, setAddress] = useState(value[7])
      var [postcode, setPostcode] = useState( value[8])
      var [city, setCity] = useState(value[9])
      var [phone_number, setPhoneNumber] = useState(value[10])

    
  return (
   
  <div>
      
      <p class="PI">Personal Information</p>
      <p>Username</p>
      <input class="form_PI" value= {username}
                       onChange= {(e) => handleUserName(e)}/>
      <p>Password</p>
      <input type="password" class="form_PI" value= {password}
                       onChange= {(e) => handlePassword(e)}/>
      <p>First Name</p>
      <input class="form_PI" value= {name}
                       onChange= {(e) => handleName(e)}/>
      <p>Last Name</p>
      <input class="form_PI" value= {last_name}
                       onChange= {(e) => handleSurname(e)}/>
      <p>Gender</p>
      <input class="form_PI" value= {gender}
                       onChange= {(e) => handleGender(e)}/>
      <p>Date of Birth</p>
      <input class="form_PI" value= {DoB}
                       onChange= {(e) => handleDoB(e)}/>
      <p>Email</p>
      <input class="form_PI" value= {email}
                       onChange= {(e) => handleEmail(e)}/>
      <p>Address</p>
      <input class="form_PI" value= {address}
                       onChange= {(e) => handleAddress(e)}/>
      <p>Postcode</p>
      <input class="form_PI" value= {postcode}
                       onChange= {(e) => handlePostcode(e)}/>
      <p> City</p>
      <input class="form_PI" value= {city}
                       onChange= {(e) => handleCity(e)}/>
      <p>Phone Number</p>
      <input class="form_PI" value= {phone_number}
                       onChange= {(e) => handlePhoneNumber(e)}/>

      <p><button
        onClick={(e) => {update(e);}}
      >Save</button> &nbsp; {message}
      </p>
    </div>
   
  );
}

export default PersonalInformation;