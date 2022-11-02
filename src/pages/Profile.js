import React,{ useState, useEffect } from "react";
import axios from "axios";
import "./CSS/Profile.css"
import { useNavigate, useParams} from "react-router-dom";
import useToken from '../useToken';
import LogeIn, {data_value} from "./LogeIn/LogeIn";
import e from "cors";



function Profile({sign_in, onSign_In}) {
  
  let navigate = useNavigate();

  
  const {token, setToken} = useToken();
  
  var {value} = data_value()

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

  var [message, setMessage]  = useState("")
  
  const url ="http://localhost:1000/Homepage/updateUser/"
      
const [data, setData] = useState([])     

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
  useEffect(() => {
    axios.get('http://localhost:1000/Homepage/AllUsers')
    .then(res =>  {
      console.log("Getting from ::::", res.data)
      setData(res.data)
      }).catch(err => console.log(err))
    },[]); 
    // This method above is not used, is left only to show how to use axios inside a Function instead a Class
   
    
  /*const arr1 = data.map((data, index)=> {

    return (
      data.username
    )
  })

  const arr2 = data.map((data, index)=> {

    return (
      data.password
    )
  })*/
  

  
  
  //var [value,setButtonText] = useState("positive");
  console.log("value: ", value)
  
  const changeToken = (e) => {
     setToken(!token);
     onSign_In("Sign In");
  }
  const handleUserName = (e)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleSurname = (e)=>{
    setSurname(e.target.value)
  }
  const handleGender = (e)=>{
    setGender(e.target.value)
  }
  const handleDoB = (e)=>{
    setDoB(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handleAddress = (e)=>{
    setAddress(e.target.value)
  }
  const handlePostcode = (e)=>{
    setPostcode(e.target.value)
  }
  const handleCity = (e)=>{
    setCity(e.target.value)
  }
  const handlePhoneNumber = (e)=>{
    setPhoneNumber(e.target.value)
  }

if(!token) {
  
  return <LogeIn setToken={setToken} 
                 sign_in={sign_in}
                 onSign_In={onSign_In}/>
  
}

  //let { username } = useParams();
  return (
    <div class="profile_text_2">

    <div class="profile_text_1">
      <p>Welcome Back {value[4]}</p>
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
    
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        {" "}
        Change to about page
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() =>  changeToken(!token)}>Sign Out
      </button>
    </div>
  );
}

export default Profile;