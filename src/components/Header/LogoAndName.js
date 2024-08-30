import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function LogoAndName() {

    const logo = {
        src: `${process.env.PUBLIC_URL}/Logo/logo_lentilab-01.png`,
        width: 60,
        height: 60,
        name: "Shop ảnh nổi" 
    }

    const navigate = useNavigate()

    const handleNavigateToHome = ()=>{
        navigate("/")
    }

    return(
        <Button 
            onClick={handleNavigateToHome}
            startIcon = {
                <Avatar src={logo.src} sx={{width:logo.width, height:logo.height}}></Avatar>
            }
        >
            
            <Typography variant="h4" sx={{fontWeight: "bold", textTransform:"uppercase"}}>
                {logo.name}
            </Typography>
        </Button>
    )
}