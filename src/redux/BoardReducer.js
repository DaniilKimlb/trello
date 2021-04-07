import {
    ADD_LISTENERS,
    CHANGE_ID,
    CHANGE_TEXT,
    CREATE_BOARD, DELETE_ELEMENT,
    DELETE_TODO,
    SET_ACTIVE, SET_CURRENT_ITEMS,
    SETTING_BOARD
} from "./types";

const initialState = {
    board: [],
    currentText: '',
    currentId: '',
    setBoard: [],
    listen: {},
    isActive: true,
    currentItems: {},
}

export default function boardReducer(state = initialState, action) {
    let index
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
            const deleteListenElement = val[action.data] = {tuck: [], value: ''}
            const deleteSetBoard = pre.filter(el => el.index !== action.data)
            return {...state, setBoard: deleteSetBoard, listen: {...state.listen, ...deleteListenElement}}
        case SET_CURRENT_ITEMS:
            return {...state, currentItems: action.data}
        case DELETE_ELEMENT:
            index = action.data.index

            return {
                ...state, listen: {
                    ...state.listen,
                    [index]: {
                        ...state.listen[index],
                        tuck: state.listen[index].tuck.filter(arr => arr.id !== action.data.id),
                        value: ''
                    }
                }
            }
        default:
            return state
    }
}
