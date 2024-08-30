import { useSelector } from "react-redux"
import { userSelector } from "../../redux/selectors/authSelector"
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const userInfo = useSelector(userSelector)
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <Box>
            <Button variant="text" 
                    endIcon={
                        <Avatar alt={userInfo.user.name} src={userInfo.user.avatar} sx={{ width: 24, height: 24 }}/>
                    }
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
            >
                <Typography variant="body1" textTransform="none">
                    Hello {userInfo.user.name}!
                </Typography>
                
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>Thông tin cá nhân</MenuItem>
                <MenuItem onClick={handleClose}>Giỏ hàng</MenuItem>
                <MenuItem onClick={handleClose}>Đơn hàng</MenuItem>
                <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
            </Menu>
        </Box>
    )
}