import React from 'react';
import './Square.css';

const Square = (props) => {
    return(
        <div className="square" onClick={()=>props.onClick()}>
            {props.value ? 'X' : 'O'}
        </div>
    );
}

export default Square;