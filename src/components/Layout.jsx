import { NavLink, Outlet } from "react-router-dom";
import Styles from "./Layaut.module.css"
import styled from "styled-components";
export const Layout = () => {

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(230, 87, 87);
  }
`;
    return (
        <div className={Styles.header}>
            <ul className={Styles.nav}>
                <li>
                  <StyledLink className={Styles.navLink} to="/" >Home</StyledLink>
                </li>
                <li>
                  <StyledLink className={Styles.navLink} to="/movies" >Movies</StyledLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}