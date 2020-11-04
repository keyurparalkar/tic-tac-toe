import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import O from './Icons/o.svg';
import x_mark from './Icons/x-mark.svg';
import "./StyleSheets/Home.css";
import { setPlayMode } from "./Store/ActionCreators.js";

const mapStateToProps = (state) => {
    return {
        playMode: state.playMode,
        friendName: state.friendName
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlayMode = this.handlePlayMode.bind(this);
        this.submitFriendName = this.submitFriendName.bind(this);
        this.friendOptions = React.createRef();
    }

    handlePlayMode(event) {
        if (event.target.innerText.indexOf('AI') > -1) {
            this.props.dispatch(setPlayMode('AI', null))
        } else {
            this.friendOptions.current.style.display = 'block';
            
        }
    }

    submitFriendName(){
        this.props.dispatch(setPlayMode('friend',this.friendOptions.current.children[1].value))
    }

    render() {
        
        return (
            <div className="home-container">
                <div className="marker-icons">
                    <img src={x_mark} alt="x-marker" />
                    <img src={O} alt="o-marker" />
                </div>
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
                    

                    <div className="friendName" ref={this.friendOptions}>
                        <label>Enter Friends Name:</label>
                        <input type="text" />
                        <Link to="/pickSide">
                            <button onClick={this.submitFriendName}>
                                Submit
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Home);