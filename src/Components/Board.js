import React from 'react';
import Square from './Square.js';

import './Board.css';

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="board">
                <div className="row-1">
                    <Square value={1}/>
                    <Square value={2}/>
                    <Square value={3}/>
                </div>
                <div className="row-2">
                    <Square value={4}/>
                    <Square value={5}/>
                    <Square value={6}/>
                </div>
                <div className="row-3">
                    <Square value={7}/>
                    <Square value={8}/>
                    <Square value={9}/>
                </div>
                
            </div>            
        );
    }
}

export default Board;