import { createSelector } from "@reduxjs/toolkit"

export const getAllProductsSelector = (state) => state.products.products.filter((product)=>product.statuses.value === "release") 

export const getNewProductsSelector = createSelector(
    getAllProductsSelector,
    (allProducts)=>{
        const newProducts = allProducts.filter((product)=> product.statuses.value === "release")
                                        .slice(0, 10)

        return newProducts
    }
)