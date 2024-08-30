import { RouterProvider } from "react-router-dom";
import routes from "./routes/init";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchAllProducts } from "./redux/slices/productSlice";

export default function App() {

  const dispatch = useDispatch() 

  useEffect(()=>{
    dispatch(fetchAllProducts())   

  }, [])

  return (
    <RouterProvider router={routes}/>
  );
}

