import {
    SET_PLAY_MODE,
    SET_SIDE,
    SET_MARKER_ONBOARD,
    SET_CURRENT_PLAYERNAME
} from './ActionCreators.js';


const reducer = (state, action) => {
    switch(action.type){
        case SET_PLAY_MODE:
            return {...state, playMode: action.playMode, opponentName: action.opponent}
        
        case SET_SIDE:
            return {...state, marker: action.marker, isX: action.isX}

        case SET_MARKER_ONBOARD:
            return {...state, boardState: action.square, isX: action.nextTurn}

        case SET_CURRENT_PLAYERNAME:
            return {...state, currentPlayerName: action.currentPlayerName}

        default: return state;
    }
}

export default reducer;