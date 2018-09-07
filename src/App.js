import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { testOne, testTwo } from './actions';

class App extends Component {
  clickHandler = () => {
    this.props.dispatch(testOne());
    this.props.dispatch(testTwo('dakota'));
  };
  componentDidMount = async () => {
    const cards = await fetch('aldskjfaslfd.com');
    this.props.dispatch(initCards(cards));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.clickHandler}>Click to dispatch TEST 1</button>
        <h1>Current Test Value: {this.props.test}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    butts: state.main.butts,
    test: state.main.test,
  };
};

export default connect(mapStateToProps)(App);
