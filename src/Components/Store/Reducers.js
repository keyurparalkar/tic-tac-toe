import {
    SET_PLAY_MODE,
    SET_SIDE,
    SET_MARKER_ONBOARD
} from './ActionCreators.js';


const reducer = (state, action) => {
    switch(action.type){
        case SET_PLAY_MODE:
            return {...state, playMode: action.playMode, friendName: action.friend}
        
        case SET_SIDE:
            return {...state, marker: action.marker}

        case SET_MARKER_ONBOARD:
            return {...state, boardState: action.square, isX: action.nextTurn}

        default: return state;
    }
}

export default reducer;