const CREATE_BOARD = 'CREATE_BOARD'
const CHANGE_TEXT = 'CHANGE_TEXT'
const initialState = {
    board: [],
    currentText: ''
}

export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_BOARD:
            return {...state, board: [...state.board, action.data]}
        case CHANGE_TEXT:
            return {...state, currentText: action.data}
        default:
            return state
    }
}

export const createBoard = (data) => ({
    type: CREATE_BOARD,
    data
})
export const changeText = (data) => ({
    type: CHANGE_TEXT,
    data
})
