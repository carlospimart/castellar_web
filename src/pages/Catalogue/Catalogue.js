import React from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Catalogue.css"
import CatalogueTable from './CatalogueTable';

function Catalogue (){

  const value="hello";
  
  return (
   <>
  <div class="catalogue_text"> THIS IS THE CATALOGUE PAGE
  <p> Welcome to Castellar Web</p>
  <p> Welcome to our shop</p>
  <table id='book_table'>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Year</th>
    <th>Language</th>
    <th>Author</th>
  </tr>
   <CatalogueTable/>
   </table>
   
   <h1>End of Catalogue</h1>
  </div>

  
  </> 
   
  );
}


export default Catalogue;