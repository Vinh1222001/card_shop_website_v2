import { Box, Stack, styled } from "@mui/material";
import NavigationBar from "./NavigationBar";
import HotNews from "./HotNews";

const Item = styled(Box)(() => ({
    backgroundColor: '#fff',
    paddingInline: "5% 5%"
}));  

export default function Header() {

    // console.log(userInfo);
    
    return(
        <header>
            <Box sx={{width:"100%"}}>
                <Stack>
                    <Item>
                        <NavigationBar/>
                    </Item>
                    <Item>
                        <HotNews/>
                    </Item>
                </Stack>
            </Box>

        </header>
    )
}