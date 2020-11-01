import React from 'react';
import Square from './Square.js';

import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isX: true
        }

        this.togglePlayerMarker = this.togglePlayerMarker.bind(this);
    }

    togglePlayerMarker() {
        this.setState((state) => state.isX ? {isX: false} : {isX: true});
    }

    render() {

        return (
            <div>
            <h1> Tic-Tac-Toe </h1>  
            <span> Current player: </span>
            <div className="board">
                <div className="row-1">
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                </div>
                <div className="row-2">
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                </div>
                <div className="row-3">
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                    <Square value={this.state.isX} onClick={this.togglePlayerMarker} />
                </div>

            </div>
            </div>
        );
    }
}

export default Board;