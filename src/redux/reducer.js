import { combineReducers } from "redux"

const initialState = { text: null }
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "modal": 
            const copy = {...state}
            copy.text = action.payload.text
            return copy
        default: return state
    }
} 
const reducer = combineReducers({
    modal: modalReducer
})
export default reducer
