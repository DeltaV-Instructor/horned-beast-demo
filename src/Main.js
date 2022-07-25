import React from 'react';
import Pizza from './Pizza.js';


class Main extends React.Component {
  render () {
    return(

      <main> 
      <Pizza  pie="Detroit" toppings="Cheese" crust="Detroit Style" />
      <Pizza  pie="Detroit" toppings="Cheese" crust="Detroit Style" />

      <Pizza  pie="Detroit" toppings="Cheese" crust="Detroit Style" />

      <Pizza  pie="Detroit" toppings="Cheese" crust="Detroit Style" />

      <Pizza  pie="Detroit" toppings="Cheese" crust="Detroit Style" />

      </main>
    );
  }
}

export default Main;