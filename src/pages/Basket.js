import React, {useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import "./CSS/Basket.css"

function Basket({items, setItems, items_values,setIValues, total_price, setTotalPrice}) {

  let navigate = useNavigate();
  const row = [];
  const [msg, setState] = useState("")
  var value=0;
  
  items_values.forEach((book) => {
    value = value + book.price;
    row.push(
    
      <tr>
        <td>{book.title}</td>
        <td>{book.price}</td>
       </tr>
      
    );
      
  });
  const goToCheckout = (e) => {
    if(items>0){
    {navigate("./Checkout");}   
    }else{

      setState("You don't have any item in the trolley")

    }
  }
  setTotalPrice(value)
  return (
  <div class="basket_text"> THIS IS THE Basket 
  <div>
  <p>Number of items: {items} </p>
  </div>
  <div>
  <p>
  <table id='book_table'>
      {row}
   </table>    
  </p>
  
  </div>
  <h1>Total price: £{total_price}</h1>
  <div>
  
<button class="bottom_checkout"
          onClick={() =>  goToCheckout()}>Checkout</button>
         
<button class="clear_basket" 
          onClick={() =>  {setItems(0)
                           setIValues([])}}>Clear</button>
  </div>
  <h3 class="msg">{msg}</h3>
  </div> 
   
  );
}

export default Basket;