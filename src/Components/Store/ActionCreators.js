export const SET_PLAY_MODE = 'SET_PLAY_MODE';
export const SET_SIDE = 'SET_SIDE';
export const SET_MARKER_ONBOARD = 'SET_MARKER_ONBOARD';
export const SET_CURRENT_PLAYERNAME = 'SET_CURRENT_PLAYERNAME';

export const setPlayerName = (name) => {
    return {
        type: SET_CURRENT_PLAYERNAME,
        currentPlayerName: name
    }
}
export const setPlayMode = (pm, frd) =>{
    return {
        type: SET_PLAY_MODE,
        playMode: pm,   
        opponent: frd
    }
}

export const setSide = (side, setX, setO = false) => {
    return {
        type: SET_SIDE,
        marker: side,
        isX: setX
    }
}

export const setMarkerOnBoard = (square, nextTurn) => {
    return {
        type: SET_MARKER_ONBOARD,
        square: square,
        nextTurn: nextTurn
    }
}   