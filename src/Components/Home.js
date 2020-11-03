import React from 'react';
import O from './Icons/o.svg';
import x_mark from './Icons/x-mark.svg';

import "./StyleSheets/Home.css";

export const Home = (props) => {
    return(
        <div className="home-container">
            <div className="marker-icons">
                <img src={x_mark} alt="x-marker"/>
                <img src={O} alt="o-marker"/>
            </div>
            <h2> Choose your playmode </h2>
            <div className="pick-side-buttons">
                <button>
                    With AI
                </button>
                <button>
                    With a friend
                </button>
            </div>

        </div>
    );
}
