import React,{ useState, useEffect } from "react";
import Items from "./Items";
import Authors from "./Authors";
import Users from "./Users";
import LogeInAdmin from "./LogeInAdmin/LogeInAdmin";
import Languages from "./Languages";
import { useNavigate, useParams} from "react-router-dom";
import useTokenAdmin from '.././UseTokenAdmin';

function Admin({sign_in, onSign_In, user_admin}) {

  const [component, setComponent] = useState(<Items/>)
  const [actived, setActive] = useState("")
  const {tokenAdmin, setTokenAdmin} = useTokenAdmin();

  let navigate = useNavigate();
  const changeItems = (e) => {
    setActive(e.target.id)
    setComponent(<Items/>);
    
  }
  const changeAuthors = (e) => {
    setActive(e.target.id)
    setComponent(<Authors/>);
   
  }
  const changeUsers = (e) => {
    setActive(e.target.id)
    setComponent(<Users/>);
   
  }
  const changeLanguages = (e) => {
    setActive(e.target.id)
    setComponent(<Languages/>);
   
  }

  const changeToken = (e) => {
    setTokenAdmin(!tokenAdmin);
    onSign_In("My account");
 }
  
 if(!tokenAdmin) {
  
  return <LogeInAdmin setTokenAdmin={setTokenAdmin} 
                 sign_in={sign_in}
                 onSign_In={onSign_In}
                 user_admin={user_admin}
                 />
  
}
  return (
   <>
  <div> 
  
  Dashboard
  
  <div class="profile_text_1">
     

     <div className="Menu">
     <div className="column_1">
         
         <button id="1" className={actived === "1" ? "actived" : "menu"} 
                 onClick={(e) => { changeItems(e);}}>Items</button>
            
         <button id="2" className={actived === "2" ? "actived" : "menu"} 
                 onClick={(e) => {changeAuthors(e);}}>Authors</button>
         
         <button id="3" className={actived === "3" ? "actived" : "menu"} 
                 onClick={(e) => { changeUsers(e);}}>Users</button>
         
         <button id="4" className={actived === "4" ? "actived" : "menu"} 
                 onClick={(e) => { changeLanguages(e);}}>Language</button>
         
         
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
    
    </div>
 

  </div>
  <button
        onClick={() =>  changeToken(!tokenAdmin)}>Sign Out
  </button>
  </> 
   
  );
}

export default Admin;