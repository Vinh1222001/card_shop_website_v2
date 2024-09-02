import { RouterProvider } from "react-router-dom";
import routes from "./routes/init";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchAllProducts } from "./redux/slices/productSlice";
import { fetchAllHotNews } from "./redux/slices/hotNewsSlice";
import { fetchAllContacts } from "./redux/slices/contactsSlice";
import { fetchAllBannerSlides } from "./redux/slices/bannerSlidesSlice";

export default function App() {

  const dispatch = useDispatch() 

  useEffect(()=>{
    dispatch(fetchAllProducts())   
    dispatch(fetchAllHotNews())
    dispatch(fetchAllContacts())
    dispatch(fetchAllBannerSlides())
  }, [dispatch])

  return (
    <RouterProvider router={routes}/>
  );
}

