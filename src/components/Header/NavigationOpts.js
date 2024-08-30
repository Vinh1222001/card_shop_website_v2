import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyleIcon from '@mui/icons-material/Style';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default function NavigationOtps() {

    const navigate = useNavigate()

    return(
        <Box>
            <Button startIcon= {<StyleIcon/>}>
                Sản phẩm
            </Button>
            <Button startIcon={<WhatshotIcon/>}>
                Sản phẩm hot
            </Button>
        </Box>
    )
}