import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getContactListSelector, getSocialMediaListSelector } from "../../redux/selectors/contactsSelector";
import { renderIcon } from "../../commonFunctions/iconFunctions";

import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';

export default function SpeedDialContacts() {

    const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleNavigate = (url)=>{
        handleClose()

        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const contactList = useSelector(getContactListSelector)

    const socialMediaList = useSelector(getSocialMediaListSelector)

    return(
        <Box sx={{position: "sticky", bottom: 16}}>

            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                sx={{ width: "fit-content", position: 'absolute', bottom: 0, right: 16 }}
                icon={<SpeedDialIcon icon={<CallIcon/>} openIcon={<CloseIcon/>}/>}
                onClose={handleClose}
                onOpen={handleOpen}
                // openIcon={}
                open={open}
            >
                {
                    contactList.map((contact, index) => {
                        return(

                            <SpeedDialAction
                                key={`speed-dial-contact-${index}`}
                                icon={renderIcon(contact.name)}
                                tooltipTitle={
                                    <Typography sx={{whiteSpace: "nowrap"}}>
                                        {contact.link}
                                    </Typography>
                                }
                                tooltipOpen
                                onClick={handleClose}
                            />
                        )
                    })
                }

                {
                    socialMediaList.map((socialMedia, index)=>{
                        return (
                            <SpeedDialAction
                                key={`speed-dial-social-media-${index}`}
                                icon={renderIcon(socialMedia.name)}
                                tooltipTitle={
                                    <Typography sx={{whiteSpace: "nowrap"}}>
                                        {socialMedia.title}
                                    </Typography>
                                }
                                tooltipOpen
                                onClick={()=> handleNavigate(socialMedia.link)}
                            />
                        )
                    })
                }
            </SpeedDial>
        </Box>

    )
}