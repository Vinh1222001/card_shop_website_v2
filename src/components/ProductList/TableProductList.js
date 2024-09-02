import { Button, Divider, Grid2, Pagination, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";


export default function TableProductList({
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
            <Stack alignItems={"center"} gap={2} paddingBottom={1}>

                <Grid2 container sx={{justifyContent: "space-between"}} spacing={1.5}>

                    {productList.map((product, index)=>{
                        return (
                            <Grid2 item key={`product-card-${index}`} size={3}>

                                <ProductCard product={product} sx={{height: "100%"}}/>
                            </Grid2>
                            
                        )
                    })}

                </Grid2>

                <Pagination count={Math.ceil( productList.length/10)}/>
            </Stack>
        </Stack>
    )
}