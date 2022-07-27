import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';


class App extends React.Component{

// first lets add constructor
constructor(props){
  // built into class components for and how they work calling in all the things passed in
  super(props);
    this.state = {
      // how do we pass state to another component? through props.
      pizza: '',
      //add state for modal
      //1. modal
      // showModal: true
      showModal: false,
      selectedPizza: ''
    
  };
};

// Now lets create an event handler to add pizzas
addPizza = () => {
  // everytime a click event happens I want to add more hearts 
  this.setState({
    pizza: this.state.pizza + '🍕'
  });
};




handleOnHide = () => {
  this.setState({
    showModal: false
  });
};


// so we still need a method to open the modal DO first then update with modal data
// handleOnShowModal = () => {
//   this.setState({
//     showModal: true
//   });
// };
// in pizza how do we get this data back? 
handleOnShowModal = (name) => {
  this.setState({
    showModal: true,
    selectedPizza: name
  });
};





render() {
  return (
    <>
    {/* TEST the modal working  */}
    {/* <p onClick={this.handleOnShowModal}>Open</p> */}

    <Header pizzas={this.state.pizza} />

    <Main   
      addPizza={this.addPizza}
      data={data} 
      handleOnShowModal={this.handleOnShowModal}
      />

    <footer>DeltaV, 2022</footer>

   {/* this is where our selectedBeast component code will go  */}
    <Modal  show={this.state.showModal}  onHide={this.handleOnHide} >

        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}

        {/* then with data */}

        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedPizza}</Modal.Title>
        </Modal.Header>


    </Modal>




     </>
  );
 }
}

export default App;