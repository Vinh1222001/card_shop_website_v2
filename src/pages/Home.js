import { Box, Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllHotProductsSelector } from "../redux/selectors/hotProductsSelector";
import { ROUTE_LIST, routeBuilder } from "../routes/routeBuilder";
import { getAllProductsSelector, getNewProductsSelector } from "../redux/selectors/productsSelector";

import TableProductList from "../components/ProductList/TableProductList";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import HorizontalProductList from "../components/ProductList/HorizontalProductList";

import WhatshotIcon from '@mui/icons-material/Whatshot';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import BallotIcon from '@mui/icons-material/Ballot';

export default function Home(){

    const hotProductList = useSelector(getAllHotProductsSelector)

    const newProductList = useSelector(getNewProductsSelector)  
    
    const releasedProductList = useSelector(getAllProductsSelector) 
    // console.log(releasedProductList);
    
    const globalPaddingX = useOutletContext()

    const componentBackgroundStyle ={
        backgroundColor: "white",
        boxShadow: 1,
    }

    return (
        <Stack 
            id="home-page-wrapper" 
            spacing={1}
        >
            <Box id="banner-slider-wrapper" >
                <BannerSlider/>
            </Box>

            <Stack sx={{paddingInline: globalPaddingX}} spacing={2}>

                <Box id="hot-product-wrapper" sx={componentBackgroundStyle}>
                    <HorizontalProductList
                        productList={hotProductList}
                        icon={<WhatshotIcon sx={{color: "red"}}/>}
                        title= {"Sản phẩm Hot"}
                        link={routeBuilder(ROUTE_LIST.HOT_PRODUCTS)}
                    />
                </Box>

                <Box id="new-product-wrapper" sx={componentBackgroundStyle}>
                    <HorizontalProductList
                        productList={newProductList}
                        icon={<FiberNewIcon/>}
                        title={"Sản phẩm mới"}
                        link = {routeBuilder(ROUTE_LIST.NEW_PRODUCTS)}
                    />
                </Box>
                
                <Box id="table-product-list-wrapper" sx={componentBackgroundStyle}>
                    <TableProductList
                        productList={releasedProductList}
                        icon={<BallotIcon/>}
                        title={"Tất cả sản phẩm"}
                        link = {routeBuilder(ROUTE_LIST.PRODUCTS_LIST)}
                    />
                </Box>
            </Stack>

        </Stack>
    )
}
