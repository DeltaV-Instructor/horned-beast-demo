import React from 'react';
import Pizza from './Pizza.js';
import './Main.css';

class Main extends React.Component {
  render () {
    return(

      <main> 
      <Pizza pizzaName="Detroit"  />
      <Pizza pizzaName="New York Thin"  />
      <Pizza pizzaName="Chicago Deep Dish"/>
      <Pizza pizzaName="Oven Grinder"/>
      <Pizza pizzaName="Brick Oven"/>
      <Pizza pizzaName="Calzone"/>
      </main>
    );
  }
}

export default Main;