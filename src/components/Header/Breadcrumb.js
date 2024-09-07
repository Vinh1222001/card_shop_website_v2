import { Breadcrumbs } from "@mui/material";
import { Link, useMatches } from "react-router-dom";

export default function Breadcrumb() {
  let matches = useMatches();

  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.pathname, match.data?.name));

  // console.log(crumbs);

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" maxItems={5}  sx={{marginBottom: 2}}>

      {crumbs.length > 1 ? 
      
        crumbs.map((crumb, index)=>{
          return(

            <Link to={crumb.routeSeg} key={`crumb-${index}`}>
              {crumb.routeName}
            </Link>
          )
        }) 
      
      : ""}
    </Breadcrumbs>
  );
}
