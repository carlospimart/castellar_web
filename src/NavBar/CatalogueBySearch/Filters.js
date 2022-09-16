import React from "react";


class Filters extends React.Component {

    
  
  render(){
    
    const afterYearOnly_2 = this.props.afterYearOnly_2;
    const From = this.props.From;
    const To = this.props.To;

  return (
   <>
    <input type="checkbox" ckecked = {afterYearOnly_2} 
        onChange={(m)=>this.props.onAfterYearChange_2(m.target.checked)}/>
        Only show books between years from <input type='number' placeholder="From" value={From} 
          onChange={(s)=>this.props.onFrom(s.target.value)}/> to <input type='number' placeholder="to" 
          value={To} onChange={(n)=>this.props.onTo(n.target.value)}/>
    
   </> 
   
  );
}
}

export default Filters;


