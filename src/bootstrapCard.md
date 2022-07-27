# add at end of demo

```js


<Col className="mt-4">
    <Card className="h-100 p-3">
      <Card.Title onClick={this.handleHeadlineClick} >{this.props.pizzaName}</Card.Title>
            <Card.Img 
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
       </Card> 
</Col>
```

```js

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

```
