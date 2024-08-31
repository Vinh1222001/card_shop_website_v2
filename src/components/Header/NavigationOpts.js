import { Box, Button, Divider, Link, Menu, MenuItem, styled } from "@mui/material";
import StyleIcon from '@mui/icons-material/Style';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllContactsSelector } from "../../redux/selectors/contactsSelector";
import { Email, FacebookSharp, Feed, MusicVideoSharp, Phone, YouTube } from "@mui/icons-material";

const CustomeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
}));

function renderIcon(name) {
    let icon;

    switch(name){
        case "facebook":
            icon = <FacebookSharp/>;
        break;

        case "tiktok":
            icon = <MusicVideoSharp/>;
        break;

        case "youtube":
            icon = <YouTube/>
        break;

        case "phone":
            icon = <Phone/>
        break;
        
        case "email":
            icon = <Email/>
        break;

        default:
            icon = <Feed/>
        break
    }

    return icon
}

export default function NavigationOtps() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const contacts = useSelector(getAllContactsSelector)

    const contactList = contacts.filter((contact)=> contact.theme === "contact")

    const socialMediaList = contacts.filter((contact)=> contact.theme === "social media")

    console.log({contactList, socialMediaList});

    const handleClick = (event) => {

            setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


    return(
        <Box display="flex">
            
            <CustomeButton startIcon= {<StyleIcon fontSize="large"/>} >
                Sản phẩm
            </CustomeButton>

            <CustomeButton startIcon={<WhatshotIcon fontSize="large"/>} >
                Sản phẩm hot
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
                                <Link   href={contact.link} 
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
        </Box>
    )
}