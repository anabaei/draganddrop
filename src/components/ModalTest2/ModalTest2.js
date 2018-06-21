

import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//import '../App.css';
class ModalTest2 extends Component {



  constructor (props) {

      super(props);
         this.state = {
           tasks : props.tasks
        //   // accounts: [],
        //   //
        //   // tasks: [
        //   //   {name: "Learn Angular", category:"wip", bgcolor: "yellow"},
        //   //   {name: "React", category:"wip", bgcolor: "pink"},
        //   //   {name: "Vue", category:"complete", bgcolor: "skyblue"}
        //   // ],
        //   // tasks1:[
        //   //    {name: "input", id:"Name" , title: "" , label: "Workshop", type:"string", category:"wip"}
        //   //   // ,{name: "input", id:"Semester" , title: "", label: "Semester", type:"string", category:"wip"}
        //   //   ,{name: "input", id:"Syllabus" , title: "" , label: "Syllabus", type:"url", category:"wip"}
        //   //   // ,{name: "input", id:"Title" , title: "", label: "Title", type:"string", category:"wip"}
        //   //   ,{name: "input", id:"StartDate" , title: "", label: "Start Date", type:"date", category:"wip"}
        //   //   ,{name: "input", id:"EndDate" , title: "", label: "End Date", type:"date", category:"wip"}
        //   //   // ,{name: "input", id:"HomePhone" , title: "", label: "Home Phone", type:"number", category:"wip"}
        //   //   // ,{name: "input", id:"MailingAddress" , title: "", label: "Mailing Address", type:"string", category:"wip"}
        //   //   // ,{name: "input", id:"Mobile" , title: "", label: "Mobile", type:"number", category:"wip"}
        //   //   ,{name: "submitButton", id:"Submit" , title: "",  category:"wip", bgcolor: "green"}
        //   //
        //   // //  ,{name: "label", id:"lable First Name" , title: "", label: "First Name", type:"string", category:"wip"}
        //   // ]
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
      if(task.id == id) {
        task.category = cat
      }
      return task;
   })
   this.setState({
     ...this.state, // passing all params
      tasks
   });
 }


  render() {
    const Error = styled.div`color:red`;
    const In = styled.div`border: solid 3px; color:yellow`;
    const divcontainer = styled.div`text-align: center`;
    const Divwip = styled.div`
    position: absolute;
    width: 30%;
    height: 100vh;
    left: 0;
    top: 10;
    background-color: #cccccc;
    border-right: 1px dotted;
    padding: 1%;
    text-align: left
    `;
    const Divdropable = styled.div`
    position: absolute;
    width: 70%;
    height: 100vh;
    right: 0;
    top: 10;
    background-color: #800000;
    border-left: 1px dotted;
    padding: 1%;
    text-align: left
     `;

    var tasks = {
      wip: [],
      complete: []
    }


this.state.tasks.forEach ( (t)=> {
    tasks[t.category].push(
      <div
        onDragStart={(e)=> this.onDragStart(e, t.name)}
        draggable
        key={t.name} className="draggable" style= {{backgroundColor: t.bgcolor}}>
        {t.name}
      </div>
    );
 });


  return (
    <div>


    <div className="container-drag">

     {/* <h2 className="header">Drag </h2> */}

      {/*
     <!--////////////////////////////////////////////////////////////////
     ///////////////////////// Two parts  ///////////////////////////
     ////////////////////////////////////////////////////////////////
     */}


       <Divwip
         onDrop={(e)=>{this.onDrop(e, "wip")}}
         onDragOver={ e => this.onDragOver(e)}
         >
          {/* <span className="task-header">WIP</span> */}


          <h3>
        <Error> d</Error>   Registraion  <In> s </In>Feilds
         </h3>
           <br />

          {tasks.wip}
       </Divwip>

       <Divdropable
         onDragOver={ e => this.onDragOver(e) }
           onDrop={e=> this.onDrop(e, "complete")}
         >
          {/* <span className="task-header">Completed</span> */}
          {/* <div className="previewbutton" >
              <Preview { ...this.state} />
          </div> */}

          {/* <Jumbotron>
            <div class="container">
            <h3>Customize Form </h3>
              {tasks.complete}
            </div>
          </Jumbotron> */}
       </Divdropable>
    </div>
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
    {name: "email", category:"wip", bgcolor: "skyblue", type: "input"}
  ]
};

export default ModalTest2;
