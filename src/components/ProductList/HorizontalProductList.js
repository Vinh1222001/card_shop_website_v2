import { Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";


export default function HorizontalProductList({
    productList,
    icon,
    title,
    link,
}) {

    const navigate = useNavigate()

    return(
        <Stack>
        
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} padding={1}>
                <Stack direction={"row"} alignItems={"center"} >
                    
                    {icon}
                    <Typography variant="h5" fontWeight={"bold"}>
                        {title}
                    </Typography>
                </Stack>
                <Stack>
                    <Button 
                        onClick={
                            ()=> navigate(link)
                        }
                        size="small"
                    >
                        Xem tất cả
                    </Button>
                </Stack>
            </Stack>

            <Divider/>

            <Stack overflow={"auto"} sx={{minHeight: "400px"}}>

                <Stack direction={"row"} width={"fit-content"} spacing={1}>
                    {productList.map((product, index)=>{
                        return (

                            <ProductCard product={product} key={`product-card-${index}`}/>
                            
                        )
                    })}
                </Stack>
            </Stack>
        </Stack>
    )
}