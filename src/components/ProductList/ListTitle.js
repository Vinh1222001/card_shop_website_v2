import { useNavigate } from "react-router-dom"
import { Stack, Typography, Button } from "@mui/material"

export default function ListFunction({
    icon,
    title,
    link
}) {

    const navigate = useNavigate()
    return(
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
    )    
}