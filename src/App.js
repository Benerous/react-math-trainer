import React, { Component } from 'react';
import './App.css';
import Addition from './components/Addition';
import Substruction from './components/Substraction';
import Multiply from './components/Multiply';
import Division from './components/Division';
import Results from './components/Results'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  startTimer = this.startTimer.bind(this);
  stopTimer = this.stopTimer.bind(this);
  startMath = this.startMath.bind(this);
  // submitResult = this.submitResult.bind(this);
  state = {
    step: "main",
    time: 0,
    correct: 0,
    incorrect: 0,
    isOn: false,
    start: 0,
    expression: "",
    correctAnswerIndex: 0,
    answers : [],
    results: []
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
      correctAnswerIndex: 0,
      answers : []
    });
  };

  startMath() {
    const { correct, incorrect, isOn, step } = this.state;
    var firstVar = 0;
    var secondVar = 0;
    var min = 0;
    var max = 0;
    var temp = [];
    var r = 0;

    switch (step) {
      case "addition":
        if (correct + incorrect <= 10 || isOn === false) {
          firstVar = Math.floor(Math.random() * (10 - 1) + 1);
          secondVar = Math.floor(Math.random() * (10 - 1) + 1);
          min = firstVar + secondVar - 3;
          max = firstVar + secondVar + 3
        } else if (correct + incorrect >= 10 && correct + incorrect <= 25) {
          firstVar = Math.floor(Math.random() * (100 - 10) + 1);
          secondVar = Math.floor(Math.random() * (100 - 10) + 1);
          min = firstVar + secondVar - 15;
          max = firstVar + secondVar + 15;
        } else {
          firstVar = Math.floor(Math.random() * (1000 - 100) + 10);
          secondVar = Math.floor(Math.random() * (1000 - 100) + 10);
          min = firstVar + secondVar - 50;
          max = firstVar + secondVar + 50;
        };
        while(temp.length < 4){
          r = Math.floor(Math.random() * (max - min + 1)) + min;
          if(temp.indexOf(r) === -1) temp.push(r);
        };
        if (temp.indexOf(firstVar + secondVar) === -1) {
          temp[Math.floor(Math.random() * (4 - 1) + 1)] = firstVar + secondVar;
        };
        this.setState({
          isOn: true,
          expression: "" + firstVar + " + " + secondVar + " = ?",
          correctAnswerIndex: temp.indexOf(firstVar + secondVar),
          answers: temp
        });
          break;
      
      case "substraction":
        if (correct + incorrect <= 10 || isOn === false) {
          firstVar = Math.floor(Math.random() * (10 - 1) + 1);
          secondVar = Math.floor(Math.random() * (10 - 1) + 1);
          min = firstVar - secondVar - 3;
          max = firstVar - secondVar + 3
        } else if (correct + incorrect >= 10 && correct + incorrect <= 25) {
          firstVar = Math.floor(Math.random() * (100 - 10) + 1);
          secondVar = Math.floor(Math.random() * (100 - 10) + 1);
          min = firstVar - secondVar - 15;
          max = firstVar - secondVar + 15;
        } else {
          firstVar = Math.floor(Math.random() * (1000 - 100) + 10);
          secondVar = Math.floor(Math.random() * (1000 - 100) + 10);
          min = firstVar - secondVar - 50;
          max = firstVar - secondVar + 50;
        };
        while(temp.length < 4){
          r = Math.floor(Math.random() * (max - min + 1)) + min;
          if(temp.indexOf(r) === -1) temp.push(r);
        };
        if (temp.indexOf(firstVar - secondVar) === -1) {
          temp[Math.floor(Math.random() * (4 - 1) + 1)] = firstVar - secondVar;
        };
        this.setState({
          isOn: true,
          expression: "" + firstVar + " - " + secondVar + " = ?",
          correctAnswerIndex: temp.indexOf(firstVar - secondVar),
          answers: temp
        });
          break;

      case "multiply":
          if (correct + incorrect <= 15 || isOn === false) {
            firstVar = Math.floor(Math.random() * (10 - 1) + 1);
            secondVar = Math.floor(Math.random() * (10 - 1) + 1);
            min = firstVar * secondVar - 3;
            max = firstVar * secondVar + 3
          } else if (correct + incorrect >= 16 && correct + incorrect <= 25) {
            firstVar = Math.floor(Math.random() * (10 - 1) + 1);
            secondVar = Math.floor(Math.random() * (100 - 10) + 10);
            min = firstVar * secondVar - 3;
            max = firstVar * secondVar + 15;
          } else if (correct + incorrect >= 26 && correct + incorrect <= 32) {
            firstVar = Math.floor(Math.random() * (100 - 10) + 10);
            secondVar = Math.floor(Math.random() * (10 - 1) + 1);
            min = firstVar * secondVar - 15;
            max = firstVar * secondVar + 3;
          } else {
            firstVar = Math.floor(Math.random() * (100 - 10) + 10);
            secondVar = Math.floor(Math.random() * (100 - 10) + 10);
            min = firstVar * secondVar - 15;
            max = firstVar * secondVar + 15;
          };
          while(temp.length < 4){
            r = Math.floor(Math.random() * (max - min + 1)) + min;
            if(temp.indexOf(r) === -1) temp.push(r);
          };
          if (temp.indexOf(firstVar * secondVar) === -1) {
            temp[Math.floor(Math.random() * (4 - 1) + 1)] = firstVar * secondVar;
          };
          this.setState({
            isOn: true,
            expression: "" + firstVar + " * " + secondVar + " = ?",
            correctAnswerIndex: temp.indexOf(firstVar * secondVar),
            answers: temp
          });
          break;

      case "division":
          if (correct + incorrect <= 15 || isOn === false) {
              firstVar = Math.floor(Math.random() * (10 - 1) + 1);
              secondVar = Math.floor(Math.random() * (10 - 1) + 1);
              min = Math.round((firstVar / secondVar - 3) * 1000) / 1000;
              max = Math.round((firstVar / secondVar + 3) * 1000) / 1000
            } else if (correct + incorrect >= 16 && correct + incorrect <= 25) {
              firstVar = Math.floor(Math.random() * (10 - 1) + 1);
              secondVar = Math.floor(Math.random() * (100 - 10) + 10);
              min = Math.round((firstVar / secondVar - 3) * 1000) / 1000;
              max = Math.round((firstVar / secondVar + 15) * 1000) / 1000
            } else if (correct + incorrect >= 26 && correct + incorrect <= 32) {
              firstVar = Math.floor(Math.random() * (100 - 10) + 10);
              secondVar = Math.floor(Math.random() * (10 - 1) + 1);
              min = Math.round((firstVar / secondVar - 15) * 1000) / 1000;
              max = Math.round((firstVar / secondVar + 3) * 1000) / 1000
            } else {
              firstVar = Math.floor(Math.random() * (100 - 10) + 10);
              secondVar = Math.floor(Math.random() * (100 - 10) + 10);
              min = Math.round((firstVar / secondVar - 15) * 1000) / 1000;
              max = Math.round((firstVar / secondVar + 15) * 1000) / 1000
            };
            while(temp.length < 4){
              r = Math.round((Math.floor(Math.random() * (max - min + 1)) + min) * 1000) / 1000;
              if (r < 0) {
                r = r * (-1);
              }
              if(temp.indexOf(r) === -1) temp.push(r);
            };
            if (temp.indexOf(Math.round((firstVar / secondVar) * 1000) / 1000) === -1) {
              temp[Math.floor(Math.random() * (4 - 1) + 1)] = Math.round((firstVar / secondVar) * 1000) / 1000;
            };
            this.setState({
              isOn: true,
              expression: "" + firstVar + " / " + secondVar + " = ?",
              correctAnswerIndex: temp.indexOf(Math.round((firstVar / secondVar) * 1000) / 1000),
              answers: temp
            });
          break;

        default:
          break;
    };
  };

  startTimer() {
    this.setState({
      time: 0,
      start: Date.now() - this.state.time,
      correct: 0,
      incorrect: 0,
      isOn: true
    });
    this.timer = setInterval(() => this.setState({
      time: Math.floor((Date.now() - this.state.start)/1000)
    }), 1000);
    this.startMath();
  };

  stopTimer() {
    if (this.state.isOn) {
      this.submitResult();
    };
    this.setState({
      isOn: false
    });
    clearInterval(this.timer);
  };

  submitResult = () => {
    const { time, correct, incorrect, step, results } = this.state;
    results.push({
      resultTime: time,
      resultCorrect: correct,
      resultIncorrect: incorrect,
      resultType: step
    });
  };

  handleSubmit = (e) => {
    const { correct, incorrect, correctAnswerIndex } = this.state;
    e.preventDefault();
    if (correctAnswerIndex === e.target.value) {
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

  clearResults = (e) => {
    e.preventDefault();
    this.setState({
      results: []
    });
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
                  className="btn btn-lg btn-outline-primary py-md-3 py-2 my-5 w-75">
                  Math trainer
                </button>
                <br />
                <button 
                  className="btn btn-success mx-auto my-2 py-md-3 py-2 w-50" 
                  onClick={this.selectStep} 
                  value="addition">
                  + Addition +
                </button>
                <br />
                <button 
                  className="btn btn-info mx-auto my-2 py-md-3 py-2 w-50" 
                  onClick={this.selectStep} 
                  value="substraction">
                  - Substraction -
                </button>
                <br />
                <button 
                  className="btn btn-warning mx-auto my-2 py-md-3 py-2 text-white w-50" 
                  onClick={this.selectStep} 
                  value="multiply">
                  * Multiplication *
                </button>
                <br />
                <button 
                  className="btn btn-danger mx-auto my-2 py-md-3 py-2 w-50" 
                  onClick={this.selectStep} 
                  value="division">
                  / Division /
                </button>
                <br />
                <button 
                  className="btn btn-dark mx-auto my-2 py-md-3 py-2 w-25" 
                  onClick={this.selectStep} 
                  value="results">
                  Results 
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
              correctAnswerIndex={this.state.correctAnswerIndex}
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
              isOn={this.state.isOn}
              time={this.state.time}
              expression={this.state.expression}
              correctAnswerIndex={this.state.correctAnswerIndex}
              answers={this.state.answers}
              correct={this.state.correct}
              incorrect={this.state.incorrect}
              selectStep={this.selectStep}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              handleSubmit={this.handleSubmit}
            />
          )
      case "multiply":
          return (
            <Multiply 
              isOn={this.state.isOn}
              time={this.state.time}
              expression={this.state.expression}
              correctAnswerIndex={this.state.correctAnswerIndex}
              answers={this.state.answers}
              correct={this.state.correct}
              incorrect={this.state.incorrect}
              selectStep={this.selectStep}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              handleSubmit={this.handleSubmit}
            />
          )
      case "division":
          return (
            <Division
              isOn={this.state.isOn}
              time={this.state.time}
              expression={this.state.expression}
              correctAnswerIndex={this.state.correctAnswerIndex}
              answers={this.state.answers}
              correct={this.state.correct}
              incorrect={this.state.incorrect}
              selectStep={this.selectStep}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              handleSubmit={this.handleSubmit}
            />
          )
      case "results":
        return (
          <Results 
            selectStep={this.selectStep}
            results={this.state.results}
            clearResults={this.clearResults}
          />
        );
      default:
        return <h1>Success</h1>;
    };
  };
};

export default App;