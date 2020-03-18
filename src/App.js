import React, { Component } from 'react';
import './App.css';
import Addition from './components/Addition';
import Substruction from './components/Substraction';
import Multiply from './components/Multiply';
import Division from './components/Division';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  startTimer = this.startTimer.bind(this);
  stopTimer = this.stopTimer.bind(this);
  state = {
    step: "main",
    time: 0,
    correct: 0,
    incorrect: 0,
    isOn: false,
    start: 0,
    expression: "",
    correctAnswer: 0,
    answers : []
  };

  selectStep = (e) => {
    this.stopTimer();
    this.setState({
      step: e.target.value,
      time: 0,
      correct: 0,
      incorrect: 0,
      isOn: false,
      start: 0,
      expression: "",
      correctAnswer: 0,
      answers : []
    });
  };

  startMath() {
    const { correct, incorrect } = this.state;
    var firstVar = 0;
    var secondVar = 0;
    var min = 0;
    var max = 0;
    if (correct + incorrect <= 10) {
      firstVar = Math.floor(Math.random() * (10 - 1) + 1);
      secondVar = Math.floor(Math.random() * (10 - 1) + 1);
      min = firstVar + secondVar - 3;
      max = firstVar + secondVar + 3
    } else if (correct + incorrect >= 10 && correct + incorrect <= 25) {
      firstVar = Math.floor(Math.random() * (100 - 1) + 1);
      secondVar = Math.floor(Math.random() * (100 - 1) + 1);
      min = firstVar + secondVar - 15;
      max = firstVar + secondVar + 15;
    } else {
      firstVar = Math.floor(Math.random() * (1000 - 1) + 1);
      secondVar = Math.floor(Math.random() * (1000 - 1) + 1);
      min = firstVar + secondVar - 50;
      max = firstVar + secondVar + 50;
    };
    const temp = [];
    while(temp.length < 4){
      var r = Math.floor(Math.random() * (max - min + 1)) + min;
      if(temp.indexOf(r) === -1) temp.push(r);
    };
    if (temp.indexOf(firstVar + secondVar) === -1) {
      temp[Math.floor(Math.random() * (4 - 1) + 1)] = firstVar + secondVar;
    };

    this.setState({
      isOn: true,
      expression: "" + firstVar + " + " + secondVar + " = ?",
      correctAnswer: firstVar + secondVar,
      answers: temp
    });
  };

  startTimer() {
    this.startMath();
    this.setState({
      time: 0,
      start: Date.now() - this.state.time,
      correct: 0,
      incorrect: 0
    });
    this.timer = setInterval(() => this.setState({
      time: Math.floor((Date.now() - this.state.start)/1000)
    }), 1000);
  };

  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  };

  handleSubmit = (e) => {
    const { correct, incorrect } = this.state;
    e.preventDefault();
    if (this.state.correctAnswer === e.target.value) {
      this.setState({
        correct: correct + 1
      });
    } else {
      this.setState({
        incorrect: incorrect + 1
      });
    };
    this.startMath();
  };

  render() {
    switch (this.state.step) {
      case "main":
          return (
            <div className="container">
              <div className="text-center">
                <button 
                  onClick={this.selectStep} 
                  value="main" 
                  className="btn btn-lg btn-primary my-5 w-50">
                  Math trainer
                </button>
                <br />
                <button 
                  className="btn btn-outline-success mx-auto my-2 w-50" 
                  onClick={this.selectStep} 
                  value="addition">
                  Addition
                </button>
                <br />
                <button 
                  className="btn btn-outline-info mx-auto my-2 w-50" 
                  onClick={this.selectStep} 
                  value="substraction">
                  Substraction
                </button>
                <br />
                <button 
                  className="btn btn-outline-warning mx-auto my-2 w-50" 
                  onClick={this.selectStep} 
                  value="multiply">
                  Multiply
                </button>
                <br />
                <button 
                  className="btn btn-outline-danger mx-auto my-2 w-50" 
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
              isOn={this.state.isOn}
              time={this.state.time}
              expression={this.state.expression}
              correctAnswer={this.state.correctAnswer}
              answers={this.state.answers}
              correct={this.state.correct}
              incorrect={this.state.incorrect}
              selectStep={this.selectStep}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              handleSubmit={this.handleSubmit}
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