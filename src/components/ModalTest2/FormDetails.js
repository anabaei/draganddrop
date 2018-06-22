import React from 'react'


function myswitch(param){
  switch(param.name) {
    case 'input':
      return <input label={param.label} placeholder={param.label} />
    default:
     return <h2>d </h2>
  }

}


function FormDetails(props){
  return(
    <div>
    {
     myswitch(props)
   }
    </div>
  );

}

export default FormDetails;
