import React, { Component } from 'react';
import Answer from './Answer.jsx';
import Selected from './Selected.jsx';

class Game extends Component {
    state = {
        selectedNum: [],
        numList: [1, 2, 3, 4, 5, 6, 7]
    };

    render() {
        return (
            <div className="App">
                <Answer numList={this.state.numList} />
                <Selected selectedNum={this.state.selectedNum} />
            </div>
        );
    }
}

export default Game;
