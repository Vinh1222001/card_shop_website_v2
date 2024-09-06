import { Stack } from "@mui/material";

export default function BaseComponent({
    children,
    className="",
    id="",
    sx={},
    backgroundColor= "white",
    boxShadow=1
}) {
    return(
        <Stack 
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
        </Stack>
    )
}