import React from 'react';

import "./StyleSheets/PickSide.css";
import O from './Icons/o.svg';
import x_mark from './Icons/x-mark.svg';

export class PickSide extends React.Component {
    constructor(props){
        super(props);

        this.state={
            radioSelect:null
        };

        this.handleRadioClick = this.handleRadioClick.bind(this);
        this.radio1 = React.createRef();
        this.radio2 = React.createRef();
        this.marker1 = React.createRef();
        this.marker2 = React.createRef();

    }

    handleRadioClick(event){
        if(event.currentTarget === this.radio1.current){
            this.marker1.current.style.opacity = 1;
            this.marker2.current.style.opacity = 0.5;
        } else if(event.currentTarget === this.radio2.current){
            this.marker2.current.style.opacity = 1;
            this.marker1.current.style.opacity = 0.5
        }
    }

    render() {

        return(
        <div className="pickside-container">
            <h1>Pick your side</h1>
            <div className="marker-icons">
                <div className="marker-1">
                    <img src={x_mark} alt="x-marker" ref={this.marker1}/>
                    <input name="pickSide-radiogroup" type="radio" ref={this.radio1} onClick={this.handleRadioClick}/>
                </div>

                <div className="marker-2">
                    <img src={O} alt="o-marker" ref={this.marker2}/>
                    <input name="pickSide-radiogroup" type="radio" ref={this.radio2} onClick={this.handleRadioClick}/>
                </div>

            </div>
            <button>Continue</button>
        </div>)
    }
}
