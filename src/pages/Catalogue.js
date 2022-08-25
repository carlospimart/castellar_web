import React from "react";
import "./CSS/Catalogue.css"
function Catalogue() {
  return (
   <>
  <div class="catalogue_text"> THIS IS THE CATALOGUE PAGE
  <p> Welcome to Castellar Web</p>
  <p>Welcome to our shop

  <table id='book_table'>
  <tr>
    <th>Title</th>
    <th>Year</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>The picture of Dorian Grey</td>
    <td>1956</td>
    <td>English</td>
  </tr>
  <tr>
    <td> L'Étranger</td>
    <td>1984</td>
    <td>French</td>
  </tr>
   </table>
   </p>
  </div>
  </> 
   
  );
}

export default Catalogue;