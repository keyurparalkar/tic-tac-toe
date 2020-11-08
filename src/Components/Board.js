import React from 'react';
import {connect} from 'react-redux';


import Square from './Square.js';
import './StyleSheets/Board.css';
import reset_icon from './Icons/update-arrow.svg';
import O from './Icons/o.svg';
import x_mark from './Icons/x-mark.svg';
import {setMarkerOnBoard, clearBoard, initScoreBoard, updateScoreBoard} from './Store/ActionCreators.js';

const mapStateToProps = (state) => {
    return {
        isX: state.isX,
        boardState: state.boardState,
        currentPlayerName: state.currentPlayerName,
        opponentName: state.opponentName,
        marker: state.marker,
        aiSteps: state.aiSteps,
        scoreBoard: state.scoreBoard
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score:''
        }

        this.togglePlayerMarker = this.togglePlayerMarker.bind(this);
        this.renderSquare = this.renderSquare.bind(this);
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
        this.computerTurn = this.computerTurn.bind(this);
        this.handleResetBoard = this.handleResetBoard.bind(this);

        this.scoreRef = React.createRef();

    }

    handleResetBoard() {
        this.props.dispatch(clearBoard());
    }

    togglePlayerMarker(i) {
        const square = this.props.boardState.slice();
        let isXVal = this.props.isX;
        let aiTurn = this.props.aiSteps;

        if (this.calculateWinner(square) || square[i]) {
            return;
        }
        if (this.props.isX) {
            square[i] = 'X';
            isXVal = false;
            aiTurn = false;
        } else {
            square[i] = 'O';
            isXVal = true;
            aiTurn = true;
        }

        if(this.props.opponentName === 'AI'){
            this.props.dispatch(setMarkerOnBoard(square, isXVal, aiTurn));
        }else{
        this.props.dispatch(setMarkerOnBoard(square, isXVal));
        // this.setState({ boardState: square, isX: isXVal });
        }
    }

    renderSquare(i) {
        return (
            <Square value={this.props.boardState[i]===null ? this.props.boardState[i] : 
                this.props.boardState[i]==='X' ? <img src={x_mark} alt="x-mark" className="board-x-mark"/> : <img src={O} alt="o-mark" className="board-o-mark"/>}
            
            onClick={() => this.togglePlayerMarker(i)} />
        );
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            let [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    generateRandomNumber(min, max) {
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num === 0 ? this.generateRandomNumber(min, max) : num;
    }

    computerTurn() {
        //Getting blank array pos:
        let blank_pos = this.props.boardState.map((val, index) => val === null ? index : 0).filter((val) => val !== 0);
        let min_pos = blank_pos[0];
        let max_pos = blank_pos[blank_pos.length - 1];
        //Generate random number
        let num = this.generateRandomNumber(min_pos, max_pos);

        return num;
    }

    componentDidMount(){
        let tempScore = {};
        tempScore[`${this.props.currentPlayerName}`] = [];
        tempScore[`${this.props.opponentName}`] = [];
        this.props.dispatch(initScoreBoard(tempScore));
    }

    componentDidUpdate() {
        if (this.props.opponentName === 'AI') {
            if(this.props.marker === 'X' && this.props.aiSteps === false){
                let x = this.computerTurn();
                this.togglePlayerMarker(x);
            }else  if(this.props.marker === 'O' && this.props.aiSteps === true) {
                let x = this.computerTurn();                
                this.togglePlayerMarker(x);
            }
        }

        const winner = this.calculateWinner(this.props.boardState);        
        if(winner){
            if(winner === this.props.marker){
                this.props.dispatch(updateScoreBoard(this.props.currentPlayerName, winner))
            }else{
                this.props.dispatch(updateScoreBoard(this.props.opponentName, winner))
            }                
        }

        let currPlayerScore = this.props.scoreBoard[this.props.currentPlayerName] !== undefined ? this.props.scoreBoard[this.props.currentPlayerName].length > 0 ? this.props.scoreBoard[this.props.currentPlayerName].length:0:0;
        let oppoPlayerScore = this.props.scoreBoard[this.props.opponentName] !== undefined ? this.props.scoreBoard[this.props.opponentName].length > 0 ? this.props.scoreBoard[this.props.opponentName].length:0:0;
        let score = `<span>${currPlayerScore} - ${oppoPlayerScore}</span>`;
        // this.setState({score:score})
        this.scoreRef.current.innerHTML = score;
        console.log("SCORE INNER = ",this.scoreRef.current.innerHTML)
    }

    render() {
        const winner = this.calculateWinner(this.props.boardState);        
        let status = null;
        let opponentMarker = null;

        if(winner){
            if(winner === this.props.marker){
                status = `Winner: ${this.props.currentPlayerName}`;
            }else{
                status = `Winner: ${this.props.opponentName}`;
            }                
        }else if(winner===null && !this.props.boardState.includes(null)){
            status = 'Draw!!'
        } else if(this.props.isX){
            status = `Current Player: X`;
        } else {
            status = `Current Player: O`;
        }
        

        if(this.props.marker === 'X')
            opponentMarker = 'O';
        else if(this.props.marker === 'O')
            opponentMarker = 'X';

        return (
            <div className="board-container">
                <div className="score-board">
                    <span className="player-names">{this.props.currentPlayerName}<br/>
                        {this.props.marker}
                    </span>
                    <div className="score" ref={this.scoreRef}>                        
                    </div>
                    <span className="player-names">{this.props.opponentName}<br/>
                        {opponentMarker}
                    </span>
                </div>
                <span className="game-status">{status}</span>
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

                
                <img src={reset_icon} alt="reset-icon" className="reset-icon" onClick={this.handleResetBoard} />
                
            </div>
        );
    }
}


export default connect(mapStateToProps)(Board)