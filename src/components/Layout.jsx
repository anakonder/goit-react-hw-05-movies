import { NavLink, Outlet } from "react-router-dom";
import Styles from "./Layaut.module.css"
export const Layout = () => {
    return (
        <div className={Styles.header}>
            <ul className={Styles.nav}>
                <li>
                  <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                  <NavLink to="/movies" >Movies</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}