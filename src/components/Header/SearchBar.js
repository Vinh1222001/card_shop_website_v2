import { Autocomplete, Box, Button, styled, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllProductsSelector } from "../../redux/selectors/productsSelector";
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from "react-router-dom";

const Rounded = styled(TextField)(()=>({
    borderRadius: 50
}))

export default function SearchBar() {

    const [productSelecting, setProductSelecting] = useState(null)
    const [productTyping, setProductTyping] = useState('')

    const navigate = useNavigate()
    const products = useSelector(getAllProductsSelector)

    const navigateToProductPage = () =>{
        if(productSelecting){
            navigate(`product/${productSelecting.id}`)
        }else{
            navigate("product/list")
        }
    }

    return(
        <Box display="flex">
            <Autocomplete
                disablePortal
                options={products}
                getOptionLabel={(option)=>option.name}
                // filterOptions={product_names}
                sx={{ width: 300, borderRadius: 50 }}
                size="small"
                renderInput={(params) => <Rounded {...params} placeholder="Tìm kiếm sản phẩm" />}
                
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
            >
                <SearchOutlinedIcon fontSize="medium"/>
            </Button>
        </Box>
    )
}