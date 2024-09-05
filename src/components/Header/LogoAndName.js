import { Avatar, Button, Tooltip, Typography} from "@mui/material";
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
        navigate(process.env.REACT_APP_HOME_URL)
    }

    return(
        <Tooltip title={logo.name} arrow>

            <Button 
                onClick={handleNavigateToHome}
                sx={{gap: 1}}
            >
                <Avatar src={logo.src} sx={{width:logo.width, height:logo.height}} md={"hidden"}></Avatar>

                <Typography variant="h4" sx={{fontWeight: "bold", textTransform:"uppercase"}} color="primary.contrastText">
                    {logo.name}
                </Typography>
                
            </Button>
        </Tooltip>
    )
}