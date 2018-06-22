

import React, {Component} from 'react';
import styled from 'styled-components';
import Preview from './Preview';
import PropTypes from 'prop-types';

const Botton = styled.div`
  background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#777777;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
`;
const Inputtext = styled.input`
 width: 80%;
 padding: 8px 4px;
 margin: 8px 20px 8px 10px;
 box-sizing: border-box;
`;

class ModalTest2 extends Component {


  constructor (props) {
      super(props);
         this.state = {
           tasks : props.tasks

         };
}

/// define funcitons
 onDragOver = (ev) => {
   ev.preventDefault();
 }

 onDragStart = (ev, id) => {
   console.log('draggable ',id);
   ev.dataTransfer.setData("id", id); //setData assign id of draged element into id var
 }

// we loop through and if the id were same then change the category with the cat we are passing as params
 onDrop = (ev, cat) => {
   let id = ev.dataTransfer.getData("id");
   console.log("ondrop= "+ id);
   let tasks = this.state.tasks.filter( task=> {
      if(task.name == id) {
        task.category = cat
      }
      return task;
   })
   this.setState({
     ...this.state, // passing all params
      tasks
   });
 }
 atoms = (t) =>
 {
   if(t.type === 'input')
   return (
     <div>
       <label style={{margin: '0% 100% 0% 2%' }}> {t.name} </label>
       <Inputtext
         onDragStart={(e)=> this.onDragStart(e, t.name)}
         draggable
         key={t.name} />
     </div>
   );
   else if (t.type === 'botton')
   return(
     <Botton
       onDragStart={(e)=> this.onDragStart(e, t.name)}
       draggable
       key={t.name}>
       Submit</Botton>
   );

   else if(t.type === 'dropdown')
   {

    var a = [];
    for(var i of t.options)
    {
      a.push( <option value={i}>{i}</option> );
    }
     return(

      //  var arrres = [];
      //  for(var i of t.options){
      //    arrres.push(<options key={i}>{i}</options>)
      //  }
      //   <select>
      //     {i}
      //   </select>
      <div draggable>
          <label style={{margin: '0% 100% 0% 2%' }}> {t.name} </label>
          <Inputtext
            onDragStart={(e)=> this.onDragStart(e, t.name)}
            draggable
            key={t.name} />
      </div>
     );
   }

 }


  render() {
    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  STYLED  ///////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    const Error = styled.div`color:red`;
    const In = styled.div`border: solid 3px; color:yellow`;
    const Divcontainer = styled.div`text-align: center`;
    const Divwip = styled.div`
    position: absolute;
    width: 30%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #cccccc;
    border-right: 1px dotted;
    padding: 1%;
    text-align: left
    `;
    const Divdropable = styled.div`
    position: absolute;
    width: 66%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: #800000;
    border-left: 1px dotted;
    padding: 1%;
    text-align: left
     `;

     ////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////          ///////////////////////////////
     ////////////////////////////////////////////////////////////////////////////////
    var tasks = {
      wip: [],
      complete: []
    }

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////  Read props & Create atoms  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
this.state.tasks.forEach ( (t)=> {
    tasks[t.category].push(
      this.atoms(t)
    );
 });
 //////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////                           ////////////////////////////
 /////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>

    <Divcontainer>
       <Divwip
         onDrop={(e)=>{this.onDrop(e, "wip")}}
         onDragOver={ e => this.onDragOver(e)}
         >
          {/* <span className="task-header">WIP</span> */}
          <h3>
           Fields
         </h3>
           <br />

          {tasks.wip}
       </Divwip>

       <Divdropable
         onDragOver={ e => this.onDragOver(e) }
           onDrop={e=> this.onDrop(e, "complete")}
         >
           {tasks.complete}
          {/* <span className="task-header">Completed</span> */}

              <Preview { ...this.state} />
        

          {/* <Jumbotron>
            <div class="container">
            <h3>Customize Form </h3>
              {tasks.complete}
            </div>
          </Jumbotron> */}
       </Divdropable>
    </Divcontainer>
</div>
  );
  }
}

//
ModalTest2.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

ModalTest2.defaultProps = {
  message: 'World',
  tasks:
  [
    {name: " First Name", category:"wip", bgcolor: "yellow", type: "input" },
    {name: "Last Name", category:"wip", bgcolor: "pink", type: "input"},
    {name: "email", category:"wip", bgcolor: "skyblue", type: "input"},
    {name: "botton", category:"wip", bgcolor: "skyblue", type: "botton"}
  ]
};

export default ModalTest2;
