import { Breadcrumbs } from "@mui/material";
import { useMatches } from "react-router-dom";

export default function Breadcrumb() {

    let matches = useMatches()

    let crumbs = matches
                .filter((match) => Boolean(match.handle?.crumb))
                .map((match) => match.handle.crumb(match.pathname, match.data?.name))
    
    // console.log(crumbs);

    return(
        
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            {crumbs.length>1 ? crumbs : ''}
        </Breadcrumbs>

    )
}