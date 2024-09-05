import { Box, Divider, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import ListTitle from "./ListTitle"

export default function HorizontalProductList({
    productList,
    icon,
    title,
    link,
}) {


    return(
        <Stack>
            <ListTitle
                icon={icon}
                title={title}
                link={link}
            />

            <Divider/>

            <Stack padding={1} overflow={"hidden"}>

                <Stack overflow={"auto"} sx={{minHeight: "400px"}} paddingBottom={1}>

                    <Stack direction={"row"} width={"fit-content"} spacing={1} alignItems={"stretch"}>
                        {productList.map((product, index)=>{
                            return (
                                <Box key={`product-card-${index}`} minWidth={300} display={"flex"} alignItems={"stretch"}>

                                    <ProductCard product={product} />
                                </Box>
                                
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}