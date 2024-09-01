import { Box } from "@mui/material";
import HotProducts from "../components/HotProducts/HotProducts";
import NewProducts from "../components/NewProducts/NewProducts";
import TableProductList from "../components/ProductList.js/TableProductList";

export default function Home(){

    const componentBackgroundStyle ={
        backgroundColor: "fff",
        boxShadow: 1
    }

    return (
        <Box 
            id="home-page-wrapper" 
            display={"flex"}
            flexDirection={"column"}
            gap={1}
        >

            <Box id="hot-product-wrapper" sx={componentBackgroundStyle}>

                <HotProducts/>
            </Box>

            <Box id="new-product-wrapper">
                <NewProducts/>
            </Box>
            
            <Box id="table-product-list-wrapper">
                <TableProductList/>
            </Box>

        </Box>
    )
}
