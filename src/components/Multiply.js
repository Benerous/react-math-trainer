import React, { Component } from 'react';

export default class Multiply extends Component {
    render() {
        const { 
            handleSubmit, 
            selectStep, 
            startTimer, 
            stopTimer, 
            time, 
            isOn, 
            expression,
            answers, 
            correct, 
            incorrect} = this.props;
        return (
            <div className="container text-center">
                <button 
                    onClick={selectStep} 
                    value="main" 
                    className="btn btn-lg btn-outline-primary my-5 py-md-3 py-2 w-50">
                    Math trainer
                </button>
                <br />
                {isOn ? <button 
                            onClick={stopTimer} 
                            value="stop" 
                            className="btn btn-danger mb-5 py-md-3 py-2 w-25">
                            Stop
                        </button>
                        :
                        <button 
                            onClick={startTimer} 
                            value="start" 
                            className="btn btn-success mb-5 py-md-3 py-2 w-25">
                            Start
                        </button>
                }
                {isOn || expression === "" ? 
                <div className="row">
                    <div className="col-4 text-info">
                        <h4>Sec: {time}</h4>
                    </div>
                    <h5 className="col-4 text-success">
                        {correct}<i className="m-1 fa fa-check" />
                    </h5>
                    <h5 className="col-4 text-danger">
                        {incorrect}<i className="m-1 fa fa-times" />
                    </h5>
                    <h3 className="col-12 text-center text-dark my-5">{expression}</h3>
                    <div className="col-12">
                        <div className="list-group">
                            {answers.map((item, index) => 
                            <li className="list-group-item list-group-item-action" onClick={handleSubmit} value={index}>{item}</li>)}
                        </div>
                    </div>
                </div> 
                :
                <div className="row">
                    <h3 className="col-3 text-primary">
                        Result:
                    </h3>
                    <h4 className="col-3 text-info">
                        {time}<i className="m-1 fa fa-clock" />
                    </h4>
                    <h4 className="col-3 text-success">
                        {correct}<i className="m-1 fa fa-check" />
                    </h4>
                    <h4 className="col-3 text-danger">
                        {incorrect}<i className="m-1 fa fa-times" />
                    </h4>
                </div>
                }
            </div>
        );
    };
};
