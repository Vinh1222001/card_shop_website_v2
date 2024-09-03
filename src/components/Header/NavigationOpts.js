import { Box, Button, Divider, Link, Menu, MenuItem, Stack, styled } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getContactListSelector, getSocialMediaListSelector } from "../../redux/selectors/contactsSelector";
import { renderIcon } from "../../common_funcs/iconFunctions";
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";
import { useNavigate } from "react-router-dom";
import StyleIcon from '@mui/icons-material/Style';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import FiberNewIcon from '@mui/icons-material/FiberNew';

const CustomeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
}));

export default function NavigationOtps() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const contactList = useSelector(getContactListSelector)

    const socialMediaList = useSelector(getSocialMediaListSelector)

    // console.log({contactList, socialMediaList});

    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

            <Box >

                <CustomeButton 
                    startIcon={<PermPhoneMsgIcon/>} 
                    id="contact-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}

                >
                    Liên hệ
                </CustomeButton>
                <Menu
                    id="contact-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'contact-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {
                        contactList.map((contact, index)=>(
                            <MenuItem key={`contact-${index}`} onClick={handleClose} sx={{display:"flex", gap:1}}>
                                {renderIcon(contact.name)}
                                {contact.link}
                            </MenuItem>
                        ))
                    }
                    <Divider/>
                    {
                        socialMediaList.map((contact, index)=>(
                            <MenuItem key={`social-media-${index}`} onClick={handleClose}>
                                <Link   
                                    href={contact.link} 
                                    underline="hover" 
                                    display="flex" 
                                    gap={1} 
                                    alignItems="center" 
                                    color="black"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {renderIcon(contact.name)}
                                    {contact.name}
                                </Link>
                            </MenuItem>
                        ))
                    }
                    
                </Menu>
            </Box>
        </Stack>
    )
}