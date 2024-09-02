const env = process.env;

const ROUTES = {
    HOME: env.REACT_APP_HOME_URL,

    SIGNIN: env.REACT_APP_SIGN_IN_URL,

    USER_INFO: `:id/${env.REACT_APP_USER_INFO_URL}`,
    USER_OREDERS: `:id/${env.REACT_APP_USER_ORDERS_URL}`,
    USER_CARDS: `:id/${env.REACT_APP_USER_CARDS_URL}`,

    SINGLE_PRODUCT: `${env.REACT_APP_PRODUCTS_URL}/${env.REACT_APP_PRODUCT_PAGE_URL}/:id`,
    PRODUCTS_LIST: `${env.REACT_APP_PRODUCTS_URL}/${env.REACT_APP_SIMILAR_PRODUCTS_URL}`,
    HOT_PRODUCTS: `${env.REACT_APP_PRODUCTS_URL}/${env.REACT_APP_HOT_PRODUCTS_URL}`,
    NEW_PRODUCTS: `${env.REACT_APP_PRODUCTS_URL}/${env.REACT_APP_NEW_PRODUCTS_URL}`,

}

export const ROUTE_LIST = {
    HOME: "HOME",

    SIGNIN: "SIGNIN",

    USER_INFO: "USER_INFO",
    USER_OREDERS: "USER_OREDERS",
    USER_CARDS: "USER_CARDS",
    
    SINGLE_PRODUCT: "SINGLE_PRODUCT",
    PRODUCTS_LIST: "PRODUCTS_LIST",
    HOT_PRODUCTS: "HOT_PRODUCTS",
    NEW_PRODUCTS: "NEW_PRODUCTS",
}

const ID_ROUTES_LIST = [
    ROUTE_LIST.USER_CARDS,
    ROUTE_LIST.USER_INFO,
    ROUTE_LIST.USER_OREDERS,

    ROUTE_LIST.SINGLE_PRODUCT
]

export const routeBuilder = (route, id ="")=>{

    // console.log(route, id);
    
    if(ID_ROUTES_LIST.includes(route,0)){
        return ROUTES[route].replace(":id", id)
    }

    // console.log(env.RACT_APP_HOT_PRODUCTS_URL);
    

    return ROUTES[route]
}