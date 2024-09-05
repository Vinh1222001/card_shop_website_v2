import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";
import SpeedDialContacts from "../../components/SpeedDial/SpeedDialContacts";

export default function MainLayout() {

    const globalPaddingX = useLoaderData().paddingX

    return(
        <>
            <header>
                <Header globalPaddingX={globalPaddingX}/>
            </header>
            <Box sx={{ position: 'relative', paddingBottom: 5}}>

                <Outlet context={globalPaddingX}/>

                <SpeedDialContacts/>
            </Box>
            <footer>

                <Footer globalPaddingX={globalPaddingX}/>
            </footer>
        </>
    )
}