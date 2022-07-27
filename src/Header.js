import React from 'react';

class Header extends React.Component {
render() {
  return(

    <header> 
      <h1>Pizza of 301{this.props.pizzas}</h1>
    </header>
  );
}
}

export default Header;
