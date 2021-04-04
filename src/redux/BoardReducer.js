import {ADD_LISTENERS, CHANGE_ID, CHANGE_TEXT, CREATE_BOARD, DELETE_TODO, SET_ACTIVE, SETTING_BOARD} from "./types";

const initialState = {
    board: [],
    currentText: '',
    currentId: '',
    setBoard: [],
    listen: {},
    isActive: true
}

export default function boardReducer(state = initialState, action) {
    const val = state['listen'];
    switch (action.type) {
        case CREATE_BOARD:
            return {...state, board: [...state.board, action.data]}
        case CHANGE_TEXT:
            return {...state, currentText: action.data}
        case CHANGE_ID:
            return {...state, currentId: action.data}
        case SETTING_BOARD:
            return {...state, setBoard: [...state.setBoard, action.data]}
        case ADD_LISTENERS:
            const checkFor = val[action.index]?.tuck ? val[action.index].tuck : ''
            val[action.index] = action.data ? {tuck: [...checkFor, {...action.data, isActive: true}], value: ''} : {
                tuck: [...checkFor],
                value: action.value
            };
            return {...state, listen: {...val}}
        case SET_ACTIVE:
            return {
                ...state, listen: {
                    ...state.listen, ...state.listen[action.data.index].tuck.forEach((el, i) => {
                        if (+action.data.id === i) {
                            el.isActive = action.data.isActive
                        }
                    })
                }
            }
        case DELETE_TODO:
            const pre = state['setBoard']
            const deleteListenElement = val[action.data] = {tuck:[], value: ''}
            const deleteSetBoard = pre.filter(el => el.index !== action.data)
            return {...state, setBoard: deleteSetBoard, listen: {...state.listen, ...deleteListenElement}}
        default:
            return state
    }
}
