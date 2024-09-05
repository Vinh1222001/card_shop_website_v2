import { Divider, Grid2, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import ListTitle from "./ListTitle"
import CustomePagination from "../CustomPagination/CustomPagination";
import { useState } from "react";

export default function TableProductList({
    productList,
    icon,
    title,
    link,
    productsOnPage = 12,
    pagination = false
}) {

    // console.log(page); 
    const [page, setPage] = useState(1)

    return(
        <Stack>
            <ListTitle
                icon={icon}
                title={title}
                link={link}
            />

            <Divider/>
            <Stack alignItems={"center"} gap={2} padding={1}>

                <Grid2 container spacing={1.5}>

                    {productList.slice((page-1)*productsOnPage, page*productsOnPage).map((product, index)=>{
                        return (
                            <Grid2  key={`product-card-${index}`} size={3}>

                                <ProductCard product={product} sx={{height: "100%"}}/>
                            </Grid2>
                            
                        )
                    })}

                </Grid2>

                {
                    pagination?
                        <CustomePagination
                            count={Math.ceil( productList.length/productsOnPage)}
                            page={page}
                            handleSetPage={setPage}
                        />
                    :""
                }
                
            </Stack>
        </Stack>
    )
}