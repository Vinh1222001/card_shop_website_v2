import { Link } from "react-router-dom"

export const crumbCreator=()=>{
    return {

        crumb: (routeSeg, pageName)=> <Link to={routeSeg}>{pageName}</Link>
    }
}