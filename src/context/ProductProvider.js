import React, { createContext, useContext, useEffect, useState } from 'react'

const PRODUCT_CONTEXT = createContext()
// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setData(data.data))
  }, [])

  const value = {
    data
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
