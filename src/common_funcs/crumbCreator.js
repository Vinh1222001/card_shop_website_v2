
export const crumbCreator=()=>{
    return {

        crumb: (routeSeg, pageName)=> {
            return {
                routeSegment: routeSeg,
                routeName: pageName
            }
        }
    }
}