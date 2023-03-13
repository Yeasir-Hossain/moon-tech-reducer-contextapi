import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { ProductReducer, initialstate } from '../state/ProductState/productReducer'
import { actionType } from '../state/ProductState/actionTypes'

const PRODUCT_CONTEXT = createContext()
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialstate)
  console.log(state);
  useEffect(() => {
    dispatch({ type: actionType.FETCHINGSTART })
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => dispatch({ type: actionType.FETCHINGSUCCESS, payload: data.data })
      ).catch(() => {
        dispatch({ type: actionType.FETCHINGERROR })
      })
  }, [])

  const value = {
    state,
    dispatch,
  }

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT)
  return context
}

export default ProductProvider
