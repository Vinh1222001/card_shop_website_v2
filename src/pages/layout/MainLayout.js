import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box, Container } from "@mui/material";
import SpeedDialContacts from "../../components/SpeedDial/SpeedDialContacts";

export default function MainLayout() {

    const globalPaddingX = useLoaderData().paddingX

    return(
        <>
            <Box component={"header"}>
                <Header globalPaddingX={globalPaddingX}/>
            </Box>
            <Container disableGutters fixed maxWidth={false} sx={{ position: 'relative', paddingBottom: 5}} component={"main"}>

                <Outlet context={globalPaddingX}/>

                <SpeedDialContacts/>
            </Container>
            <Box component={"footer"}>

                <Footer globalPaddingX={globalPaddingX}/>
            </Box>
        </>
    )
}