import { Box, Stack, styled } from "@mui/material";
import NavigationBar from "./NavigationBar";
import HotNews from "./HotNews";
import { blueGrey } from "@mui/material/colors";

const Item = styled(Box)(() => ({
    // backgroundColor: '#fff',
    paddingInline: "10% 10%"
}));  

export default function Header() {

    // console.log(userInfo);
    
    return(
        <header>
            <Box sx={{width:"100%"}}>
                <Stack>
                    <Item bgcolor="primary.main" paddingBlock={1}>
                        <NavigationBar/>
                    </Item>
                    <Item bgcolor={blueGrey[50]} paddingBlock={1}>
                        <HotNews/>
                    </Item>
                </Stack>
            </Box>

        </header>
    )
}