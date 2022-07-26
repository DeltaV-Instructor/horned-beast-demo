import React from 'react';

class Pizza extends React.Component {
  render() {
    console.log(this.props);
    return (

   
      <article>
        <h3>{this.props.pizzaName}</h3>
        <p>Is this your favorite pizza</p>
      </article>
    )
  }
}

export default Pizza;
