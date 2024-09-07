import { Button, Grid2, Stack, Tooltip, Box, Divider} from "@mui/material";
import BaseComponent from "../components/BaseComponent/BaseComponent";
import { useState } from "react";
import SignIn from "../components/Account/SignIn";
import SignUp from "../components/Account/SignUp";



export default function SignInAndSignUp(){

    const commonGap = 2
    return(

        <BaseComponent>
            <Stack 
                direction={"row"} 
                justifyContent={"space-between"} 
                divider={
                    <Divider orientation="vertical" flexItem> Hay </Divider>
                }
            >

                <Box padding={[3,4]} flex={1}>
                    

                    <SignUp
                        commonGap={commonGap}
                    />

                
                </Box>

                <Box padding={[3,4]} flex={1}>
                    
                        
                    <SignIn
                        commonGap={commonGap}
                    />

                
                </Box>
            </Stack>
        </BaseComponent>
        
    )
}