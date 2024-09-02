import { Card, Stack, CardMedia, CardContent, CardActions, Typography, Chip, Divider, Button } from "@mui/material"
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

function DisplayOptionComponent(
    {
        data,
        attribute,
        titile,
    }
){

    // console.log(attribute);
    
    // console.log(data[attribute]);
    
    return (
        <Stack direction={"row"} spacing={2}>

            <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: "nowrap" }} >
                {titile}:
            </Typography>
            <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
                {data[attribute].split(', ').map((item, index)=>{
                    return(
                        <Chip label={item} key={`${attribute}-${index}`} size="small"/>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export default function ProductCard({
    product,
    sx={}
}){

    const navigate = useNavigate()

    const handleNavigate = () =>{
        const url = routeBuilder(ROUTE_LIST.SINGLE_PRODUCT, product.id)
        navigate(url)
    }

    return(
        <Card sx={{ minWidth: 350, width: "100%", justifyContent: "space-between", display: "flex", flexDirection: "column", ...sx }}>
            <Stack>

                <CardMedia
                    sx={{ minHeight: 250 }}
                    image={product.images.imgSrc}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        {product.name}
                    </Typography>

                    <Divider sx={{marginBottom: 1}}/>

                    <Stack spacing={1}>
                        <DisplayOptionComponent
                            data={product}
                            attribute="material"
                            titile="Chất liệu"
                        />

                        <DisplayOptionComponent
                            data={product}
                            attribute="effect"
                            titile="Hiệu ứng"
                        />

                        <DisplayOptionComponent
                            data={product}
                            attribute="size"
                            titile="Kích thước"
                        />


                    </Stack>
                </CardContent>
            </Stack>

            <CardActions sx={{display: "flex", justifyContent:"space-between", width: "100%"}}>
                {/* <Button size="small">Share</Button> */}
                <Button 
                    onClick={handleNavigate}    
                    size="small"
                >
                    Xem chi tiết sản phẩm
                </Button>

                <Stack direction={"row"} spacing={1}>
                    <Typography variant="subtitle2">
                        {product.seen}
                    </Typography>
                    <VisibilityIcon/>
                </Stack>
            </CardActions>
        </Card>
    )
}