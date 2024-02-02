import { createContext, useContext } from "react";

export const ProductsContext = createContext({
    products: [], 
})

export const ProductsProvider = ProductsContext.Provider

export const useProducts = ()=>{
    useContext(ProductsContext)
}
