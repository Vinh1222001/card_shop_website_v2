import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";

export default function MainLayout() {

    const globalPaddingX = useLoaderData().paddingX

    return(
        <>
            <header>

                <Header globalPaddingX={globalPaddingX}/>

            </header>
            <Box>

                <Outlet context={globalPaddingX}/>
            </Box>
            <footer>

                <Footer globalPaddingX={globalPaddingX}/>
            </footer>
        </>
    )
}