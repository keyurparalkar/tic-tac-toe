import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import O from './Icons/o.svg';
import x_mark from './Icons/x-mark.svg';
import "./StyleSheets/Home.css";
import { setPlayMode,setPlayerName } from "./Store/ActionCreators.js";

const mapStateToProps = (state) => {
    return {
        playMode: state.playMode,
        opponentName: state.opponentName,
        currentPlayerName: state.currentPlayerName
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlayMode = this.handlePlayMode.bind(this);
        this.submitopponentName = this.submitopponentName.bind(this);
        this.setCurrentPlayerName = this.setCurrentPlayerName.bind(this);
        this.opponentOptions = React.createRef();
        this.playModeContainer = React.createRef();
        this.nameContainer = React.createRef();
    }

    handlePlayMode(event) {
        if (event.target.innerText.indexOf('AI') > -1) {
            this.props.dispatch(setPlayMode('AI', 'AI'));
        } else {
            this.opponentOptions.current.style.display = 'block';

        }
    }

    setCurrentPlayerName(event){
        this.props.dispatch(setPlayerName(this.nameContainer.current.children[1].value));
        this.nameContainer.current.style.display = 'none';
        this.playModeContainer.current.style.display = 'flex';
        this.playModeContainer.current.style.flexDirection = 'column';
        this.playModeContainer.current.style.alignItems = 'center';
    }

    submitopponentName() {
        this.props.dispatch(setPlayMode('friend', this.opponentOptions.current.children[1].value));
    }

    render() {

        return (
            <div className="home-container">
                <div className="marker-icons">
                    <img src={x_mark} className="x-marker" alt="x-marker" />
                    <img src={O} className="o-marker" alt="o-marker" />
                </div>

                <div className="enter-name-container" ref={this.nameContainer}>
                    <label><h2>Enter your name</h2></label>
                    <input type="text"/>
                    <button onClick={this.setCurrentPlayerName}>Submit</button>
                </div>

                <div className="playmode-container" ref={this.playModeContainer}>
                    <h2> Choose your playmode </h2>
                    <div className="pick-player-buttons">
                        <Link to="/pickSide">
                            <button onClick={this.handlePlayMode}>
                                With AI
                            </button>
                        </Link>



                        <button onClick={this.handlePlayMode}>
                            With a friend
                        </button>


                        <div className="opponentName" ref={this.opponentOptions}>
                            <label>Enter Friends Name:</label>
                            <input type="text" />
                            <Link to="/pickSide">
                                <button onClick={this.submitopponentName}>
                                    Submit
                        </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);