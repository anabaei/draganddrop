
### use case 

* Github [link](https://github.com/anabaei/draganddrop)
```javascript
import ModalTest2 from 'draganddrop-nabaei/lib/ModalTest2';

class App extends Component {
  render() {
    const pr = {
      tasks:
      [
        {name: "First Name", category:"wip", bgcolor: "yellow", type: "input" },
        {name: "Last Name", category:"wip", bgcolor: "pink", type: "input"},
        {name: "email", category:"wip", bgcolor: "skyblue", type: "input"},
        {name: "dropdown", category:"wip", bgcolor: "skyblue", type: "dropdown", options:[1,2,3,4]},
        {name: "submit", category:"wip", bgcolor: "skyblue", type: "botton"}
      ]
    };
    return (
      <div className="App">
           <ModalTest2 {...pr} />
      </div>
    );
  }
}
```

## After publish clicked
* In preview page, by pressing publish key word, it uses windows session storage. It can save data as string so 
```javascript
{sessionStorage.setItem('myData', JSON.stringify(this.state.props))}
```
* myData is variable to save data. 
* Inside next page first destructure the data by 
```javascript
 constructor(props)
 {
   super(props);
  this.state = {
    form: JSON.parse(sessionStorage.myData)
    }
 }
```
* To create form from this props we save them into tasks and gothrough 
```javascript
const  {tasks} = this.state.form;
  return(
    <div>
      <form onSubmit={handleSubmit}>
      {
        tasks.map(acc =>  <div> { acc.category === "complete" ?
        myswitch(acc) : console.log("wip") } </div> )
      }
     </form>
    </div>
  );
```
* `myswitch` is just a switch function to render elements and also each input has event listener to set states with everychanges   
```javascript
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
```
* `handleChange` function would be like 
```javascript
 const handleChange = (event) => {

   switch(event.target.name)
   {
     case 'Last Name':
     this.setState({last_name: event.target.value});
     case 'First Name':
     this.setState({first_name: event.target.value});
     
```
* `handleSubmit` would be like 
```javascript
const handleSubmit = event => {
    event.preventDefault();
    const attr = {
       firstName: this.state.first_name,
       lastName: this.state.last_name,
       evidence: 'something'
     };
 Connection.postform(attr);
```
* Where the postform would be a callout connection to db

