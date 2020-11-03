import React from 'react';

import "./StyleSheets/PickSide.css";
import O from './Icons/o.svg';
import x_mark from './Icons/x-mark.svg';

export const PickSide = (props) => {
    return(
        <div className="pickside-container">
            <h1>Pick your side</h1>
            <div className="marker-icons">
                <div className="marker-1">
                    <img src={x_mark} alt="x-marker"/>
                    <input type="radio"/>
                </div>
                
                <div className="marker-2">
                    <img src={O} alt="o-marker"/>
                    <input type="radio"/>
                </div>
                
            </div>
            <button>Continue</button>
        </div>
        
    );
}