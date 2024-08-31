import { useSelector } from "react-redux"
import { userSelector } from "../../redux/selectors/authSelector"
import { Avatar, Box, Button, Menu, MenuItem, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
}));

export default function AccountMenu() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const userInfo = useSelector(userSelector)
    const navigate = useNavigate()
    
    const handleClick = (event) => {
        if(userInfo.isAuthenticated){

            setAnchorEl(event.currentTarget);
        }else{
            navigate("/signin")
        }
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <Box>
            <CustomeButton variant="text" 
                    endIcon={
                        <Avatar alt={userInfo.user.name} src={userInfo.user.avatar} sx={{ width: 24, height: 24 }}/>
                    }
                    id="account-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
            >

                <Typography variant="body1" textTransform="none" color="primary.contrastText">
                    { userInfo.isAuthenticated && `Hello ${userInfo.user.name}!` }
                    { !userInfo.isAuthenticated && `Đăng nhập/Đăng ký`}
                </Typography>
                
            </CustomeButton>
            <Menu
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'account-button',
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>Thông tin cá nhân</MenuItem>
                {/* <MenuItem onClick={handleClose}>Giỏ hàng</MenuItem> */}
                <MenuItem onClick={handleClose}>Đơn hàng</MenuItem>
                <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
            </Menu>
        </Box>
    )
}