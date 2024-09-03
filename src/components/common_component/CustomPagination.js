import { Divider, Pagination, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function CustomePagination(
    {
        count,
        page,
        handleSetPage
    }
) {

    const [searchParam, setSearhParam] = useSearchParams()

    useEffect(()=>{

        if(!searchParam.has('page')){
            searchParam.set("page", "1")
            
        }
        // console.log("page", typeof page.toString());
        if(searchParam.get("page") !== page.toString()){

            searchParam.set("page", page)
            setSearhParam(searchParam)
        }


    }, [page])

    const _handleSetPage = (event, value) =>{
        handleSetPage(value)
        
    }

    return(

        <Stack gap={1}>

            <Divider sx={{width: "100%"}}/>
    
            <Pagination 
                count={count}
                page={page}
                onChange={_handleSetPage}
            />

        </Stack>

    )
}