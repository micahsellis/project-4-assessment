import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 0
    }
  }

  circles = [0,1,2,3]

  handleClick = (idx) => {
    this.setState({ current: idx })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            handleClick={this.handleClick}
            circles={this.circles}
            current={this.state.current}
          />
          <Circles
            circles={this.circles}
            current={this.state.current}
          />
        </main>
      </div>
    );
  }
}

export default App;