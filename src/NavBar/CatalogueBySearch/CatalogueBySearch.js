import React from "react";
import { useLocation } from "react-router-dom";
import "./CatalogueBySearch.css"
import CBSTable from './CBSTable';
import Filters from "./Filters";

class CatalogueBySearch extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      price: false,
      min: null,
      max:null,
      afterYearOnly_2: false,
      english: true,
      french: true,
      spanish: true,
      From: null,
      To: null
    };
    this.handlePrice=this.handlePrice.bind(this);
    this.handleMin=this.handleMin.bind(this);
    this.handleMax=this.handleMax.bind(this);
    this.handleAfterYearChange_2=this.handleAfterYearChange_2.bind(this);
    this.handleLanguage_ENG=this.handleLanguage_ENG.bind(this);
    this.handleLanguage_FRN=this.handleLanguage_FRN.bind(this);
    this.handleLanguage_SPA=this.handleLanguage_SPA.bind(this);
    this.handleFrom=this.handleFrom.bind(this);
    this.handleTo=this.handleTo.bind(this);
      
  }
  handlePrice(PRC){
    this.setState({
      price:PRC
    })
  }
  handleMin(MIN){
    this.setState({
      min:MIN
    })
  }
  handleMax(MAX){
    this.setState({
      max:MAX
    })
  }
  handleAfterYearChange_2(AYC_2){
    this.setState({
      afterYearOnly_2:AYC_2
    })
  }
  handleLanguage_ENG(eng){
    this.setState({
      english:eng
    })
  }
  handleLanguage_SPA(spa){
    this.setState({
      spanish:spa
    })
  }
  handleLanguage_FRN(frn){
    this.setState({
      french:frn
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
    data="        ";
   }
   
  return (
   <>
  <div class="catalogueBySearch_text"> 
    
    <div class="top_div">
     <span id="results">Results:</span>
    </div>
    <div class="down_div">
        <div class= 'column_mother_1'>
            <Filters onPrice={this.handlePrice}
                     price={this.state.price}
                     onMin={this.handleMin}
                     min={this.state.min}
                     onMax={this.handleMax}
                     max={this.state.max}
                     afterYearOnly_2={this.state.afterYearOnly_2}
                     onAfterYearChange_2={this.handleAfterYearChange_2}
                     onEnglish={this.handleLanguage_ENG}
                     onFrench={this.handleLanguage_FRN}
                     onSpanish={this.handleLanguage_SPA}
                     english={this.state.english}
                     french={this.state.french}
                     spanish={this.state.spanish}                   
                     onFrom={this.handleFrom}
                     onTo={this.handleTo}
                     From={this.state.From}
                     To={this.state.To} />
        </div>
        <CBSTable data={data}
                    items={this.props.items}
                    setItems = {this.props.setItems}
                    items_values={this.props.items_values}
                    setIValues = {this.props.setIValues}
                    price={this.state.price}
                    min={this.state.min}
                    max={this.state.max}
                    afterYearOnly_2={this.state.afterYearOnly_2}
                    english={this.state.english}
                    french={this.state.french}
                    spanish={this.state.spanish} 
                    From={this.state.From}
                    To={this.state.To}/>
    </div>
   
   
   
  </div>

  
  </> 
   
  );
}
}
export function CatalogueBySearch_mother({items, setItems, items_values, setIValues}) {
  
  const { state } = useLocation();
  var data = state;
  return <CatalogueBySearch data={data} items={items} setItems={setItems} 
                            items_values={items_values} setIValues={setIValues} />
         
  
}



export default CatalogueBySearch;