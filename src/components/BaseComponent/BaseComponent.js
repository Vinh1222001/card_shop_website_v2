import { Container, Stack, styled } from "@mui/material";

const CustomContainer = styled(Container)(({theme})=>({
    [theme.breakpoints.up('xl')]:{
        maxWidth: "100%",
        paddingInline : "10%"
    }
}))


export default function BaseComponent({
    children,
    className="",
    id="",
    sx={},
    backgroundColor= "white",
    boxShadow=1
}) {
    return(
        <CustomContainer 
            id={id}
            className={className}
            sx={{
                paddingInline: "10%",
            }}
            component={"section"}
        >
            <Stack 
                sx={{
                    boxShadow: boxShadow,
                    ...sx
                }}

                bgcolor={backgroundColor}
            >

                {children}
            </Stack>
        </CustomContainer>
    )
}