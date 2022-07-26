import React from 'react';
import Pizza from './Pizza.js';
import './Main.css';
import Data from './data.json';

class Main extends React.Component {
  render () {
    //How do we get data out of our json.
    console.log('json data', Data);
    //do some js stuff before we return so lets build our component here
    let pizzas = [];
    Data.forEach((newPizza) => {
      pizzas.push(<Pizza pizzaName={newPizza.name}  image_URL={newPizza.imageURL}/>)
    });


      console.log('pizza components? ',pizzas)






    return(

      <main> 
      {/* <Pizza pizzaName="Detroit"  />
      <Pizza pizzaName="New York Thin"  />
      <Pizza pizzaName="Chicago Deep Dish"/>
      <Pizza pizzaName="Oven Grinder"/>
      <Pizza pizzaName="Brick Oven"/>
      <Pizza pizzaName="Calzone"/> */}
      {pizzas}

      </main>
    );
  }
}

export default Main;