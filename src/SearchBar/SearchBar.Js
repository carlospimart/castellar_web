import React from "react";

class SearchBar extends React.Component{

  render() {

  const Text = this.props.search;
    
          
  return (
    <form>
    <input class='search' type="text" value= {Text} 
    name="search" placeholder="Search" 
    onChange={(e)=>this.props.onSBarChange(e.target.value)}
    />
    </form>

  );
 }
}
export default SearchBar;