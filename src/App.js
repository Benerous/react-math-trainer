import React, { Component } from 'react';
import './App.css';
import Addition from './components/Addition';
import Substruction from './components/Substraction';
import Multiply from './components/Multiply';
import Division from './components/Division';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    step: "start"
  };

  selectStep = (e) => {
    this.setState({
      step: e.target.value
    });
  };

  render() {
    switch (this.state.step) {
      case "start":
          return (
            <div className="container">
              <div className="text-center">
                <button 
                  onClick={this.selectStep} 
                  value="start" 
                  className="btn btn-lg btn-outline-primary my-5 w-50">
                  Math trainer
                </button>
                <br />
                <button 
                  className="btn btn-outline-dark mx-auto my-2 w-25" 
                  onClick={this.selectStep} 
                  value="addition">
                  Addition
                </button>
                <br />
                <button 
                  className="btn btn-outline-dark mx-auto my-2 w-25" 
                  onClick={this.selectStep} 
                  value="substraction">
                  Substraction
                </button>
                <br />
                <button 
                  className="btn btn-outline-dark mx-auto my-2 w-25" 
                  onClick={this.selectStep} 
                  value="multiply">
                  Multiply
                </button>
                <br />
                <button 
                  className="btn btn-outline-dark mx-auto my-2 w-25" 
                  onClick={this.selectStep} 
                  value="division">
                  Division
                </button>
                <br />
              </div>
            </div>
          );
      case "addition":
          return (
            <Addition 
              selectStep={this.selectStep}
            />
          )
      case "substraction":
          return (
            <Substruction 
              selectStep={this.selectStep}
            />
          )
      case "multiply":
          return (
            <Multiply 
              selectStep={this.selectStep}
            />
          )
      case "division":
          return (
            <Division 
              selectStep={this.selectStep}
            />
          )
      default:
          return <h1>Success</h1>;
    };
  };
};

export default App;