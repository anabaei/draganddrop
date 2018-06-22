import React, { Component } from 'react';

import ModalTest2 from './components/ModalTest2';

class App extends Component {
  render() {

    const pr = {
      message: 'World',
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

export default App;
