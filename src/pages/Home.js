import { Box, Stack } from "@mui/material";
import HotProducts from "../components/HotProducts/HotProducts";
import NewProducts from "../components/NewProducts/NewProducts";
import TableProductList from "../components/ProductList.js/TableProductList";
import { useOutletContext } from "react-router-dom";
import BannerSlider from "../components/BannerSlider/BannerSlider";

export default function Home(){

    const globalPaddingX = useOutletContext()

    const componentBackgroundStyle ={
        backgroundColor: "fff",
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

            <Stack sx={{paddingInline: globalPaddingX}} spacing={1}>

                <Box id="hot-product-wrapper" sx={componentBackgroundStyle}>

                    <HotProducts/>
                </Box>

                <Box id="new-product-wrapper" >
                    <NewProducts/>
                </Box>
                
                <Box id="table-product-list-wrapper">
                    <TableProductList/>
                </Box>
            </Stack>


        </Stack>
    )
}
