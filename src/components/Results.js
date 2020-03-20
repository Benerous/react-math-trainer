import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        const { selectStep, results, clearResults } = this.props;
        return (
            <div className="container text-center">
                <button 
                    onClick={selectStep} 
                    value="main" 
                    className="btn btn-lg btn-outline-primary my-5 py-md-3 py-2 w-50">
                    Math trainer
                </button>
                <br />
                <h3 className="text-primary">Results</h3>
                <br />
                <div className="row my-3 border-bottom">
                    <h5 className="col-1 text-dark">
                        #
                    </h5>
                    <h5 className="col-3 text-primary">
                        Type
                    </h5>
                    <h5 className="col-2 text-info">
                        Time
                    </h5>
                    <h5 className="col-3 text-success">
                        Correct
                    </h5>
                    <h5 className="col-3 text-danger">
                        Incorrect
                    </h5>
                    <br />
                </div>
                {results.map((item, index) => {
                    return (
                        <div className="row my-3 border-bottom">
                            <h6 className="col-1 text-dark">
                                {[index + 1]}
                            </h6>
                            <h6 className="col-3 text-primary">
                                {item.resultType}
                            </h6>
                            <h6 className="col-2 text-info">
                                {item.resultTime} sec
                            </h6>
                            <h6 className="col-3 text-success">
                                {item.resultCorrect}
                            </h6>
                            <h6 className="col-3 text-danger">
                                {item.resultIncorrect}
                            </h6>
                        </div>
                    );
                })}
                <button onClick={clearResults} className={results.length !== 0 ? "btn btn-danger mb-5 py-md-3 py-2 mt-4 w-25" : "invisible"}>Clear</button>
            </div>
        );
    };
};