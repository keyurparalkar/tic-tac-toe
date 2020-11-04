import {
    GET_PLAY_MODE,
    GET_SIDE,
    SET_MARKER_ONBOARD
} from './ActionCreators.js';

const reducer = (state, action) => {
    switch(action.type){
        case GET_PLAY_MODE:
            return {...state, opponentPlayer: action.opponentPlayer}
        
        case GET_SIDE:
            return {...state, marker: action.marker}

        case SET_MARKER_ONBOARD:
            const square = state.boardState.slice();
            square[action.index] = 'X';
            return {...state, boardState: square}

        default: return state;
    }
}

export default reducer;