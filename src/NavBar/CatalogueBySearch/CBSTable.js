import React from "react";
import axios from 'axios';

class CBSTable extends React.Component {

  state = {
    books: []
  }
  componentDidMount(){
    axios.get('http://localhost:1000/Homepage/AllBooks').then(res =>{
        console.log(res);
        this.setState({ books : res.data })
    });
  }
  render(){

    const afterYearOnly_2 = this.props.afterYearOnly_2; 
    const From = this.props.From;
    const To = this.props.To;

    const data = this.props.data.toLowerCase();
    const rows = [];
    rows.push()

    this.state.books.forEach((book) => {

        if (book.title.toLowerCase().indexOf(data) === -1) {
            return;
        }
        if (afterYearOnly_2 && book.year < From) {
          return;
        }
        if (afterYearOnly_2 && book.year > To) {
          return;
        }

    rows.push(
      
          <li>
          
              <div class="li_div_top">
              <div class= "column">

              <span class='condition'>Condition: {book.condition}</span>
              
              <p>
              <span id="price">£ {book.price}</span>
              </p>
              <p>
              <button id = 'add_button'>
                      <div class='Logo_add_basket'></div>
                          <span class = "tex_button">Add to Basket</span>
              </button>
              <hr></hr>
              </p>
              
              
              </div>  
              
              <div class= "column"> 

              
              <span class='title'>{book.title}</span>
              
               <span class='author'> , &#10098;{book.author[0].first_name} {book.author[0].last_name}
               &#10099;
              </span>
              
              
              <p>
              <span id="publish">Published in {book.year}</span>
              </p>
              
              <span id='language'>{book.language.name}</span>

              <hr class="left_bar"></hr>
              
              </div>

              </div> 

              <div class="li_div_bottom">
                 
              </div>
              
          </li>      
    );
     
  });
  
  return (
   <>
    <div class= 'column_mother_2'>
   <ul> 
   {rows} 
   
   </ul> 
   
   </div>
   </> 
   
  );
}
}

export default CBSTable;