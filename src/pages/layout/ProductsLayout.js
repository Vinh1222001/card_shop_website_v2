import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
    return(
        <section id="products-page-wrapper">
            <Stack>
                <Box>
                    Product Filter
                </Box>
                <Box>
                    Product List
                    <Outlet/>
                </Box>
            </Stack>
        </section>
    )
}