import React from 'react';
import Square from './Square.js';

import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isX: true,
            boardState: new Array(9).fill(null)
        }

        this.togglePlayerMarker = this.togglePlayerMarker.bind(this);
        this.renderSquare = this.renderSquare.bind(this);
    }

    togglePlayerMarker(i) {
        const square = this.state.boardState.slice();
        let isXVal = this.state.isX;

        if(square[i]){
            return;
        }
        if(this.state.isX){
            square[i] = 'X';
            isXVal=false;
        } else{
            square[i] = 'O';
            isXVal=true;
        }
        
        this.setState({boardState: square, isX: isXVal});
    }

    renderSquare(i){
        return(
            <Square value={this.state.boardState[i]} onClick={()=>this.togglePlayerMarker(i)} />
        );
    }

    render() {

        return (
            <div>
            <h1> Tic-Tac-Toe </h1>  
            <span> Current player: {this.state.isX ? 'X' : 'O' }</span>
            <div className="board">
                <div className="row-1">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row-2">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row-3">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

            </div>
            </div>
        );
    }
}

export default Board;