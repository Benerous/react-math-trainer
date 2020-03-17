import React, { Component } from 'react'

export default class Addition extends Component {
    render() {
        const { selectStep } = this.props;
        return (
            <div className="container text-center">
                <button 
                    onClick={selectStep} 
                    value="start" 
                    className="btn btn-lg btn-outline-primary my-5 w-50">
                    Math trainer
                </button>
            </div>
        )
    }
}
