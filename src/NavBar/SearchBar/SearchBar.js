import React from "react";
import { useNavigate} from "react-router-dom";

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      search: "",

    };
    this.handleSBarChange=this.handleSBarChange.bind(this);
    
  }
  handleSBarChange(event){
    this.setState({
      search: event.target.value
    });

  }
  handleClick(e) {
     e.preventDefault();
     this.props.navigate("/CatalogueBySearch", { state: this.state.search })
    
  }
  render() {

  const Text = this.state.search;
    
          
  return (
    <form>
    <input class='Bar'  type="text" value={Text} name="Filter" 
       placeholder='Search' 
       onChange={this.handleSBarChange}
    />
    <button class='search_submit' 
    onClick={(e) => this.handleClick(e)}></button>
    </form>

  );
 }
}
export function Catalogue_link(props) {

  const navigate = useNavigate();
  return <SearchBar navigate={navigate}></SearchBar> 
  
}
export default SearchBar;