import { Link, Outlet } from "react-router-dom";

export default function Home(){

    return (
        <section>
            HOME PAGE
            <Link to={'login'}>Login</Link>

            <div>
                <Outlet/>
            </div>
        </section>
    )
}
