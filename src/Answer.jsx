import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div className="App">
                {this.props.numList.map((num, i) => <span key={i}>{num}</span>)}
            </div>
        );
    }
}

export default Answer;
