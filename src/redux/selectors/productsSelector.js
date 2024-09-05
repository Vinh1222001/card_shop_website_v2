import { createSelector } from "@reduxjs/toolkit"

export const getAllProducts= (state) => state.products.products

export const getAllReleasedProductsSelector = createSelector(
    getAllProducts,
    (allProducts)=>{
        return allProducts.filter((product)=>product.statuses.value === "release") 
    }
)

export const getNewProductsSelector = createSelector(
    getAllProducts,
    (allProducts)=>{
        const newProducts = allProducts.filter((product)=> product.statuses.value === "release")
                                        .slice(0, 10)

        return newProducts
    }
)