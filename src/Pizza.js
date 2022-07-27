import React from 'react';
import Button from 'react-bootstrap/Button';

class Pizza extends React.Component {

//create constructor function
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      pizzaNeed: false
    };
    

  }


//create some arrow functions
handleLikes = () => {
  console.log('we here!');
  this.setState({
    likes: this.state.likes + 1,
    // bananas: 'Thats bananas'
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












  render() {
    console.log(this.props);
    console.log('LIkes?',this.state.likes);
    return (

   
      <article>
        <h3>{this.props.pizzaName}</h3>
        <img src={this.props.image_URL}  alt={this.props.pizzaName} />
        <p>{this.state.likes} Likes!</p>
        <p onClick={this.handleLikes}>Click to Like this Pizza?</p>
        {/* <p>{this.state.bananas}</p> */}


       

        {/* conditional rendering for our button */}
        {/* message to appear if pizza is awesome or you need it */}
        {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        if(boolean){
          true
        } else {
          false
        }
        */}


        {/* Ternary operator */}

        {/* 2 buttons */}
        <div>{this.state.pizzaNeed ? 'I need Pizza' : ''}</div>
        <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>I got some Pizza!</Button>
      </article>
    )
  }
}

export default Pizza;
