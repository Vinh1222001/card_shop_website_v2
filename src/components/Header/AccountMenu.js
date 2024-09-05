import { useSelector } from "react-redux"
import { getUserInfoSelector } from "../../redux/selectors/authSelector"
import { Avatar, Box, Button, Divider, Menu, MenuItem, Tooltip, Typography, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {signOut} from "../../supabase/auth"
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";

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
    
    const userInfo = useSelector(getUserInfoSelector)

    const navigate = useNavigate()
    
    const handleClick = (event) => {
        if(userInfo.isAuthenticated){

            setAnchorEl(event.currentTarget);
        }else{
            navigate(routeBuilder(ROUTE_LIST.SIGNIN))
        }
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (url) =>{
        handleClose()

        navigate(url)
    }

    const handleNavigateToUserInfo = () =>{
        
        const url = routeBuilder( ROUTE_LIST.USER_INFO, userInfo.user.id)

        handleNavigate(url)
    }

    const handleNavigateToUserOrders = () =>{

        const url = routeBuilder(ROUTE_LIST.USER_OREDERS, userInfo.user.id)

        handleNavigate(url)
    }

    const handleSignOut = () =>{
        signOut();
        handleNavigate(process.env.REACT_APP_HOME_URL)
        
    }
    
    return(
        <Box>
            <CustomeButton variant="text" 
                    id="account-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
            >
                <Tooltip 
                    title={
                        userInfo.isAuthenticated?
                        `Hello ${userInfo.user.name}`
                        :"Đăng nhập/Đăng ký"
                    } 
                    leaveDelay={200}
                    arrow
                >
                    <Avatar alt={userInfo.user.name} src={userInfo.user.avatar} sx={{ width: 40, height: 40 }}/>
                </Tooltip>                
                
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
                <Typography variant="body1" padding={1}>
                    Hello {userInfo.user.name}!
                </Typography>
                <Divider/>
                <MenuItem onClick={handleNavigateToUserInfo}>Thông tin cá nhân</MenuItem>
                {/* <MenuItem onClick={handleClose}>Giỏ hàng</MenuItem> */}
                <MenuItem onClick={handleNavigateToUserOrders}>Đơn hàng</MenuItem>
                <MenuItem onClick={handleSignOut}>Đăng xuất</MenuItem>
            </Menu>
        </Box>
    )
}