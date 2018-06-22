import React from 'react';
import FormDetails from './FormDetails';
import {Jumbotron} from 'react-bootstrap';


function handleChange(){
  console.log("s");
}


function inputs(param){
  return(
     <div>
      <label className="form-label"> {param.name} </label>
      <input style={{width: '100%', padding: '6px 3px' }} label={param.label} name={param.id} placeholder={param.name} onChange={handleChange} />
     </div>
  );
}


//function DisplayForm(props){
class DisplayForm extends React.Component{
constructor(props){

  super(props);
  this.state = {
     previewform: []
  };

//sessionStorage.setItem('myData', JSON.stringify(props));
}

render()
 {
 function myswitch(param)
 {
     switch(param.type)
     {
       case 'input':
         return  inputs(param)
       case 'label':
         return  <label className="form-labale"> {param.label} </label>
       case 'botton':
           return <button style={{width: '20%', padding: '6px 3px', backgroundColor: 'lightgray', color: 'black'}} disabled> Submit </button>
       default:
        return ""
     }
   }

const  {tasks} = this.props;
 return(
   <div>
     <div>
     {
     tasks.map(acc =>   <div style={{margin: '2%'}}> { acc.category === "complete" ? myswitch(acc)  : console.log("wip") } </div> )
     }
   </div>
   </div>
  );
 }
}

export default DisplayForm;
