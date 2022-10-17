import React, {useState} from "react";
import "./CSS/Checkout.css"
import useToken from '../useToken';
import LogeIn, {data_value} from "./LogeIn/LogeIn";

function Checkout({sign_in, onSign_In, items_values, total_price}){

  const {token, setToken} = useToken();
  var card_array=[];
  var {value} = data_value();
  var alarm = false;
  var flag = false;
  var date = new Date()

  var today = date.getFullYear()+"-"+(date.getMonth()+1)

  var [asterix1, setAsterix1] = useState("");
  var [asterix2, setAsterix2] = useState("");
  var [asterix3, setAsterix3] = useState("");
  var [asterix4, setAsterix4] = useState("");

  var [name_card, setName] = useState("");
  var [cvv, setValue] = useState("");
  var [date_exp, setDate] = useState("");

  var [card_number1, setCard1] = useState("");
  var [card_number2, setCard2] = useState("");
  var [card_number3, setCard3] = useState("");
  var [card_number4, setCard4] = useState("");

  const [msg_error, setMsg] = useState("");
  const [msg_good, setMsg_Good] = useState("");
  const [test, setTest] = useState("");

  var card_number_completed = null;
  
  const row = []

  if(!token) {
  
    return <LogeIn setToken={setToken}
                   sign_in={sign_in}
                   onSign_In={onSign_In}/>
    
  }

  items_values.forEach((book) => {
    
    row.push(
    
      <h3>{book.title}, {book.price}</h3>
      
    );
      
  });
  
  const handleChange = (e) => {
   
   if(e.target.value.length<4){  
      setValue(e.target.value)
    }
  }

  const handleChangeCard = (e, id) => {
   if(id==1){ 
    if(e.target.value.length<5){  
       setCard1(e.target.value)
    }
   }else if(id==2){ 
    if(e.target.value.length<5){  
       setCard2(e.target.value)
    }
   }else if(id==3){ 
    if(e.target.value.length<5){  
       setCard3(e.target.value)
    }
   }else if(id==4){ 
    if(e.target.value.length<5){  
       setCard4(e.target.value)
    }
   } 
  }

  const handleChangeName =(e) =>{
    setName(e.target.value)
  }

  const handleChangeDate =(e) =>{
    setDate(e.target.value)
    setTest(e.target.value)
  }
  
  const handleRadio=(e)=>{
    alert("hello")
  }
  card_array = [card_number1, card_number2, card_number3, card_number4]
  card_number_completed = parseInt(card_number1*(1e12)) + parseInt(card_number2*(1e8)) + 
                          parseInt(card_number3*(1e4)) + parseInt(card_number4)
  
  const handlePay = (e) => {
    e.preventDefault();

    if(date_exp == "" ){
      setMsg("Please, introduce a expired date");
      setMsg_Good("");
      alarm = true;
      setAsterix3("*");
    }else{
      setAsterix3("");
    }
    
    if(name_card == "" ){
      setMsg("Please, introduce a card name");
      setMsg_Good("");
      alarm = true;
      setAsterix1("*");
    }else{
      setAsterix1("");
    }

    card_array.forEach((card_i) => {

      if(card_i.length<4){
          setMsg("Please, introduce a valid credit/debit card");
          setMsg_Good("");
          alarm = true;
          flag=true
          setAsterix2("*");   
      }
      if(flag==false){
        setAsterix2("");
      }

    })         
    
    if(cvv.length<3){
      setMsg_Good("");
      setMsg("Introduce a valid CVV code");
      alarm=true;
      setAsterix4("*");
    }else{
      setAsterix4("");
    }
    
    if(alarm==false){
       setMsg("")
       setAsterix2("")
       setAsterix4("")
       setMsg_Good("Payment accepted");
       alert("Card Number: " + card_number_completed)
    }
    
    
  }

  
  return (
   <>
  <div class="Checkout_text"> Checkout
  <div>

  <div class="name">
  <a class ="payment_method"> Name</a>
  </div>
  <p> <input type="radio" value="user_name" name="Filter"
       onChange={(e)=>handleRadio(e)}/>
  Name: <a class="data">{value[2]} {value[3]}</a></p>
  <div class="address">
  <a class ="payment_method"> Address</a>
  </div>
       <p>Address: <a class="data">{value[5]}</a></p>
       <p>Postcode: <a class="data">{value[6]}</a></p>
       <p>City: <a class="data">{value[7]}</a></p>
  <div class="payment_summary">
  <a class ="payment_method">Credit/Debit Card</a>
  </div>
  <div class="summary">
    <div class="summary_left">
       <p class="summary_title">Summary</p>
       <p class="items">Product: <a class="data">{row}</a></p> 
       <span class="payment_total">Price: <a class="data">{total_price}</a></span>  
    </div>
  </div>

  <div class="summary">

  <div class="payment_box">

    <h2 id="payment">Payment</h2>
  
     Name on Card <a class="asterix">{asterix1}</a>
    <p>
    <input type="text" name="first_name" value={name_card}
      onChange={(e) =>  handleChangeName(e)}/> 
    </p>
     Debit/Credit card number <a class="asterix">{asterix2}</a>
    <p> 
    <input class="card_number" type="number" name="card_number" 
     value={card_number1} 
    onChange={(e) =>  handleChangeCard(e, 1)}/>&nbsp; 

    <input class="card_number" type="number" name="card_number"
     value={card_number2} onChange={(e) =>  handleChangeCard(e, 2)}/>&nbsp;

    <input class="card_number" type="number" name="card_number"
     value={card_number3} onChange={(e) =>  handleChangeCard(e, 3)}/>&nbsp; 

    <input class="card_number" type="number" name="card_number"
     value={card_number4} onChange={(e) =>  handleChangeCard(e,4)}/>&nbsp; 
    </p>
    Exp. date <a class="asterix">{asterix3}</a>
    <p> 
    <input type="month" name="first_name" value={date_exp}
    min={today} onChange={(e) =>  handleChangeDate(e)}/> 
    </p>
     CVV <a class="asterix">{asterix4}</a> 
       <p>
        <input class="cvv" type="number" value={cvv}
         onChange={(e) =>  handleChange(e)}/>
       </p>
     </div>
    </div>
    </div>
    
      <button class="submit_button" 
      onClick={(e) =>  handlePay(e)}>Purchase</button>
      <div>
        <span class="msg_error">{msg_error}</span>
        <span class="msg_good">{msg_good}</span>
      </div>
    </div>
    
    
    </>
    );
  }
export default Checkout;