import React from 'react'

class Div extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'coral',
    }
    this.changeColor = this.changeColor.bind(this)
    this.generateColor = this.generateColor.bind(this)

  }

  generateColor() {
    return '#' + Math.random().toString(16).substr(-6);
  }

  changeColor(){
    var color = this.generateColor();
    this.setState({
      backgroundColor: color,
    }) 
  }

  render() {
    return(
      <div className="div" style={{backgroundColor: this.state.backgroundColor}}>
        <h1>Hello World!</h1>
        <button onClick={this.changeColor}>Change Color</button>
    </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="board">
        <Div />
        <Div />
        <Div />
        <Div />
        <Div />
      </div>
    )
  }
}

export default App