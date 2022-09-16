import React from "react";
import axios from 'axios';

class CatalogueTable extends React.Component {

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
    const rows = [];
    rows.push()

    this.state.books.forEach((book) => {

    rows.push(
          
          
          <tr>              
              <td>{book.title}</td>
              <td>{book.year}</td>
              <td>{book.language.name}</td>
              <td>{book.author[0].first_name} {book.author[0].last_name}</td>
          </tr>
      
        
    );
    
  });
  
  return (
   <>
   {rows} 
   </> 
   
  );
}
}

export default CatalogueTable;