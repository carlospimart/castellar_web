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
  handleClick(e, id){
    e.preventDefault();
    console.log("log: ",  id)
    this.props.setItems(this.props.items + 1);
    
    this.state.books.forEach((book) => {
    
     if(id==book.books_id){
      this.props.items_values.push(
        book
      );
     }
    })
  } 
  render(){

    const afterYearOnly_2 = this.props.afterYearOnly_2; 
    const price=this.props.price;             
    const min=this.props.min;
    const max=this.props.max;
    const From = this.props.From;
    const english=this.props.english
    const spanish=this.props.spanish
    const french=this.props.french                
    const To = this.props.To;
    const data = this.props.data.toLowerCase();
    const rows = [];
    rows.push();
    this.state.books.forEach((book) => {
    
        if (book.title.toLowerCase().indexOf(data) === -1) {
            return;
        }
        // Price
        if (price && book.price < min) {
          return;
        }
        if (price && book.price > max) {
          return;
        }

        //Years of Publication
        if (afterYearOnly_2 && book.year < From) {
          return;
        }
        if (afterYearOnly_2 && book.year > To) {
          return;
        }

        //Languages
        if ((english !=true && book.language.name == "English") || (french !=true && book.language.name == "French"
        ||  (spanish !=true && book.language.name == "spanish"))) {
          return ;
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
              <button value="value" class = 'add_button' 
                      onClick={(e) => this.handleClick(e, book.books_id)}>
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