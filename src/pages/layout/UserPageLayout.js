import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import UserSideMenu from "../../components/UserSideMenu/UserSideMenu";

export default function UserPageLayout(){
    return(
        <section id="user-page-wrapper">

            <Box id="user-side-menu">
                <UserSideMenu/>
            </Box>
            <Box>
                <Outlet/>
            </Box>

        </section>
    )
}