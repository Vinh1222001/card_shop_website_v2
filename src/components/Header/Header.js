import { Box, Stack } from "@mui/material";
import NavigationBar from "./NavigationBar";
import HotNews from "./HotNews";
import { blueGrey } from "@mui/material/colors";
import Breadcrumb from "./Breadcrumb";

export default function Header({globalPaddingX}) {

    // console.log(userInfo);
    
    return(

        <Stack>

            <Box paddingBlock={1} paddingInline={globalPaddingX} bgcolor="primary.main">
                <NavigationBar/>
            </Box>

            <Box bgcolor={blueGrey[100]} paddingBlock={1}>
                <HotNews/>
            </Box>

            <Box paddingInline={globalPaddingX} paddingBlock={1}>
                <Breadcrumb/>
            </Box>

        </Stack>


    )
}