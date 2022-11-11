import React,{ useState, useEffect } from "react";
import "../CSS/Profile.css";
import { useNavigate, useParams} from "react-router-dom";
import useToken from '../../useToken';
import LogeIn, {data_value} from "../LogeIn/LogeIn";
import PersonalInformation from "./PersonalInformation";
import MyMessages from "./MyMessages";
import Orders from "./Orders";
import MyAccount from "./MyAccount";


function Profile({sign_in, onSign_In}) {

  
  const {value} = data_value()

  

  let { username} = useParams();
  username = "hello"
  let navigate = useNavigate();

  const {token, setToken} = useToken();
  const [component, setComponent] = useState(<PersonalInformation value={value}/>)
  const [actived, setActive] = useState("")
  /*const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:1000/Homepage/AllUsers')
    .then(res =>  {
      console.log("Getting from ::::", res.data)
      setData(res.data)
      }).catch(err => console.log(err))
    },[]); 
   This method above is not used, is left only to show how to use axios inside a Function instead a Class*/
   
    
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

  const changePI = (e) => {
    setActive(e.target.id)
    setComponent(<PersonalInformation value={value}/>);
    
  }
  const changeMyMessages = (e) => {
    setActive(e.target.id)
    setComponent(<MyMessages/>);
   
  }
  const changeOrders = (e) => {
    setActive(e.target.id)
    setComponent(<Orders/>);
   
  }
  const changeMyAccount = (e) => {
    setActive(e.target.id)
    setComponent(<MyAccount/>);
   
  }
  const changeToken = (e) => {
     setToken(!token);
     onSign_In("Sign In");
  }

  
  

if(!token) {
  
  return <LogeIn setToken={setToken} 
                 sign_in={sign_in}
                 onSign_In={onSign_In}/>
  
}
  
  
  return (
    <div class="profile_text_1">
     <p>Welcome Back {value[4]}</p>

     <div className="Menu">
     <div className="column_1">
         
         <button id="1" className={actived === "1" ? "actived" : "menu"} 
                 onClick={(e) => { changeMyAccount(e);}}>My Account</button>
            
         <button id="2" className={actived === "2" ? "actived" : "menu"} 
                 onClick={(e) => {changePI(e);}}>Personal Information </button>
         
         <button id="3" className={actived === "3" ? "actived" : "menu"} 
                 onClick={(e) => { changeMyMessages(e);}}>My Messages</button>
         
         <button id="4" className={actived === "4" ? "actived" : "menu"} 
                 onClick={(e) => { changeOrders(e);}}>My Orders</button>
         
         
      </div> 
         <div className= "column_2">
            {component}
         </div>

    </div>  
          
          
			
                 
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Change to Home page
      </button>
      &nbsp; &nbsp;
      <button
        onClick={() =>  changeToken(!token)}>Sign Out
      </button>
    </div>
  );
}

export default Profile;
