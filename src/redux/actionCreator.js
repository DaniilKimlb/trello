import {ADD_LISTENERS, CHANGE_ID, CHANGE_TEXT, CREATE_BOARD, DELETE_TODO, SET_ACTIVE, SETTING_BOARD} from "./types";

export const createBoard = (data) => ({
    type: CREATE_BOARD,
    data
})
export const changeText = (data) => ({
    type: CHANGE_TEXT,
    data
})
export const changeId = (data) => ({
    type: CHANGE_ID,
    data
})
export const changeBoard = (data) => ({
    type: SETTING_BOARD,
    data
})
export const changeListeners = (index, value, data) => ({
    type: ADD_LISTENERS,
    index, value, data
})
export const setActive = (data) => {
    return {
     type: SET_ACTIVE,
     data
 }
}
export  const  deleteTodo  = data =>({
    type: DELETE_TODO,
    data
})
