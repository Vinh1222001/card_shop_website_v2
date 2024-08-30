import AccountMenu from "./AccountMenu";
import { Box, Grid2 } from "@mui/material";
import LogoAndName from "./LogoAndName";
import NavigationOtps from "./NavigationOpts";
import SearchBar from "./SearchBar";

export default function NavigationBar() {

    

    return(
        <Box>
            <Grid2 display="flex" justifyContent="space-between" alignItems="center" container>
                <Box id="logo-with-name">
                    <LogoAndName/>
                </Box>
                <Box id="nav-options" >
                    <NavigationOtps/>
                </Box>
                <Box>
                    <SearchBar/>
                </Box>
                <Box id="account-menu">
                    <AccountMenu/>
                </Box>
            </Grid2>
        </Box>
    )
}