import React from 'react';
//import DisplayForm from '../components/DisplayForm';


class PublishForm extends React.Component{

 constructor(props){
   super(props);
  this.state = {
    form: JSON.parse(sessionStorage.myData),
    value: '',
    accounts: [],
    contacts: []
  };

 }

 componentDidMount () {
// Accounts.getall()
// .then(res => (console.log("results = "+ JSON.stringify(res.records)), this.setState({accounts: res.records}) ));
   }


render(){
console.log("SS"+JSON.stringify(this.state.form) );



 const handleChange = (event) => {

   switch(event.target.name)
   {
     case 'Last Name':
     this.setState({last_name: event.target.value});
     case 'First Name':
     this.setState({first_name: event.target.value});
     case 'email':
     this.setState({email: event.target.value});
     case 'Title':
     this.setState({title: event.target.value});
     case 'Birthdate':
     this.setState({birthdate: event.target.value});
     case 'Home Phone':
     this.setState({home_phone: event.target.value});
     case 'Mailing Address':
     this.setState({mailing_address: event.target.value});
     case 'Mobile':
     this.setState({mobile: event.target.value});
     default:
      " "
   }


   console.log("this state value = "+this.state.last_name);
 }


function myswitch(param)
{
   console.log("params name: "+param.name);
    switch(param.name)
    {
      case 'input':
        return (
           <div>
            <label className="form-label"> {param.label} </label>
            <input className="form-control" label={param.label} name={param.id} placeholder={param.label}  onChange={handleChange}/>
          </div>)
      case 'label':
        return  <label className="form-labale"> {param.label} </label>
      case 'submitButton':
          return <button className="btn btn-success"> Submit </button>
      default:
       return ""
    }
  }


const callrecords = () =>{
  //  Accounts.getall().then(res => (console.log("This is console.og"), this.setState({accounts: res.records}) ));
  //  Accounts.getcontacts().then(res => (console.log("This is console.og"), this.setState({contacts: res.records}) ));
}


const handleSubmit = event => {
    event.preventDefault();

    // const {currentTarget} = event;
    //
    // console.log("....  "+ currentTarget.textContent);
    // const arrayofinputs = currentTarget.textContent.replace( / +/g, ' ' ).split(' ').filter(word => (word !== '' && word !== 'Name') );
    //
    // for(var i in arrayofinputs) {
    //   if ( arrayofinputs[i] === 'First') { arrayofinputs[i] = 'First Name';}
    //   else if ( arrayofinputs[i] === 'Last') { arrayofinputs[i] = 'First Name';}
    // }
    // console.log("inputs"+ arrayofinputs);

    const attr = {
       sex: this.state.last_name,
       age: this.state.last_name,
       evidence: 'eve333'
     };

    //  var formData2 = new formData();
    //  for (var k in attr) {
    //      formData.append(k, attr[k]);
    //     }

//Connection.postform(attr);

 Connection.postform(attr);


  setTimeout(function () {
         //the passed function is called here
         callrecords();
     }, 2000);


  //Diagnose.postdiag(attr).then((res) => Object.assign(res, attr)).then((res) => this.props.history.push('/components/questions', res));
}



  const  {tasks} = this.state.form;
  console.log("tasks= "+ tasks);
  return(
    <div>

      <form onSubmit={handleSubmit}>
      {
        tasks.map(acc =>  <div> { acc.category === "complete" ?
        myswitch(acc) // , console.log("acc= "+ JSON.stringify(acc))  )
        : console.log("wip") } </div> )
      }

       {/* <DisplayForm  {...this.state.form} onChange={this.handleChange} /> */}
     </form>
     { // console.log("rrrrr"+ JSON.stringify(this.state.accounts[0] ) ) /* {
       this.state.accounts.map(acc => <p> {acc.Name} </p>)
     }
     { // console.log("rrrrr"+ JSON.stringify(this.state.accounts[0] ) ) /* {
       this.state.contacts.map(ac => <p> {ac.Name} </p>)
     }
    </div>
  );
}

}

export default PublishForm;
