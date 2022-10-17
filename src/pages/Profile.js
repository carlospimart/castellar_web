import React,{ useState, useEffect } from "react";
import axios from "axios";
import "./CSS/Profile.css"
import { useNavigate, useParams} from "react-router-dom";
import useToken from '../useToken';
import LogeIn, {data_value} from "./LogeIn/LogeIn";



function Profile({sign_in, onSign_In}) {
  
  var name;
  var {value} = data_value()

  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    axios.get('http://localhost:1000/Homepage/AllUsers')
    .then(res =>  {
      console.log("Getting from ::::", res.data)
      setData(res.data)
      }).catch(err => console.log(err))
    },[]);
   
    
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
  

  let navigate = useNavigate();

  
  const {token, setToken} = useToken();
  
  //var [value,setButtonText] = useState("positive");
  console.log("value: ", value)
  
  const changeToken = (e) => {
  setToken(!token);
  onSign_In("Sign In");}
  

if(!token) {
  
  return <LogeIn setToken={setToken} 
                 sign_in={sign_in}
                 onSign_In={onSign_In}/>
  
}

  //let { username } = useParams();
  return (
    <div class="profile_text">
      <h1>Welcome Back {value[0]}</h1>
      <h1>First Name: {value[2]}</h1>
      <h1>Last Name: {value[3]}</h1>
      <h1>Email: {value[4]}</h1>
      <h1>Address: {value[5]}, {value[6]}</h1>
      <h1>City: {value[7]}</h1>
      <button
        onClick={() => {
          navigate("/About");
        }}
      >
        {" "}
        Change to about page
      </button>

      <button
        onClick={() =>  changeToken(!token)}>Sign Out</button>

      
    </div>
  );
}

export default Profile;