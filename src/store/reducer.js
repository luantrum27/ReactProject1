import { SET_POPUP, SET_TOGGLE } from "./constants"

const initState = {
    popup: false,
    toggle: false
}

function reducer(state, action) {
    switch (action.type) {
        case SET_POPUP:
            return {
                ...state,
                popup: action.payload
            }
        case SET_TOGGLE:
            return {
                ...state,
                toggle: action.payload
            }

        default:
            throw new Error('Invalid action.')
    }
}

export { initState }
export default reducer