import { actionType } from "./actionTypes"

export const initialstate = {
    loading: false,
    products: [],
    error: false,
}

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case actionType.FETCHINGSTART:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionType.FETCHINGSUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false
            }
        case actionType.FETCHINGERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}