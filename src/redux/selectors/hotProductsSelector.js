import { createSelector } from "@reduxjs/toolkit"

const getAllHotProducts = (state) => state.hotProducts.hotProducts

export const getAllHotProductsSelector = createSelector(
    getAllHotProducts,
    (hotProducts) =>{
        return hotProducts.map((products)=> products.products)
    }
)