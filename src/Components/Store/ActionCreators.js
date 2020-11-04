export const GET_PLAY_MODE = 'GET_PLAY_MODE';
export const GET_SIDE = 'GET_SIDE';
export const SET_MARKER_ONBOARD = 'SET_MARKER_ONBOARD';

export const getPlayMode = (op) =>{
    return {
        type: GET_PLAY_MODE,
        opponentPlayer: op
    }
}

export const getSide = (side) => {
    return {
        type: GET_SIDE,
        marker: side
    }
}

export const setMarkerOnBoard = (ind) => {
    return {
        type: SET_MARKER_ONBOARD,
        index: ind
    }
}