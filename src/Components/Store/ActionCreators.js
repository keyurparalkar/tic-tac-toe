export const SET_PLAY_MODE = 'SET_PLAY_MODE';
export const SET_SIDE = 'SET_SIDE';
export const SET_MARKER_ONBOARD = 'SET_MARKER_ONBOARD';

export const setPlayMode = (pm, frd) =>{
    return {
        type: SET_PLAY_MODE,
        playMode: pm,   
        friend: frd
    }
}

export const setSide = (side) => {
    return {
        type: SET_SIDE,
        marker: side
    }
}

export const setMarkerOnBoard = (square, nextTurn) => {
    return {
        type: SET_MARKER_ONBOARD,
        square: square,
        nextTurn: nextTurn
    }
}   