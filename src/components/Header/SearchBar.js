import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllReleasedProductsSelector } from "../../redux/selectors/productsSelector";
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";


export default function SearchBar() {

    const [productSelecting, setProductSelecting] = useState(null)
    const [productTyping, setProductTyping] = useState('')

    const navigate = useNavigate()
    const products = useSelector(getAllReleasedProductsSelector)
    const [searchParam, setSearhParam] = useSearchParams()
    // console.log(products);
    const navigateToProductPage = () =>{
        if(productSelecting){

            const url = routeBuilder(ROUTE_LIST.SINGLE_PRODUCT, productSelecting.id)

            navigate(url)
        }else{

            if(!searchParam.has('search')){
                searchParam.set("search", "")
                
            }

            searchParam.set("search", productTyping)
            setSearhParam(searchParam)

            navigate({
                pathname: routeBuilder(ROUTE_LIST.PRODUCTS_LIST),
                search: searchParam.toString()
            })
        }
    }

    return(
        <Box display="flex">
            <Autocomplete
                disablePortal
                clearOnBlur={false}
                options={products}
                getOptionLabel={(option)=>option.name}
                // filterOptions={product_names}
                sx={{ width: 200}}
                size="small"
                renderInput={(params) => <TextField {...params} placeholder="Tìm kiếm sản phẩm" />}
                
                value={productSelecting}
                onChange={(event, newValue) => {
                    
                    setProductSelecting(newValue);
                }}

                inputValue={productTyping}
                onInputChange={(event, newInputValue) => {
                    
                    setProductTyping(newInputValue);
                }}
                
            />
            <Button variant="contained"
                    onClick={navigateToProductPage}
                    bgcolor="secondary.main"
                    disabled={!(productSelecting || productTyping)}
            >
                <SearchOutlinedIcon fontSize="medium"/>
            </Button>
        </Box>
    )
}