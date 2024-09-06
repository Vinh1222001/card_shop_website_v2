import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllHotProductsSelector } from "../redux/selectors/hotProductsSelector";
import { ROUTE_LIST, routeBuilder } from "../routes/routeBuilder";
import { getAllReleasedProductsSelector, getNewProductsSelector } from "../redux/selectors/productsSelector";

import TableProductList from "../components/ProductList/TableProductList";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import HorizontalProductList from "../components/ProductList/HorizontalProductList";

import WhatshotIcon from '@mui/icons-material/Whatshot';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import BallotIcon from '@mui/icons-material/Ballot';
import BaseComponent from "../components/BaseComponent/BaseComponent";

export default function Home(){

    const hotProductList = useSelector(getAllHotProductsSelector)

    const newProductList = useSelector(getNewProductsSelector)  
    
    const releasedProductList = useSelector(getAllReleasedProductsSelector) 

    return (
        <Stack 
            id="home-page-wrapper" 
            spacing={1}
        >
            <Box id="banner-slider-wrapper" >
                <BannerSlider/>
            </Box>

            <Stack spacing={2}>

                <BaseComponent id="hot-product-wrapper">
                    <HorizontalProductList
                        productList={hotProductList}
                        icon={<WhatshotIcon sx={{color: "red"}}/>}
                        title= {"Sản phẩm Hot"}
                        link={routeBuilder(ROUTE_LIST.HOT_PRODUCTS)}
                    />
                </BaseComponent>

                <BaseComponent id="new-product-wrapper">
                    <HorizontalProductList
                        productList={newProductList}
                        icon={<FiberNewIcon/>}
                        title={"Sản phẩm mới"}
                        link = {routeBuilder(ROUTE_LIST.NEW_PRODUCTS)}
                    />
                </BaseComponent>
                
                <BaseComponent id="table-product-list-wrapper">
                    <TableProductList
                        productList={releasedProductList}
                        icon={<BallotIcon/>}
                        title={"Sản phẩm tiêu biểu"}
                        productsOnPage={12}
                        link = {routeBuilder(ROUTE_LIST.PRODUCTS_LIST)}
                        pagination={false}
                    />
                </BaseComponent>
            </Stack>

        </Stack>
    )
}
