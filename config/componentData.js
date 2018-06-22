module.exports = [{"name":"ModalTest","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'ModalTest'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A super lame component that says Hello with a custom message. */\nfunction ModalTest({message}) {\n  return <div style={{color: 'green'}}> Hello2 {message}</div>\n}\n\nModalTest.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nModalTest.defaultProps = {\n  message: 'ModalTest'\n};\n\nexport default ModalTest;\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\nimport ModalTest from '../../../components/ModalTest';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <ModalTest message=\" viewers!\" />\n}\n"}]},{"name":"ModalTest2","description":"","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}},"tasks":{"defaultValue":{"value":"[\n  {name: \" First Name\", category:\"wip\", bgcolor: \"yellow\", type: \"input\" },\n  {name: \"Last Name\", category:\"wip\", bgcolor: \"pink\", type: \"input\"},\n  {name: \"email\", category:\"wip\", bgcolor: \"skyblue\", type: \"input\"},\n  {name: \"botton\", category:\"wip\", bgcolor: \"skyblue\", type: \"botton\"}\n]","computed":false},"required":false}},"code":"\n\nimport React, {Component} from 'react';\nimport styled from 'styled-components';\nimport Preview from './Preview';\nimport PropTypes from 'prop-types';\n\nconst Botton = styled.div`\n  background-color:#ededed;\n\tborder-radius:6px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#777777;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #ffffff;\n`;\nconst Inputtext = styled.input`\n width: 80%;\n padding: 8px 4px;\n margin: 8px 20px 8px 10px;\n box-sizing: border-box;\n`;\n\nclass ModalTest2 extends Component {\n\n\n  constructor (props) {\n      super(props);\n         this.state = {\n           tasks : props.tasks\n\n         };\n}\n\n/// define funcitons\n onDragOver = (ev) => {\n   ev.preventDefault();\n }\n\n onDragStart = (ev, id) => {\n   console.log('draggable ',id);\n   ev.dataTransfer.setData(\"id\", id); //setData assign id of draged element into id var\n }\n\n// we loop through and if the id were same then change the category with the cat we are passing as params\n onDrop = (ev, cat) => {\n   let id = ev.dataTransfer.getData(\"id\");\n   console.log(\"ondrop= \"+ id);\n   let tasks = this.state.tasks.filter( task=> {\n      if(task.name == id) {\n        task.category = cat\n      }\n      return task;\n   })\n   this.setState({\n     ...this.state, // passing all params\n      tasks\n   });\n }\n atoms = (t) =>\n {\n   if(t.type === 'input')\n   return (\n     <div>\n       <label style={{margin: '0% 100% 0% 2%' }}> {t.name} </label>\n       <Inputtext\n         onDragStart={(e)=> this.onDragStart(e, t.name)}\n         draggable\n         key={t.name} />\n     </div>\n   );\n   else if (t.type === 'botton')\n   return(\n     <Botton\n       onDragStart={(e)=> this.onDragStart(e, t.name)}\n       draggable\n       key={t.name}>\n       Submit</Botton>\n   );\n\n   else if(t.type === 'dropdown')\n   {\n\n    var a = [];\n    for(var i of t.options)\n    {\n      a.push( <option value={i}>{i}</option> );\n    }\n     return(\n\n      //  var arrres = [];\n      //  for(var i of t.options){\n      //    arrres.push(<options key={i}>{i}</options>)\n      //  }\n      //   <select>\n      //     {i}\n      //   </select>\n      <div draggable>\n          <label style={{margin: '0% 100% 0% 2%' }}> {t.name} </label>\n          <Inputtext\n            onDragStart={(e)=> this.onDragStart(e, t.name)}\n            draggable\n            key={t.name} />\n      </div>\n     );\n   }\n\n }\n\n\n  render() {\n    ////////////////////////////////////////////////////////////////////////////////\n    ///////////////////////////////////////  STYLED  ///////////////////////////////\n    ////////////////////////////////////////////////////////////////////////////////\n    const Error = styled.div`color:red`;\n    const In = styled.div`border: solid 3px; color:yellow`;\n    const Divcontainer = styled.div`text-align: center`;\n    const Divwip = styled.div`\n    position: absolute;\n    width: 30%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    background-color: #cccccc;\n    border-right: 1px dotted;\n    padding: 1%;\n    text-align: left\n    `;\n    const Divdropable = styled.div`\n    position: absolute;\n    width: 66%;\n    height: 100%;\n    right: 0;\n    top: 0;\n    background-color: #800000;\n    border-left: 1px dotted;\n    padding: 1%;\n    text-align: left\n     `;\n\n     ////////////////////////////////////////////////////////////////////////////////\n     ///////////////////////////////////////          ///////////////////////////////\n     ////////////////////////////////////////////////////////////////////////////////\n    var tasks = {\n      wip: [],\n      complete: []\n    }\n\n//////////////////////////////////////////////////////////////////////////////////////////\n/////////////////////////////////  Read props & Create atoms  ///////////////////////////\n/////////////////////////////////////////////////////////////////////////////////////////\nthis.state.tasks.forEach ( (t)=> {\n    tasks[t.category].push(\n      this.atoms(t)\n    );\n });\n //////////////////////////////////////////////////////////////////////////////////////\n ///////////////////////////////                           ////////////////////////////\n /////////////////////////////////////////////////////////////////////////////////////\n\n  return (\n    <div>\n\n    <Divcontainer>\n       <Divwip\n         onDrop={(e)=>{this.onDrop(e, \"wip\")}}\n         onDragOver={ e => this.onDragOver(e)}\n         >\n          {/* <span className=\"task-header\">WIP</span> */}\n          <h3>\n           Fields\n         </h3>\n           <br />\n\n          {tasks.wip}\n       </Divwip>\n\n       <Divdropable\n         onDragOver={ e => this.onDragOver(e) }\n           onDrop={e=> this.onDrop(e, \"complete\")}\n         >\n           {tasks.complete}\n          {/* <span className=\"task-header\">Completed</span> */}\n\n              <Preview { ...this.state} />\n        \n\n          {/* <Jumbotron>\n            <div class=\"container\">\n            <h3>Customize Form </h3>\n              {tasks.complete}\n            </div>\n          </Jumbotron> */}\n       </Divdropable>\n    </Divcontainer>\n</div>\n  );\n  }\n}\n\n//\nModalTest2.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nModalTest2.defaultProps = {\n  message: 'World',\n  tasks:\n  [\n    {name: \" First Name\", category:\"wip\", bgcolor: \"yellow\", type: \"input\" },\n    {name: \"Last Name\", category:\"wip\", bgcolor: \"pink\", type: \"input\"},\n    {name: \"email\", category:\"wip\", bgcolor: \"skyblue\", type: \"input\"},\n    {name: \"botton\", category:\"wip\", bgcolor: \"skyblue\", type: \"botton\"}\n  ]\n};\n\nexport default ModalTest2;\n","examples":[]}]