import {
    SET_PLAY_MODE,
    SET_SIDE,
    SET_MARKER_ONBOARD,
    SET_CURRENT_PLAYERNAME,
    CLEAR_BOARD,
    INIT_SCOREBOARD,
    UPDATE_SCOREBOARD
} from './ActionCreators.js';


const reducer = (state, action) => {
    switch(action.type){
        case SET_PLAY_MODE:
            return {...state, playMode: action.playMode, opponentName: action.opponent}
        
        case SET_SIDE:
            return {...state, marker: action.marker, isX: action.isX}

        case SET_MARKER_ONBOARD:
            return {...state, boardState: action.square, isX: action.nextTurn, aiSteps: action.aiSteps}

        case SET_CURRENT_PLAYERNAME:
            return {...state, currentPlayerName: action.currentPlayerName}
        
        case CLEAR_BOARD:
            return {...state, boardState: new Array(9).fill(null)}
        
        case INIT_SCOREBOARD:
            return {...state, scoreBoard:action.sA}
        
        case UPDATE_SCOREBOARD:
            let temp = Object.assign(state.scoreBoard);
            console.log('TEMP KEY ===',action.key)
            temp[`${action.key}`].push(action.val);
            return {...state, scoreBoard: temp}

        default: return state;
    }
}

export default reducer;