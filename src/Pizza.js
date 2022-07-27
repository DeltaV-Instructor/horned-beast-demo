import React from 'react';
// import { Card, Col, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Pizza.css';

class Pizza extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      pizzaNeed: false
    };
  }

  handleLikes = () => {
    console.log('we here!');
    this.setState({
      likes: this.state.likes + 1,
    });
  }
  pizzaNeeded = () => {
    this.setState({
      pizzaNeed: true
    });
  }

  pizzaGot = () => {
    this.setState({
      pizzaNeed: false
    });
  }

  // so lets use a helper function to avoid breaking our site. 
  handleHeadlineClick = () => {
    // this.props.handleOnShowModal('Larry')
    this.props.handleOnShowModal(this.props.pizzaName)
  };

  
  render() {
    // console.log(this.props);
    // console.log('LIkes?',this.state.likes);
    return (

<article>
        {/* 
        This will not work. 
        <h3 onClick={this.props.handleOnShowModal('Larry')} >{this.props.pizzaName}</h3> 
        as soon as it was loaded it was invoked and were in a loop yikes. 
        so we create a helper function. 
        */}
        <h3 onClick={this.handleHeadlineClick} >{this.props.pizzaName}</h3>
        <img 
          src={this.props.image_URL}
          alt={this.props.pizzaName} 
          // add pizza on image click here 
          onClick={this.props.addPizza}
        />
        <p>{this.state.likes} Likes!</p>
        <p onClick={this.handleLikes}>Click to Like this Pizza?</p>
        <div>{this.state.pizzaNeed ? 'I need Pizza' : ''}</div>
        <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>I got some Pizza!</Button>
      </article>

      

    )
  }
}

export default Pizza;
