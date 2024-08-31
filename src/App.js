import { RouterProvider } from "react-router-dom";
import routes from "./routes/init";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchAllProducts } from "./redux/slices/productSlice";
import { fetchAllHotNews } from "./redux/slices/hotNewsSlice";
import { fetchAllContacts } from "./redux/slices/contactsSlice";

export default function App() {

  const dispatch = useDispatch() 

  useEffect(()=>{
    dispatch(fetchAllProducts())   
    dispatch(fetchAllHotNews())
    dispatch(fetchAllContacts())
  }, [])

  return (
    <RouterProvider router={routes}/>
  );
}

