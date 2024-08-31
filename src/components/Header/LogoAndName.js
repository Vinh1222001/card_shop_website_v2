import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogoAndName() {

    const logo = {
        src: `${process.env.PUBLIC_URL}/Logo/logo_lentilab-01.png`,
        width: 60,
        height: 60,
        name: "3D Lenticular" 
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
            
            <Typography variant="h4" sx={{fontWeight: "bold", textTransform:"uppercase"}} color="primary.contrastText">
                {logo.name}
            </Typography>
        </Button>
    )
}