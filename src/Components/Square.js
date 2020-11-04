import React from 'react';
import {connect} from 'react-redux';
import './StyleSheets/Square.css';


const mapStateToProps = (state) => {
    return {
        boardState: state.boardState
    }
}
const Square = (props) => {
    return(
        <div className="square" onClick={()=>props.onClick()}>
            {props.value}
        </div>
    );
}

export default connect(mapStateToProps)(Square);