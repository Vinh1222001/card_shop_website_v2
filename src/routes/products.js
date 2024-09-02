import { crumbCreator } from "../common_funcs/crumbCreator"
import VerticalProductList from "../components/ProductList/VerticalProductList"
import ProductsLayout from "../pages/layout/ProductsLayout"

export const productRoutes = {

    path: process.env.REACT_APP_PRODUCTS_URL,
    element: <ProductsLayout/>,
    handle: crumbCreator(),
    loader: ()=>{
        return{
            name: "Sản phẩm",
            // paddingX: "10%"
        }
    },

    children:[
        {
            path: `${process.env.REACT_APP_PRODUCT_PAGE_URL}/:productId`,
            handle: crumbCreator(),
            loader: ()=>{
                
                return{
                    name: "Sản phẩm cụ thể",
                    // paddingX: "10%"
                }
            },
        },
        {
            path: `${process.env.REACT_APP_SIMILAR_PRODUCTS_URL}`,
            handle: crumbCreator(),
            element: <VerticalProductList/>,
            loader: ()=>{
                
                return{
                    name: "Danh sách sản phẩm",
                    // paddingX: "10%"
                }
            },
        },
        {
            path: `${process.env.RACT_APP_HOT_PRODUCTS_URL}`,
            handle: crumbCreator(),
            loader: ()=>{
                
                return{
                    name: "Danh sách sản phẩm hot",
                    // paddingX: "10%"
                }
            },
        },
        {
            path: `${process.env.REACT_APP_NEW_PRODUCTS_URL}`,
            handle: crumbCreator(),
            loader: ()=>{
                
                return{
                    name: "Danh sách sản phẩm mới",
                    // paddingX: "10%"
                }
            },
        },

    ]
}