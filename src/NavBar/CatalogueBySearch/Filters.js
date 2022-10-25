import React from "react";


class Filters extends React.Component {

    
  
  render(){
    const price=this.props.price;
    const min=this.props.min;
    const max=this.props.max;
    const afterYearOnly_2 = this.props.afterYearOnly_2;
    const spanish = this.props.spanish;
    const french = this.props.french;
    const english = this.props.english;
    const From = this.props.From;
    const To = this.props.To;

  return (
   <>
   <input type="checkbox" checked = {price} 
        onChange={(m)=>this.props.onPrice(m.target.checked)}/>

        <span class="language">Price</span>
        <input class="years_form" type='number' placeholder="Min" value={min}
          onChange={(s)=>this.props.onMin(s.target.value)}/>
        
        <input class="years_form" type='number' placeholder="Max" 
         value={max} onChange={(n)=>this.props.onMax(n.target.value)}/> 
    <p> </p>
    <input type="checkbox" checked = {afterYearOnly_2} 
        onChange={(m)=>this.props.onAfterYearChange_2(m.target.checked)}/>

        <span class="language">&nbsp;Years of publication</span>
        <input class="years_form" type='number' placeholder="From" value={From}
          onChange={(s)=>this.props.onFrom(s.target.value)}/>
        
        <input class="years_form" type='number' placeholder="to" 
         value={To} onChange={(n)=>this.props.onTo(n.target.value)}/>
    
    <p class="language" >Language</p>

    <p><input type="checkbox" checked = {english}
         onChange={(m)=>this.props.onEnglish(m.target.checked)}/> English </p>
    <p><input type="checkbox" checked = {french}
       onChange={(m)=>this.props.onFrench(m.target.checked)}/> French </p>

    <p><input type="checkbox" checked = {spanish}
      onChange={(m)=>this.props.onSpanish(m.target.checked)}/> Spanish </p>
    
  </> 
   
  );
}
}

export default Filters;


