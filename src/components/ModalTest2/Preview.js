

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Button, Panel} from 'react-bootstrap';
import DisplayForm from './DisplayForm';
import styled from 'styled-components';
// import PublishForm from '../pages/PublishForm';
// import PublishContactForm from '../pages/PublishContactForm';
// import {loadState, SaveState} from './loadState';
// import {todoApp} from './Reducers';
// import {createStore} from 'redux';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '50%',
    // marginRight           : '-50%',
    backgroundColor       : 'darkred',
    transform             : 'translate(-50%, -50%)',

  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class Preview extends Component {


  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      props: props
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  //  this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
/////////////////////////////////////
//////////// REDEX //////////////////
//we need to save state anytime state changes so we call subscribe method to
// add a listenor and pass current state

//const persistedState = loadState();
//const store = createStore(todoApp);


// store.subscribe( ()=>{
//   SaveState(store.getState());
// });

  render() {
    const Previewbutton = styled.button`
  margin-top: 2%;
  margin-bottom: 2%;
    `;

/////////////////////////////////////
//////////// Reducer //////////////////
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

//////////////////////////////////////////////////////////////////////////////////
///////////////////// holds a complete tree of our state /////////////////////////
 //const store = createStore(todos, ['Use Redux', 'ewe']);

// const store = createStore(todos, JSON.stringify(this.state) );
//
// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// });


/// TODO notice we convert object into array of strings to save into store, to read it then we need to do reverse
/// now we saved current state into store, lets try to catch it from other platform like published

// console.log('next state', store.getState());

    return (
      <div style={{backgroundColor: 'darkred'}}>

        <botton className="btn btn-default" style={{color: 'blue', position: 'relative', right: '10px ', top: '18px', padding: '8px', backgroundColor: 'white' }}
          onClick={this.openModal}>Preview</botton>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            bsSize='lg'
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="panel panelDefault">

                <div style={{width: '20%', padding: '6px', margin: '2px 40%', backgroundColor: 'lightgrey', textAlign: 'center', color: 'black'}}>
                    {/* TODO preveiw the account we need below  */}
                   {/* <a href="./PublishForm">Publish</a> */}
                    Publish
                   {/* <a href="./PublishContactForm">Publish</a> */}
                </div>


                    {sessionStorage.setItem('myData', JSON.stringify(this.state.props))}
                    <DisplayForm  {...this.state.props} />

            </div>
          </Modal>

      </div>
    );
  }
}

export default Preview;
