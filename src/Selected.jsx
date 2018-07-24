import React, { Component } from 'react';

class Selected extends Component {
    render() {
        return (
            <div className="App">
                {this.props.selectedNum.map((num, i) => <span key={i}>{num}</span>)}
            </div>
        );
    }
}

export default Selected;
