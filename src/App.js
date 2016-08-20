import React, { Component } from 'react';
import './App.css';

import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  // Called only once after render DOM
  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  // this.setState(...) => render()

  render() {
    return (
      <div className="App">
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
