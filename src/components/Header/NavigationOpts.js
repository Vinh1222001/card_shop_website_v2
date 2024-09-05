import { Button, Stack, styled } from "@mui/material";
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";
import { useNavigate } from "react-router-dom";
import StyleIcon from '@mui/icons-material/Style';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FiberNewIcon from '@mui/icons-material/FiberNew';

const CustomeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
}));

export default function NavigationOtps() {

    // console.log({contactList, socialMediaList});
   
    const navigate = useNavigate()

    const handleNavigate = (url) =>{
        
        navigate(url)
    }


    return(
        <Stack gap={1} direction={"row"}>

            <CustomeButton 
                startIcon= {<StyleIcon fontSize="large"/>}
                onClick={()=> handleNavigate(routeBuilder(ROUTE_LIST.PRODUCTS_LIST))}
            >
                Sản phẩm
            </CustomeButton>

            <CustomeButton 
                startIcon={<WhatshotIcon fontSize="large"/>}
                onClick={()=> handleNavigate(routeBuilder(ROUTE_LIST.HOT_PRODUCTS))}
            >
                Sản phẩm hot
            </CustomeButton>

            <CustomeButton 
                startIcon={<FiberNewIcon fontSize="large"/>}
                onClick={()=> handleNavigate(routeBuilder(ROUTE_LIST.NEW_PRODUCTS))}
            >
                Sản phẩm mới
            </CustomeButton>

        </Stack>
    )
}