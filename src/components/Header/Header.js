import { Box, Stack } from "@mui/material";
import NavigationBar from "./NavigationBar";
import HotNews from "./HotNews";
import { blueGrey } from "@mui/material/colors";
import Breadcrumb from "./Breadcrumb";
import BaseComponent from "../BaseComponent/BaseComponent";

export default function Header({globalPaddingX}) {

    // console.log(userInfo);
    
    return(
        <Stack>

            <Box bgcolor="primary.main">
                <BaseComponent backgroundColor="none" boxShadow={"none"}>                
                    <NavigationBar/>
                </BaseComponent>
            </Box>

            <Box bgcolor={blueGrey[100]} paddingBlock={1}>
                <BaseComponent backgroundColor="none" boxShadow={"none"}>    
                    <HotNews/>
                </BaseComponent>
            </Box>

            <Box>
                <BaseComponent backgroundColor="none" boxShadow={"none"}> 
                    <Breadcrumb/>
                </BaseComponent>
            </Box>

        </Stack>


    )
}