import React from 'react';
import './Square.css';

const Square = (props) => {
    return(
        <div className="square">
            {props.value ? props.value : ''}
        </div>
    );
}

export default Square;