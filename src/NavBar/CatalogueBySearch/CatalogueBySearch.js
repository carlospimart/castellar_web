import React from "react";
import { useLocation } from "react-router-dom";
import "./CatalogueBySearch.css"
import CBSTable from './CBSTable';
import Filters from "./Filters";

class CatalogueBySearch extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      afterYearOnly_2: false,
      From: null,
      To: null
    };
    this.handleAfterYearChange_2=this.handleAfterYearChange_2.bind(this);
    this.handleFrom=this.handleFrom.bind(this);
    this.handleTo=this.handleTo.bind(this);
   
  }
  handleAfterYearChange_2(AYC_2){
    this.setState({
      afterYearOnly_2:AYC_2
    })
  }
  handleFrom(F){
    this.setState({
      From:F
    })
  }
  handleTo(T){
    this.setState({
      To:T
    })
  }
  
  render(){
   var data;
  
   data =this.props.data;

   if(data==null){
    data=" ";
   }
   
  return (
   <>
  <div class="catalogueBySearch_text"> 
    
    <div class="top_div">
     <span id="results">Results:</span>
    </div>
   
    <div class="down_div">
        <div class= 'column_mother_1'>
            <Filters afterYearOnly_2={this.state.afterYearOnly_2}
                     onAfterYearChange_2={this.handleAfterYearChange_2}
                     onFrom={this.handleFrom}
                     onTo={this.handleTo}
                     From={this.state.From}
                     To={this.state.To} />
        </div>
        <CBSTable data={data}
                    afterYearOnly_2={this.state.afterYearOnly_2}
                    From={this.state.From}
                    To={this.state.To} />
    </div>
   
   
   
  </div>

  
  </> 
   
  );
}
}
export function CatalogueBySearch_mother(props) {

  const { state } = useLocation();
  var data = state;
  return <CatalogueBySearch data={data}></CatalogueBySearch> 
  
}



export default CatalogueBySearch;