import { actionType } from "./actionTypes"

export const initialstate = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    wishlist: []
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
        case actionType.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionType.REMOVE_FROM_CART:
            {
                return {
                    ...state,
                    cart: state.cart.filter(product => product._id !== action.payload._id)
                }
            }

        case actionType.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
        default:
            return state
    }
}