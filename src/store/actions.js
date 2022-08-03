import { SET_POPUP, SET_TOGGLE } from './constants'

export const setPopup = payload => ({
    type: SET_POPUP,
    payload
})
export const setToggle = payload => ({
    type: SET_TOGGLE,
    payload
})