import { Divider, Stack } from "@mui/material";
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

                <Stack overflow={"auto"} sx={{minHeight: "400px"}} >

                    <Stack direction={"row"} width={"fit-content"} spacing={1}>
                        {productList.map((product, index)=>{
                            return (

                                <ProductCard product={product} key={`product-card-${index}`}/>
                                
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}