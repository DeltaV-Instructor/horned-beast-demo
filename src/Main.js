import React from 'react';
import Pizza from './Pizza.js';
import './Main.css';
// object deconstruction 
import { Container, Row } from 'react-bootstrap';


class Main extends React.Component {
  render () {
    // let pizzas = [];
    let pizzas = this.props.data.map((newPizza, index) => {
      // pizzas.push(
        // return to escape code block 
     return <Pizza
       pizzaName={newPizza.name} 
       key={index}
       image_URL={newPizza.imageURL}
       addPizza={this.props.addPizza}
       handleOnShowModal={this.props.handleOnShowModal}

      />
      // )
    });



  //  see the function from app.js 
    console.log('props from app.js',this.props);
    return(

      <main> 
         <Container>
          {/* show then customize the row  */}
           <Row lg={4} md={3} sm={2} xs={1}>
           {/* add column in pizza  */}
            {pizzas}
           </Row>
        </Container>
      </main>
    );
  }
}

export default Main;